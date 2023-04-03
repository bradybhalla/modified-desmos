import { Fzf } from "fzf";

export type DesmosCallback = (
  calc: Desmos.Calculator, // calculator instance
  selectedIds: Set<string> // the currently selected ids (from my added multiselect)
) => void;

export type CommandInfo = {
  /**
   * The description that shows up in the program.
   * Must be unique.
   */
  description: string;

  /** The function that is executed when the command is used */
  callback: DesmosCallback;
};


export class CommandManager {
  static max_results = 10;
  _commands: Map<string, CommandInfo>;
  _fuzzy: Fzf<string[]> | null;

  /**
   * "List Commands"
   */
  static listCommandGen = (obj: CommandManager) => ()=>{
    console.log(Array.from(obj._commands.keys()).sort());
    alert("Commands listed in JS console. (Hopefully this will be changed later.)")
  }

  constructor() {
    this._commands = new Map<string, CommandInfo>();

    // list command has special access to this object
    this._commands.set("List Commands", {
      description: "List Commands",
      callback: CommandManager.listCommandGen(this)
    });

    this._fuzzy = null;
  }


  /**
   * Loads a list of commands
   */
  load(commands: CommandInfo[]): void {
    for (let c of commands) {
      if (this._commands.has(c.description)) {
        throw "Command already defined";
      }

      this._commands.set(c.description, c);

    }
  }

  /**
   * Initialize fuzzy finder (after all commands have been loaded)
   */
  fzfInit(): void {
    this._fuzzy = new Fzf(Array.from(this._commands.keys()));
  }

  /**
   * Returns an ordered list of commands based on an input string
   */
  getCommands(query: string): CommandInfo[] {
    if (query == "" || query == " ") {
      return [];
    }
    if (this._fuzzy == null) {
      this.fzfInit();
    }
    const results = (this._fuzzy as Fzf<string[]>).find(query);
    return Array.from(results, res => this._commands.get(res.item)!).slice(0, CommandManager.max_results);
  }

  hasCommand(name: string): boolean {
    return this._commands.has(name);
  }

  /**
   * Executes the given command
   */
  executeCommand(name: string, calc: Desmos.Calculator, selectedIds: Set<string>): void {
    if (!this._commands.has(name)) {
      throw "Command does not exist";
    }

    this._commands.get(name)!.callback(calc, selectedIds);
  }
}
