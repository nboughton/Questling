import { uid } from 'quasar';
import { ICharacter, IInventoryItem, INote, IRole } from 'src/components/models';

export const NewCharacter = (): ICharacter => {
  return {
    name: '',
    id: uid(),
    hp: 10,
    ap: 10,
    roles: {},
    notes: [],
    deets: {
      pronouns: '',
      age: 0,
      height: '',
      body: '',
      face: '',
      vibe: '',
      wear: ['', ''],
      move: '',
      from: '',
      knownFor: '',
      ideal: '',
      flaw: '',
      dream: '',
    },
    inventory: [],
    tinyItems: '',
  };
};

export const NewInventoryItem = (): IInventoryItem => {
  return {
    name: 'New item',
    text: '',
    subAbilities: [],
  };
};

export const NewNote = (): INote => {
  return {
    name: 'New note',
    text: '',
    tags: [],
  };
};

export const NewRole = (): IRole => {
  return {
    name: 'New Role',
    id: `Custom-${uid()}`,
    paths: {},
  };
};
