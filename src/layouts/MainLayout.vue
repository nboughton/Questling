<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-black text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Questling </q-toolbar-title>
        <q-toggle label="Edit" v-model="config.data.edit" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <!-- drawer content -->
      character list, data export/import, dark mode toggle
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useConfigStore } from 'src/stores/config';
import { ref } from 'vue';

export default {
  setup() {
    const config = useConfigStore();
    const leftDrawerOpen = ref(false);

    return {
      config,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
