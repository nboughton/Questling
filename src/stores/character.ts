import { defineStore } from 'pinia';
import { NewCharacter } from 'src/lib/character';
import { useConfigStore } from './config';
import { db } from 'src/lib/db';
import { ICharacter } from 'src/components/models';
import { exportFile } from 'quasar';
import { deepCopy, now } from 'src/lib/util';
import { Roles } from 'src/data/roles';

export const useCharacterStore = defineStore('character', {
  state: () => {
    return { data: NewCharacter() };
  },
  getters: {
    getTags: (state: { data: ICharacter }): string[] => {
      const t: string[] = [];
      state.data.notes.forEach((note) => note.tags.forEach((tag) => t.push(tag)));

      const dedupe = [...new Set(t)];
      dedupe.sort();
      return dedupe;
    },
  },
  actions: {
    async populateStore() {
      const config = useConfigStore();
      await config.populateStore();

      if ((await db.character.count()) > 0 && config.data.current !== '') {
        try {
          await this.load(config.data.current);
        } catch (err) {
          console.log(err);
        }
      } else {
        await this.new();
        await config.updateIndex();
      }
    },

    async new() {
      const config = useConfigStore();

      const newChar = NewCharacter();
      this.data = newChar;

      config.data.current = this.data.id;
      config.data.index.push({
        name: this.data?.name,
        id: this.data.id,
      });

      const storeCopy = deepCopy(this.data) as ICharacter;
      await db.character.put(storeCopy).catch((err) => console.log(err));
    },

    async save() {
      const storeCopy = deepCopy(this.data) as ICharacter;
      await db.character.update(this.data.id, storeCopy).catch((err) => console.log(err));

      const config = useConfigStore();
      await config.updateIndex();
    },

    async loadFirst() {
      const config = useConfigStore();

      const allCharacters = await db.character.toCollection().sortBy('name');
      const nextCharacter = allCharacters[0];
      const nextCharacterId = nextCharacter?.id;
      if (nextCharacterId) {
        await this.load(nextCharacterId);
        config.data.current = nextCharacterId;
      } else {
        await this.new();
      }

      await config.updateIndex();
    },

    async load(id: string) {
      try {
        const character = await db.character.get(id);

        if (character) {
          // Fix missing ID values, this block can be removed eventually
          // once it's fairly likely that everyone is using the new format.
          Object.keys(character.roles).forEach((key) => {
            // If it has no ID then it's old data that needs fixing
            if (!character.roles[key].id) {
              // Create new role with correct ID key
              const roleID = Roles[key].id;
              character.roles[roleID] = deepCopy(character.roles[key]);
              // Assign roleID/name fields
              character.roles[roleID].id = roleID;
              character.roles[roleID].name = Roles[key].name;
              //Delete original version
              delete character.roles[key];
            }
          });

          // Load character data
          this.data = character;
        } else {
          // we've entered bad state, rectify
          await this.loadFirst();
        }
      } catch (err) {
        console.log(err);
      }
    },

    async delete(id: string) {
      try {
        const config = useConfigStore();

        await db.character.delete(id);

        // If the deletion is for the active character, switch character
        if (config.data.current === id) {
          await this.loadFirst();
        }

        await config.updateIndex();
      } catch (err) {
        console.log(err);
      }
    },

    async exportData() {
      const data = JSON.stringify(await db.character.toArray());
      const status = exportFile(`Questlings-${now()}.json`, data, {
        mimeType: 'application/json',
      });
      if (status != true) alert(status);
    },

    loadData(file: File) {
      const reader = new FileReader();
      reader.onload = async (ev) => {
        const characters = JSON.parse(ev.target?.result as string) as ICharacter[];
        try {
          await db.character.bulkPut(characters);
          // Repopulate store with updated content
          await this.populateStore();
        } catch (err) {
          alert(err);
        }
      };
      reader.readAsText(file);
    },
  },
});
