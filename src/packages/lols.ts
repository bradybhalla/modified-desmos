import { CommandInfo } from "../commandManager";

export let commands: CommandInfo[] = [
  {
    description: "Down in Ohio",
    callback: (calc)=>{
      calc.setExpression({latex:"\\alpha\\mu 0ng\\ u\\zeta"})
    }
  }
]