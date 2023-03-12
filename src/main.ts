import $ from "jquery";

import { CommandManager } from "./commandManager";
import * as Default from "./packages/default";

import "./style.css";

$(() => {
  let calculator = Desmos.GraphingCalculator($("#calculator")[0]);

  let cmdManager: CommandManager = new CommandManager;
  cmdManager.load(Default.commands);

  let prevFocus: JQuery | null = null;
  $(document).keydown((e) => {
    switch (e.code) {
      case "Space":
        prevFocus = $(':focus');

        $("#cmd-input:hidden").val("");
        if ($("#cmd-input:visible").length == 0) {
          setTimeout(() => { $("#cmd-input").val(""); }, 10);
        }

        $("#cmd:hidden").fadeIn(200);
        $("#cmd-input").focus();

        break;
      case "Enter":
        let input: string = ($("#cmd-input")[0] as HTMLInputElement).value.toLowerCase();

        $("#cmd").fadeOut(50);
        $("#cmd-input").focusout();

        prevFocus?.focus();

        if (cmdManager.hasCommand(input)) {
          setTimeout(() => { cmdManager.executeCommand(input, calculator); }, 10);
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

