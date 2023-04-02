import $ from "jquery";

import { CommandInfo, CommandManager } from "./commandManager";
import * as Default from "./packages/default";
import * as Lols from "./packages/lols";

import "./style.css";

function createResult(command: CommandInfo, id: number): JQuery<HTMLElement> {
  let res = $("<div></div>").attr("id", `command-${id}`).addClass("result-command");
  res.html(command.description);
  res.data("name", command.name);
  return res;
}


$(() => {

  let calculator =  Desmos.GraphingCalculator($("#calculator")[0]);

  // load commands
  let cmdManager: CommandManager = new CommandManager;
  cmdManager.load(Default.commands);
  cmdManager.load(Lols.commands);

  // command palette
  let prevFocus: JQuery | null = null;
  let commandArr = [];
  let selectedCmdId = 0;
  // show/hide and run commands
  $(document).keydown((e) => {
    // view and hide the command palette
    switch (e.code) {
      case "Space":
        if (!shiftPressed) {
          prevFocus = $(":focus");

          $("#cmd-input:hidden").val("");
          if ($("#cmd-input:visible").length == 0) {
            setTimeout(() => { $("#cmd-input").val(""); }, 10);
          }

          $("#cmd:hidden").fadeIn(200);
          $("#cmd-input").focus();
        }

        break;
      case "Enter":
        if ($("#cmd-input").is(":focus")) {
          let input: string = $(`#command-${selectedCmdId}`).data("name");

          $("#cmd").fadeOut(50);
          $("#cmd-input").focusout();

          prevFocus?.focus();

          if (cmdManager.hasCommand(input)) {
            setTimeout(() => { cmdManager.executeCommand(input, calculator, selectedItems); }, 10);
          }
        }

        break;
      case "Escape":
        $("#cmd").fadeOut(50);
        $("#cmd-input").focusout();

        prevFocus?.focus();
        break;
      default:
        // if cmd is visible
        // update query and results
        break;
    }
  });
  // get commands
  $("#cmd-input").on("input", () => {
    commandArr = cmdManager.getCommands($("#cmd-input").val() as string);
    selectedCmdId = 0;
    $("#cmd-results").html("");
    for (let i = 0; i < commandArr.length; i++) {
      let result = createResult(commandArr[i], i);
      if (i == 0) {
        result.addClass("selected");
      }
      
      $("#cmd-results").append(result);
      
    }
  });
  // arrow keys in cmd input
  $("#cmd-input").keydown(function (e) {
    if ($(this).is(":focus")) {
      if (e.code == "ArrowDown") {
        e.preventDefault();
        if (selectedCmdId < commandArr.length - 1) {
          $(`#command-${selectedCmdId + 1}`).addClass("selected");
          $(`#command-${selectedCmdId}`).removeClass("selected");
          selectedCmdId++;
        }
      }

      if (e.code == "ArrowUp") {
        e.preventDefault();
        if (selectedCmdId > 0) {
          $(`#command-${selectedCmdId - 1}`).addClass("selected");
          $(`#command-${selectedCmdId}`).removeClass("selected");
          selectedCmdId--;
        }
      }
    }
  });

  // multiple selection
  let selectedItems = new Set<string>(); // tracks ids of currently selected items
  let shiftPressed: boolean = false;
  let prevSelectedItem: string | undefined = "";
  function updateSelected() {
    if (!calculator.isAnyExpressionSelected) {
      if (selectedItems.size > 0) {
        for (let id of selectedItems) {
          $(`div[expr-id="${id}"]`).removeClass("dcg-selected");
        }
        selectedItems = new Set<string>();
      }
    } else if (calculator.selectedExpressionId != prevSelectedItem) {
      if (shiftPressed) {
        selectedItems.add(calculator.selectedExpressionId);
      } else {
        for (let id of selectedItems) {
          $(`div[expr-id="${id}"]`).removeClass("dcg-selected");
        }
        selectedItems = new Set<string>();
        selectedItems.add(calculator.selectedExpressionId);
      }

      for (let id of selectedItems) {
        $(`div[expr-id="${id}"]`).addClass("dcg-selected");
      }
    }
    prevSelectedItem = calculator.selectedExpressionId;
  }
  $(document).keydown((e) => {
    updateSelected();
    if (e.code.indexOf("Shift") == 0) {
      shiftPressed = true;
    }
  });
  $(document).keyup((e) => {
    if (e.code.indexOf("Shift") == 0) {
      shiftPressed = false;
    }
  });
  $(document).on("click", ".dcg-mathitem, .dcg-new-math-div", function () {
    prevSelectedItem = "";
    updateSelected();
  });

  // ask about unsaved work
  $(window).on("beforeunload", (): number | void => {
    for (let e of calculator.getExpressions()) {
      if ("latex" in e) {
        if (e.latex != "") {
          return 0;
        }
      } else {
        return 0;
      }
    }

    // don't return anything
  });


})

