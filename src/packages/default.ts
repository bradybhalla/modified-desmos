import { CommandInfo } from "../commandManager";

export let commands: CommandInfo[] = [
  {
    name: "new",
    description: "New Expression",
    callback: (calc)=>{
      calc.setExpression({ latex: "x^2\\left(x+1\\right)" });
    }
  }
];