// Shared models
export interface IHasName {
  name: string;
}

export interface IHasID {
  id: string;
}

export interface IMightDoDMG {
  dmg?: number;
}

export interface IMightHaveTable {
  table?: ITableRow[];
}

// Config
export interface IConfig {
  id: number; // config ids are a different
  current: string;
  index: IIndexItem[];
  saving: boolean;
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
}

export interface IAbility extends IHasName {
  prefixText?: string;
  suffixText?: string;
  roll?: boolean;
  subAbilities: ISubAbility[];
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

export interface IInventoryItem extends IHasName, IMightDoDMG, IMightHaveTable {
  text: string;
}
