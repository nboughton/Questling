<template>
  <router-view v-if="loaded" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';

import { useCharacterStore } from './stores/character';
import { useConfigStore } from './stores/config';
import { debounce, useQuasar } from 'quasar';

import { sleep } from 'src/lib/util';

export default defineComponent({
  name: 'App',
  setup() {
    const loaded = ref(false);
    const char = useCharacterStore();
    const config = useConfigStore();

    const $q = useQuasar();
    $q.dark.set(config.data.darkMode);

    onMounted(async () => {
      await char.populateStore();
      loaded.value = true;
    });

    watch(
      () => config.$state,
      async () => {
        await config.save();
      },
      { deep: true }
    );

    watch(
      () => config.$state.data.darkMode,
      () => $q.dark.set(config.data.darkMode)
    );

    watch(
      () => config.$state.data.current,
      async () => {
        await char.load(config.data.current);
      }
    );

    watch(
      () => char.$state,
      debounce(async () => {
        config.data.saving = true;
        await char.save();
        await sleep(200);
        config.data.saving = false;
      }, 1000),
      { deep: true }
    );

    return {
      loaded,
    };
  },
});
</script>
