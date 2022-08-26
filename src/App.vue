<template>
  <router-view v-if="loaded" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';

import { debounce, useQuasar } from 'quasar';
import { useConfigStore } from './stores/config';
import { useCharacterStore } from './stores/character';
import { useRoleStore } from './stores/roles';

import { sleep } from 'src/lib/util';

export default defineComponent({
  name: 'App',
  setup() {
    const loaded = ref(false);
    const characterStore = useCharacterStore();
    const configStore = useConfigStore();
    const roleStore = useRoleStore();

    const $q = useQuasar();

    onMounted(async () => {
      $q.dark.set(configStore.data.darkMode);

      await characterStore.populateStore();
      await roleStore.populateStore();

      loaded.value = true;
    });

    watch(
      () => configStore.$state,
      async () => {
        await configStore.save();
      },
      { deep: true }
    );

    watch(
      () => configStore.$state.data.darkMode,
      () => $q.dark.set(configStore.data.darkMode)
    );

    watch(
      () => configStore.$state.data.current,
      async () => {
        await characterStore.load(configStore.data.current);
      }
    );

    watch(
      () => characterStore.$state,
      debounce(async () => {
        configStore.data.saving = true;
        await characterStore.save();
        await sleep(200);
        configStore.data.saving = false;
      }, 1000),
      { deep: true }
    );

    watch(
      () => roleStore.$state,
      debounce(async () => {
        configStore.data.saving = true;
        await roleStore.save();
        await sleep(200);
        configStore.data.saving = false;
      }, 1000),
      { deep: true }
    );

    return {
      loaded,
    };
  },
});
</script>
