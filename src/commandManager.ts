export type DesmosCallback = (calc: Desmos.Calculator) => void;

export type CommandInfo = {
  /** The name used to call the command */
  name: string;

  /** The description that shows up in the program */
  description: string;

  /** The function that is executed when the command is used */
  callback: DesmosCallback;
}

export class CommandManager {
  _commands: Map<string, CommandInfo>;

  constructor() {
    this._commands = new Map<string, CommandInfo>();
  }

  /**
   * Loads a list of commands
   */
  load(commands: CommandInfo[]): void {
    for (let c of commands) {
      if (this._commands.has(c.name)) {
        throw "Command already defined";
      }

      this._commands.set(c.name, c);

    }
  }

  /**
   * Returns an ordered list of commands based on an input string
   */
  getCommands(query: string): CommandInfo[] {
    return Array.from(this._commands.values());
  }

  hasCommand(name: string): boolean {
    return this._commands.has(name);
  }

  /**
   * Executes the given command
   */
  executeCommand(name: string, calc: Desmos.Calculator): void {
    if (!this._commands.has(name)) {
      throw "Command does not exist";
    }

    this._commands.get(name)!.callback(calc);
  }
}
