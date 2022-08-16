import { defineStore } from 'pinia';
import { IConfig } from 'src/components/models';
import { NewConfig } from 'src/lib/config';
import { db } from 'src/lib/db';
import { deepCopy } from 'src/lib/util';

export const useConfigStore = defineStore('config', {
  state: () => {
    return { data: NewConfig() };
  },

  getters: {},

  actions: {
    async populateStore() {
      if ((await db.config.count()) > 0) {
        try {
          this.data = (await db.config
            .where('id')
            .equals(1)
            .first()) as IConfig;
        } catch (err) {
          console.log(err);
        }
      } else {
        const conf = NewConfig();
        this.data = conf;
        db.config.put(conf).catch((err) => console.log(err));
      }
    },

    async save() {
      const storeCopy = deepCopy(this.data) as IConfig;
      await db.config.update(1, storeCopy).catch((err) => console.log(err));
    },

    async updateIndex() {
      const characters = await db.character.toArray();
      this.data.index = characters.map((c) => ({
        name: c.name,
        id: c.id,
      }));
    },
  },
});
