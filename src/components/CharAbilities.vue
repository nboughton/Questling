<template>
  <div v-for="(role, roleKey, roleIndex) of char.data.roles" :key="roleKey">
    <h5 class="heading q-py-none q-my-none text-center">{{ roleKey }}</h5>
    <!--PATH TABS-->
    <q-tabs v-model="tabKeys[roleIndex]" align="justify" class="bg-black text-white upper-tabs">
      <q-tab v-for="(path, pathKey) of role.paths" :key="`tab-${roleKey}-${pathKey}`" :label="pathKey" :name="pathKey" />
    </q-tabs>

    <q-tab-panels v-model="tabKeys[roleIndex]">
      <q-tab-panel class="q-pa-none q-ma-none" v-for="(path, pathKey, pathIndex) of role.paths" :key="`panel-${roleKey}-${pathKey}`" :name="pathKey">
        <!--ABILITY TABS-->
        <q-tabs v-model="subTabKeys[pathIndex]" align="justify" class="bg-grey-9 text-white q-my-none lower-tabs" dense>
          <q-tab v-for="abl of path" :key="`tab-${roleKey}-${pathKey}-${abl.name}`" :label="abl.name" :name="abl.name" />
        </q-tabs>

        <q-tab-panels v-model="subTabKeys[pathIndex]">
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
import { defineComponent, onMounted, ref } from 'vue';
import AbilityDisplay from './AbilityDisplay.vue';
export default defineComponent({
  name: 'CharAbilities',
  components: { AbilityDisplay },
  setup() {
    const char = useCharacterStore();
    const tabKeys = ref([] as string[]);
    const subTabKeys = ref([] as string[]);
    const showBrowser = ref(false);

    onMounted(() => {
      for (const role in char.data.roles) {
        const path = Object.keys(char.data.roles[role].paths)[0];
        tabKeys.value.push(path);
        Object.keys(char.data.roles[role].paths).forEach((pathKey) => {
          subTabKeys.value.push(char.data.roles[role].paths[pathKey][0].name);
        });
      }
    });

    return {
      char,
      tabKeys,
      subTabKeys,
      showBrowser,
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
