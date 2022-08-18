// Shared models
export interface IHasName {
  name: string;
}

export interface IHasID {
  id: string;
}

export interface IHasSubAbilities {
  subAbilities: ISubAbility[];
}

export interface IMightDoDMG {
  dmg?: number;
}

export interface IMightHaveTable {
  table?: ITableRow[];
}

// Config
export interface IConfig {
  id: number; // config ids are different
  current: string;
  index: IIndexItem[];
  saving: boolean;
  edit: boolean;
  showAbilityBrowserHelp: boolean;
}

export interface IIndexItem extends IHasName, IHasID {}

// Character
export interface ICharacter extends IHasName, IHasID {
  hp: number;
  ap: number;
  roles: { [index: string]: IRole };
  deets: {
    pronouns: string;
    age: number;
    height: string;
    body: string;
    face: string;
    vibe: string;
    wear: string[];
    move: string;
    from: string;
    knownFor: string;
    ideal: string;
    flaw: string;
    dream: string;
  };
  inventory: IInventoryItem[];
  tinyItems: string;
}

export interface IRole {
  paths: { [index: string]: IAbility[] };
  selected?: boolean;
}

export interface IAbility extends IHasName, IHasSubAbilities {
  learned?: boolean;
  prefixText?: string;
  suffixText?: string;
  roll?: boolean;
}

export interface ISubAbility extends IMightDoDMG, IMightHaveTable {
  ap?: number | 'X';
  text: string;
}

export interface ITableRow {
  floor: number;
  ceiling?: number;
  result: string;
}

export interface IRollResult {
  roll: number;
  result: string;
}

export interface IInventoryItem extends IHasName, IHasSubAbilities, IMightDoDMG {
  text: string;
}

export interface IKnownCount {
  known: number;
  total: number;
}

export interface IKnownAbilities {
  [index: string]: {
    role: IKnownCount;
    paths: { [index: string]: IKnownCount };
  };
}
