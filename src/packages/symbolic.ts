import { CommandInfo } from "../commandManager";

import nerdamer from "nerdamer";
import "nerdamer/Calculus";
import "nerdamer/Algebra";



// these commands will only work if simple variables are used
// (no subscripts, greek letters, etc.)



/**
 * 1) Formats input latex from desmos
 * 
 * 2) Changes to nerdamer expression
 * 
 * 3) Executes the function on that expression
 * 
 * 4) Formats the output latex back to desmos
 */ 
function desmosWrapper(input: string, func: (expr: any)=>any){
  const prepared = input
    .replaceAll("\\ln", "\\log");                                        // nerdamer treats log as natural log

  const res: string = func(nerdamer.convertFromLaTeX(prepared)).toTeX();

  return res
    .replaceAll(/\\mathrm\{(.*?)\}/g, (...args)=>"\\"+args[1])           // \sin instead of \mathrm{sin}
    .replaceAll("\\log", "\\ln")                                         // nerdamer treats log as natural log
    .replaceAll(/a(sin|cos|tan|sec|csc|cot)/g, (...args)=>"arc"+args[1]) // \arcsin instead of \asin
    .replaceAll("\\cdot", " ");                                          // no \cdot
}



export let commands: CommandInfo[] = [
 {
    description: "Expand",
    callback: (calc, selectedIds) => {
      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (!("id" in e) || !("latex" in e)){
          continue;
        }
        if (e.id == undefined || e.latex==undefined || e.latex==""){
          continue;
        }
        if (selectedIds.has(e.id)) {
          calc.setExpression({ id: e.id, latex: desmosWrapper(e.latex, expr=>expr.expand()) });
        }
      }
    }
  },
  {
    description: "Differentiate (d/dx)",
    callback: (calc, selectedIds) => {
      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (!("id" in e) || !("latex" in e)){
          continue;
        }
        if (e.id == undefined || e.latex==undefined || e.latex==""){
          continue;
        }
        if (selectedIds.has(e.id)) {
          calc.setExpression({ id: e.id, latex: desmosWrapper(e.latex, expr=>nerdamer.diff(expr,"x")) });
        }
      }
    }
  },
  {
    description: "Integrate (dx)",
    callback: (calc, selectedIds) => {
      let expressions = calc.getExpressions();
      for (let e of expressions) {
        if (!("id" in e) || !("latex" in e)){
          continue;
        }
        if (e.id == undefined || e.latex==undefined || e.latex==""){
          continue;
        }
        if (selectedIds.has(e.id)) {
          calc.setExpression({ id: e.id, latex: desmosWrapper(e.latex, expr=>nerdamer.integrate(expr,"x")) });
        }
      }
    }
  }
]