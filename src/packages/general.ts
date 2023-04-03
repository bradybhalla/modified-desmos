import { CommandInfo } from "../commandManager";

export let commands: CommandInfo[] = [
  {
    description: "Delete Selected Expressions",
    callback: (calc, ids) => {
      for (let id of ids) {
        calc.removeExpression({id: id});
      }
    }
  },
  {
    description: "Copy Selected Expressions",
    callback: (calc, ids) => {
      let text = "";
      for (let e of calc.getExpressions()) {
        if (!("id" in e) || !("latex" in e)){
          continue;
        }
        if (e.id == undefined || e.latex==undefined || e.latex==""){
          continue;
        }
        if (ids.has(e.id)){
          text += e.latex + "\n";
        }
      }
      window.navigator.clipboard.writeText(text.substring(0,text.length-1));
    }
  },
];