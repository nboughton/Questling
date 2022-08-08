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

// Config
export interface IConfig {
  id: number;
  current: string;
  index: IIndexItem[];
  saving: boolean;
}

export interface IIndexItem extends IHasName, IHasID {}

// Character
export interface ICharacter extends IHasName, IHasID {
  hp: number;
  ap: number;
  roles: { [index: string]: IAbility[] };
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

export interface IAbility extends IHasName {
  text: string;
  subAbilities: ISubAbility[];
}

export interface ISubAbility extends IMightDoDMG {
  ap: number;
  text: string;
}

export interface IInventoryItem extends IHasName, IMightDoDMG {
  text: string;
}
