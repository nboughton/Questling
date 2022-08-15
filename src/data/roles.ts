import { IRole } from 'src/components/models';
import { Doctor } from './doctor';
import { Fighter } from './fighter';
import { Invoker } from './invoker';
import { Magician } from './magician';
import { Naturalist } from './naturalist';
import { Ranger } from './ranger';
import { Spy } from './spy';
import { Wizard } from './wizard';

export const Roles: { [index: string]: IRole } = {
  Fighter: Fighter,

  Invoker: Invoker,

  Ranger: Ranger,

  Naturalist: Naturalist,

  Doctor: Doctor,

  Spy: Spy,

  Magician: Magician,

  Wizard: Wizard,
};
