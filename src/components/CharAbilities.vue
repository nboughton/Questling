<template>
  <div v-for="(role, roleKey, roleIndex) of showKnown" :key="roleKey">
    <h5 class="heading q-py-none q-my-none text-center">
      {{ roleKey }}
      ({{ knownAbilities[roleKey].role.known }}/{{ knownAbilities[roleKey].role.total }})
      <q-checkbox v-model="displayToggles[roleKey]" checked-icon="visibility" unchecked-icon="visibility_off">
        <q-tooltip>Toggle display of known/all abilities</q-tooltip>
      </q-checkbox>
    </h5>
    <!--PATH TABS-->
    <q-tabs v-model="tabKeys[roleIndex]" align="justify" class="bg-black text-white upper-tabs">
      <q-tab
        v-for="(path, pathKey) of role.paths"
        :key="`tab-${roleKey}-${pathKey}`"
        :label="`${pathKey} (${knownAbilities[roleKey].paths[pathKey].known}/${knownAbilities[roleKey].paths[pathKey].total})`"
        :name="pathKey"
      />
    </q-tabs>

    <q-tab-panels v-model="tabKeys[roleIndex]">
      <q-tab-panel class="q-pa-none q-ma-none" v-for="(path, pathKey, pathIndex) of role.paths" :key="`panel-${roleKey}-${pathKey}`" :name="pathKey">
        <!--ABILITY TABS-->
        <q-tabs v-model="subTabKeys[roleKey][pathIndex]" align="justify" class="bg-grey-9 text-white q-my-none lower-tabs" dense>
          <q-tab
            :alert="abl.learned === true"
            alert-icon="star"
            v-for="abl of path"
            :key="`tab-${roleKey}-${pathKey}-${abl.name}`"
            :label="abl.name"
            :name="abl.name"
          />
        </q-tabs>

        <q-tab-panels v-model="subTabKeys[roleKey][pathIndex]">
          <q-tab-panel class="q-pa-none q-ma-none" v-for="(abl, ablIndex) of path" :key="`panel-${roleKey}-${pathKey}-${abl.name}`" :name="abl.name">
            <ability-display
              :ability="abl"
              @learned="char.data.roles[roleKey].paths[pathKey][ablIndex].learned = !char.data.roles[roleKey].paths[pathKey][ablIndex].learned"
            />
          </q-tab-panel>
        </q-tab-panels>
        <!--END ABILITY TABS-->
      </q-tab-panel>
    </q-tab-panels>
    <!--END PATH TABS-->
  </div>
</template>

<script lang="ts">
import { useCharacterStore } from 'src/stores/character';
import { defineComponent, onMounted, ref, computed } from 'vue';
import { IKnownAbilities, IRole } from 'src/components/models';
import AbilityDisplay from './AbilityDisplay.vue';
export default defineComponent({
  name: 'CharAbilities',
  components: { AbilityDisplay },
  setup() {
    const char = useCharacterStore();
    const tabKeys = ref([] as string[]);
    const subTabKeys = ref({} as { [index: string]: string[] });
    const displayToggles = ref({} as { [index: string]: boolean }); // true = all, false = learned

    onMounted(() => {
      for (const role in char.data.roles) {
        displayToggles.value[role] = false;

        const path = Object.keys(char.data.roles[role].paths)[0];
        tabKeys.value.push(path);
        Object.keys(char.data.roles[role].paths).forEach((pathKey) => {
          if (!subTabKeys.value[role]) subTabKeys.value[role] = [];
          subTabKeys.value[role].push(char.data.roles[role].paths[pathKey][0].name);
        });
      }
    });

    const knownPathAbilities = (role: string, path: string): { known: number; total: number } => {
      let k = 0;
      let t = 0;
      char.data.roles[role].paths[path].forEach((abl) => {
        t++;
        if (abl.learned === true) k++;
      });
      return { known: k, total: t };
    };

    const knownRoleAbilities = (role: string): { known: number; total: number } => {
      let k = 0;
      let t = 0;
      Object.keys(char.data.roles[role].paths).forEach((path) => {
        const kt = knownPathAbilities(role, path);
        k += kt.known;
        t += kt.total;
      });
      return { known: k, total: t };
    };

    const knownAbilities = computed((): IKnownAbilities => {
      const k: IKnownAbilities = {};
      Object.keys(char.data.roles).forEach((role) => {
        if (!k[role]) k[role] = { role: { known: 0, total: 0 }, paths: {} };
        k[role].role = knownRoleAbilities(role);
        Object.keys(char.data.roles[role].paths).forEach((path) => {
          if (!k[role].paths[path]) k[role].paths[path] = { known: 0, total: 0 };
          k[role].paths[path] = knownPathAbilities(role, path);
        });
      });
      return k;
    });

    const showKnown = computed((): { [index: string]: IRole } => {
      const out: { [index: string]: IRole } = {};

      for (const role of Object.keys(knownAbilities.value)) {
        if (displayToggles.value[role]) {
          out[role] = char.data.roles[role];
          continue;
        }

        if (knownAbilities.value[role].role.known > 0) {
          out[role] = { paths: {} };
          Object.keys(knownAbilities.value[role].paths).forEach((path) => {
            if (knownAbilities.value[role].paths[path].known > 0) {
              if (!out[role].paths[path]) out[role].paths[path] = [];
              char.data.roles[role].paths[path].forEach((abl) => {
                if (abl.learned === true) out[role].paths[path].push(abl);
              });
            }
          });
        }
      }
      return out;
    });

    return {
      char,
      tabKeys,
      subTabKeys,
      displayToggles,
      knownAbilities,
      showKnown,
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
