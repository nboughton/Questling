import { defineStore } from 'pinia';
import { IRole } from 'src/components/models';
import { db } from 'src/lib/db';
import { stripTags, now, deepCopy } from 'src/lib/util';
import { exportFile } from 'quasar';

const strip = (roles: IRole[]): IRole[] => {
  roles.forEach((role, i) => {
    Object.keys(role.paths).forEach((path) => {
      role.paths[path].forEach((abl, ablIndex) => {
        roles[i].paths[path][ablIndex].name = stripTags(abl.name);
        if (abl.prefixText) roles[i].paths[path][ablIndex].prefixText = stripTags(abl.prefixText);
        if (abl.suffixText) roles[i].paths[path][ablIndex].suffixText = stripTags(abl.suffixText);
        abl.subAbilities.forEach((sub, subIndex) => {
          roles[i].paths[path][ablIndex].subAbilities[subIndex].text = stripTags(sub.text);
          sub.table?.forEach((row, rowIndex) => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            roles[i].paths[path][ablIndex].subAbilities[subIndex].table![rowIndex].result = stripTags(row.result);
          });
        });
      });
    });
  });

  return roles;
};

export const useRoleStore = defineStore('roles', {
  state: () => {
    return {
      data: [] as IRole[],
    };
  },

  getters: {
    /*
    doubleCount (state) {
      return state.counter * 2;
    }
    */
  },

  actions: {
    async populateStore() {
      await db.roles.count(); // This is a hack that pokes the db after a data load
      if ((await db.roles.count()) > 0) {
        try {
          this.data = strip(await db.roles.toArray());
        } catch (err) {
          alert(err);
        }
      }
    },

    async save() {
      await db.roles.bulkPut(deepCopy(this.data)).catch((err) => console.log(err));
      // repopulate store
      //await this.populateStore();
    },

    async delete(role: IRole) {
      const id = role.id;
      await db.roles.delete(id);
      this.data.forEach((role, index) => {
        if (role.id === id) {
          this.data.splice(index, 1);
        }
      });
    },

    async exportData() {
      const roles = await db.roles.toArray();

      const data = JSON.stringify(strip(roles));
      const status = exportFile(`Questling-roles-${now()}.json`, data, {
        mimeType: 'application/json',
      });
      if (status != true) alert(status);
    },

    loadData(file: File) {
      const reader = new FileReader();
      reader.onload = async (ev) => {
        const roles = JSON.parse(ev.target?.result as string) as IRole[];

        try {
          await db.roles.bulkPut(strip(roles));
          // Repopulate store with updated content
          await this.populateStore();
        } catch (err) {
          console.log(err);
        }
      };
      reader.readAsText(file);
    },
  },
});
