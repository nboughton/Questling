import Dexie from 'dexie';
import { ICharacter, IConfig, IRole } from 'src/components/models';

export class QuestlingDB extends Dexie {
  config: Dexie.Table<IConfig, number>;
  character: Dexie.Table<ICharacter, string>;
  roles: Dexie.Table<IRole, string>;

  constructor() {
    super('QuestlingDB');

    this.version(1).stores({
      config: '&id',
      character: '&id',
    });

    this.version(2).stores({
      config: '&id',
      character: '&id',
      roles: '&id',
    });

    this.config = this.table('config');
    this.character = this.table('character');
    this.roles = this.table('roles');
  }
}

export const db = new QuestlingDB();
