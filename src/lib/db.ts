import Dexie from 'dexie';
import { ICharacter, IConfig } from 'src/components/models';

export class QuestlingDB extends Dexie {
  config: Dexie.Table<IConfig, number>;
  character: Dexie.Table<ICharacter, string>;

  constructor() {
    super('QuestlingDB');

    this.version(1).stores({
      config: '&id',
      character: '&id',
    });

    this.config = this.table('config');
    this.character = this.table('character');
  }
}

export const db = new QuestlingDB();
