import { uid } from 'quasar';
import { ICharacter } from 'src/components/models';

export const NewCharacter = (): ICharacter => {
  return {
    name: '',
    id: uid(),
    hp: 10,
    ap: 10,
    roles: {},
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
