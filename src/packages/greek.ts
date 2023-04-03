import { CommandInfo } from "../commandManager";

export let commands: CommandInfo[] = [
  {
    description: "\\alpha",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\alpha" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\alpha" });
        }
      }
    }
  },
  {
    description: "\\beta",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\beta" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\beta" });
        }
      }
    }
  },
  {
    description: "\\Gamma",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\Gamma" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\Gamma" });
        }
      }
    }
  },
  {
    description: "\\gamma",
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
  },
  {
    description: "\\Delta",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\Delta" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\Delta" });
        }
      }
    }
  },
  {
    description: "\\delta",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\delta" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\delta" });
        }
      }
    }
  },
  {
    description: "\\epsilon",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\epsilon" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\epsilon" });
        }
      }
    }
  },
  {
    description: "\\zeta",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\zeta" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\zeta" });
        }
      }
    }
  },
  {
    description: "\\eta",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\eta" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\eta" });
        }
      }
    }
  },
  {
    description: "\\Theta",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\Theta" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\Theta" });
        }
      }
    }
  },
  {
    description: "\\theta",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\theta" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\theta" });
        }
      }
    }
  },
  {
    description: "\\iota",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\iota" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\iota" });
        }
      }
    }
  },
  {
    description: "\\kappa",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\kappa" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\kappa" });
        }
      }
    }
  },
  {
    description: "\\Lambda",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\Lambda" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\Lambda" });
        }
      }
    }
  },
  {
    description: "\\lambda",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\lambda" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\lambda" });
        }
      }
    }
  },
  {
    description: "\\mu",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\mu" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\mu" });
        }
      }
    }
  },
  {
    description: "\\nu",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\nu" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\nu" });
        }
      }
    }
  },
  {
    description: "\\Xi",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\Xi" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\Xi" });
        }
      }
    }
  },
  {
    description: "\\xi",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\xi" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\xi" });
        }
      }
    }
  },
  {
    description: "\\Pi",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\Pi" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\Pi" });
        }
      }
    }
  },
  {
    description: "\\pi",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\pi" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\pi" });
        }
      }
    }
  },
  {
    description: "\\rho",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\rho" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\rho" });
        }
      }
    }
  },
  {
    description: "\\Sigma",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\Sigma" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\Sigma" });
        }
      }
    }
  },
  {
    description: "\\sigma",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\sigma" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\sigma" });
        }
      }
    }
  },
  {
    description: "\\varsigma",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\varsigma" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\varsigma" });
        }
      }
    }
  },
  {
    description: "\\Phi",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\Phi" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\Phi" });
        }
      }
    }
  },
  {
    description: "\\phi",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\phi" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\phi" });
        }
      }
    }
  },
  {
    description: "\\varphi",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\varphi" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\varphi" });
        }
      }
    }
  },
  {
    description: "\\chi",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\chi" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\chi" });
        }
      }
    }
  },
  {
    description: "\\Psi",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\Psi" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\Psi" });
        }
      }
    }
  },
  {
    description: "\\psi",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\psi" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\psi" });
        }
      }
    }
  },
  {
    description: "\\Omega",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\Omega" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\Omega" });
        }
      }
    }
  },
  {
    description: "\\omega",
    callback: (calc) => {

      if (!calc.isAnyExpressionSelected) {
        calc.setExpression({ latex: "\\omega" });
        return;
      }

      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (e.id == calc.selectedExpressionId && "latex" in e) {
          calc.setExpression({ id: e.id, latex: e.latex + "\\omega" });
        }
      }
    }
  }
];