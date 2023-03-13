import { CommandInfo } from "../commandManager";

export let commands: CommandInfo[] = [
  {
    name: "ohio",
    description: "Down in Ohio",
    callback: (calc)=>{
      calc.setExpression({latex:"\\alpha\\mu 0ng\\ u\\zeta"})
    }
  }
]