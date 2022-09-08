<template>
  <h6 class="pull-quote" v-if="Object.keys(characterStore.data.roles).length === 0">Please select one or more roles on the Profile tab...</h6>

  <q-input class="q-mb-md" label="Search" v-model="filter" clearable dense debounce="500">
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
  </q-input>

  <div v-for="(role, roleKey, roleIndex) of filtered" :key="roleKey">
    <!--ROLE HEADER-->
    <h5 class="pull-quote q-py-none q-my-none text-center row items-center justify-center">
      <q-btn icon="edit" flat dense rounded @click="editRole(roleKey as string)">
        <q-tooltip>Edit this Role</q-tooltip>
      </q-btn>
      {{ characterStore.data.roles[roleKey].name }}
      ({{ knownAbilities[roleKey].role.known }}/{{ knownAbilities[roleKey].role.total }})
      <q-checkbox
        v-model="displayToggles[roleKey]"
        checked-icon="visibility"
        unchecked-icon="visibility_off"
        :disable="knownAbilities[roleKey].role.known === 0"
      >
        <q-tooltip>Toggle display of known/all abilities</q-tooltip>
      </q-checkbox>
      <q-toggle v-if="roleIndex === 0" v-model="configStore.data.tabView" checked-icon="mdi-table-row" unchecked-icon="menu" />
    </h5>
    <!--END ROLE HEADER-->

    <div v-if="configStore.data.tabView">
      <!--PATH TABS-->
      <q-tabs v-model="tabKeys[roleIndex]" align="justify" class="bg-black text-white upper-tabs">
        <q-tab
          v-for="(path, pathKey) of role.paths"
          :key="`tab-${roleKey}-${pathKey}`"
          :label="`${pathKey} (${knownAbilities[roleKey].paths[pathKey].known}/${knownAbilities[roleKey].paths[pathKey].total})`"
          :name="pathKey"
        />
      </q-tabs>

      <q-tab-panels v-model="tabKeys[roleIndex]" animated>
        <q-tab-panel class="q-pa-none q-ma-none" v-for="(path, pathKey) of role.paths" :key="`panel-${roleKey}-${pathKey}`" :name="pathKey">
          <!--ACCORDION LAYOUT-->
          <q-list bordered>
            <q-expansion-item
              v-for="(abl, ablIndex) of path"
              :key="`exp-${roleKey}-${pathKey}-${abl.name}`"
              :group="`abilties-${roleKey}-${pathKey}`"
              :label="abl.name"
              :icon="abl.learned ? 'star' : 'star_outline'"
              :default-opened="ablIndex === 0"
            >
              <q-separator />

              <q-card>
                <q-card-section class="q-mt-none q-pt-none">
                  <ability-display
                    :ability="abl"
                    @learned="
                      characterStore.data.roles[roleKey].paths[pathKey][ablIndex].learned = !characterStore.data.roles[roleKey].paths[pathKey][ablIndex].learned
                    "
                  />
                </q-card-section>
              </q-card>
              <q-separator />
            </q-expansion-item>
          </q-list>
          <!--END ACCORDION LAYOUT-->
        </q-tab-panel>
      </q-tab-panels>
      <!--END PATH TABS-->
    </div>
    <div v-else>
      <!--FULL ACCORDION-->
      <q-expansion-item
        v-for="(path, pathKey, pathIndex) of role.paths"
        :key="`accordion-${roleKey}-${pathKey}`"
        :label="`${pathKey} (${knownAbilities[roleKey].paths[pathKey].known}/${knownAbilities[roleKey].paths[pathKey].total})`"
        :header-class="`bg-black text-white ${pathIndex == 0 ? 'upper-tabs' : ''}`"
        default-opened
      >
        <q-card bordered v-for="(abl, ablIndex) of path" :key="`exp-${roleKey}-${pathKey}-${abl.name}`">
          <q-card-section class="q-mt-none q-pt-none">
            <ability-display
              :ability="abl"
              @learned="
                characterStore.data.roles[roleKey].paths[pathKey][ablIndex].learned = !characterStore.data.roles[roleKey].paths[pathKey][ablIndex].learned
              "
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!--END FULL ACCORDION-->
    </div>
  </div>

  <q-dialog v-model="showEditor" maximized>
    <q-card>
      <q-card-section class="bg-black row justify-between">
        <h5 class="heading q-my-none q-py-none text-white">Edit Role</h5>
        <q-btn icon="mdi-close-circle" flat dense rounded color="white" @click="showEditor = false" />
      </q-card-section>
      <q-card-section v-if="selectedRole">
        <p>
          Please note, changes made to Roles here will not be reflected in the available Roles selected from the profile tab. Questling copies Role data into
          the character when it is added so that exported characters can take their data with them when loaded on to other devices.
        </p>
        <role-editor v-model="characterStore.data.roles[selectedRole]" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';

import { IAbility, IKnownAbilities, IRole } from 'src/components/models';

import { useCharacterStore } from 'src/stores/character';

import AbilityDisplay from '../AbilityDisplay.vue';
import { useQuasar } from 'quasar';
import RoleEditor from '../RoleEditor.vue';
import { useConfigStore } from 'src/stores/config';

export default defineComponent({
  name: 'CharAbilities',
  components: { AbilityDisplay, RoleEditor },
  setup() {
    const configStore = useConfigStore();
    const characterStore = useCharacterStore();
    const tabKeys = ref([] as string[]);
    const displayToggles = ref({} as { [index: string]: boolean }); // true = all, false = learned

    onMounted(() => {
      for (const role in characterStore.data.roles) {
        displayToggles.value[role] = knownAbilities.value[role].role.known === 0 ? true : false;

        let path = Object.keys(characterStore.data.roles[role].paths)[0];
        for (const p of Object.keys(characterStore.data.roles[role].paths)) {
          const k = knownPathAbilities(role, p);
          if (k.known > 0) {
            path = p;
            break;
          }
        }
        tabKeys.value.push(path);
      }
    });

    const knownPathAbilities = (role: string, path: string): { known: number; total: number } => {
      let k = 0;
      let t = 0;
      characterStore.data.roles[role].paths[path].forEach((abl) => {
        t++;
        if (abl.learned === true) k++;
      });
      return { known: k, total: t };
    };

    const knownRoleAbilities = (role: string): { known: number; total: number } => {
      let k = 0;
      let t = 0;
      Object.keys(characterStore.data.roles[role].paths).forEach((path) => {
        const kt = knownPathAbilities(role, path);
        k += kt.known;
        t += kt.total;
      });
      return { known: k, total: t };
    };

    const knownAbilities = computed((): IKnownAbilities => {
      const k: IKnownAbilities = {};
      Object.keys(characterStore.data.roles).forEach((role) => {
        if (!k[role]) k[role] = { role: { known: 0, total: 0 }, paths: {} };
        k[role].role = knownRoleAbilities(role);
        Object.keys(characterStore.data.roles[role].paths).forEach((path) => {
          if (!k[role].paths[path]) k[role].paths[path] = { known: 0, total: 0 };
          k[role].paths[path] = knownPathAbilities(role, path);
        });
      });
      return k;
    });

    const filter = ref('');
    const searchAbility = (abl: IAbility): boolean => {
      if (filter.value === '' || filter.value === null) return true;

      if (RegExp(filter.value, 'i').test(abl.name)) return true;

      for (const sub of abl.subAbilities) {
        if (RegExp(filter.value, 'i').test(sub.text)) return true;
      }

      return false;
    };

    const searchPath = (path: IAbility[]): boolean => {
      for (const a of path) {
        if (searchAbility(a)) return true;
      }

      return false;
    };

    const searchRole = (role: IRole): boolean => {
      for (const p in role.paths) {
        if (searchPath(role.paths[p])) return true;
      }

      return false;
    };

    const showKnown = computed((): { [index: string]: IRole } => {
      const out: { [index: string]: IRole } = {};

      for (const role of Object.keys(knownAbilities.value)) {
        console.log(knownAbilities.value[role]);
        // If no abilities for a role are known then set display to all
        if (displayToggles.value[role]) {
          out[role] = characterStore.data.roles[role];
          continue;
        }

        if (knownAbilities.value[role].role.known > 0) {
          out[role] = { paths: {}, name: '', id: '' };
          Object.keys(knownAbilities.value[role].paths).forEach((path) => {
            if (knownAbilities.value[role].paths[path].known > 0) {
              if (!out[role].paths[path]) out[role].paths[path] = [];
              characterStore.data.roles[role].paths[path].forEach((abl) => {
                if (abl.learned === true) out[role].paths[path].push(abl);
              });
            }
          });
        }
      }
      return out;
    });

    const filtered = computed((): { [index: string]: IRole } => {
      if (filter.value === '' || filter.value === null) return showKnown.value;

      const out: { [index: string]: IRole } = {};

      for (const role in showKnown.value) {
        if (searchRole(showKnown.value[role])) {
          out[role] = { paths: {}, name: '', id: '' };
          for (const path in showKnown.value[role].paths) {
            if (searchPath(showKnown.value[role].paths[path])) {
              out[role].paths[path] = [] as IAbility[];
              for (const abl of showKnown.value[role].paths[path]) {
                if (searchAbility(abl)) out[role].paths[path].push(abl);
              }
            }
          }
        }
      }

      return out;
    });

    const $q = useQuasar();
    const showEditor = ref(false);
    const selectedRole = ref('');
    const editRole = (key: string) => {
      if (characterStore.data.roles[key]) {
        selectedRole.value = key;
        showEditor.value = true;
        return;
      }

      $q.notify({
        message: `ERROR: ${key} is not a valid Role id`,
        type: 'warn',
      });
    };

    return {
      configStore,
      characterStore,
      tabKeys,
      displayToggles,
      knownAbilities,

      showEditor,
      selectedRole,
      editRole,

      filter,
      filtered,
    };
  },
});
</script>

<style lang="sass">
.upper-tabs
  border-top-left-radius: 5px
  border-top-right-radius: 5px

.lower-tabs
  border-bottom-left-radius: 5px
  border-bottom-right-radius: 5px
</style>
