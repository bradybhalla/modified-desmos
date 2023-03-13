import { CommandInfo } from "../commandManager";

export let commands: CommandInfo[] = [
  {
    name: "delete",
    description: "Delete Selected Expressions",
    callback: (calc, ids) => {
      for (let id of ids) {
        calc.removeExpression({id: id});
      }
    }
  },
  {
    name: "new",
    description: "New Expression",
    callback: (calc) => {
      calc.setExpression({ latex: "x^2\\left(x+1\\right)" });
    }
  },
  {
    name: "gamma",
    description: "gamma",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\gamma" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\gamma" });
        }
      }
    }
  }
];