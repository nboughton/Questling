<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-black text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="pull-quote"> Questling </q-toolbar-title>
        <q-btn icon="mdi-dice-d20" label="Roll the Die" color="black" @click="rollAction" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered elevated>
      <!-- drawer content -->
      <q-btn class="full-width" label="New Character" flat @click="addCharacter" icon-right="add" />
      <q-list>
        <q-item
          class="items-center"
          v-for="(item, index) in config.data.index.sort((a: IIndexItem, b: IIndexItem) => (a.name || '').localeCompare(b.name))"
          :key="index"
          :active="item.id == character.data?.id"
          clickable
          v-ripple
        >
          <q-item-section @click="config.data.current = item.id" class="row full-width no-wrap heading">
            {{ item.name || 'unnamed character' }}
          </q-item-section>
          <q-item-section class="col-shrink" v-if="config.data.index.length > 1">
            <q-btn icon="delete" flat dense @click="removeCharacter(item.id)" />
          </q-item-section>
        </q-item>
      </q-list>

      <q-separator size="lg" />

      <q-list class="text-primary">
        <q-item clickable v-ripple @click="character.exportData">
          <q-item-section avatar>
            <q-icon name="download" />
          </q-item-section>
          <q-item-section class="heading">
            Export Character Data
            <q-tooltip>Download your current character database as a .json file</q-tooltip>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="showDataLoad = true">
          <q-item-section avatar>
            <q-icon name="upload" />
          </q-item-section>
          <q-item-section class="heading">
            Load Character Data
            <q-tooltip>Load a previously exported character database</q-tooltip>
          </q-item-section>
        </q-item>

        <q-separator size="lg" />

        <q-item clickable v-ripple @click="showAbout = true">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section class="heading"> About </q-item-section>
        </q-item>

        <q-separator size="lg" />

        <q-item>
          <q-item-section>
            <q-item-label>Dark Mode</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle v-model="config.data.darkMode" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

  <q-dialog v-model="showDataLoad" :maximized="$q.platform.is.mobile">
    <q-card>
      <q-card-section class="text-center text-bold bg-secondary heading"><h5 class="q-my-none q-py-none">Load Character Database</h5></q-card-section>

      <q-card-section class="text-subtitle"> Please bear in mind that this data will overwrite any existing versions of the same characters. </q-card-section>

      <q-card-section>
        <q-file v-model="fileToLoad" standout="bg-blue-grey text-white" :input-style="{ color: '#ECEFF4' }" label="Select File" accept=".json" />
      </q-card-section>

      <q-card-actions align="center">
        <q-btn label="load" color="primary" @click="loadData" flat />
        <q-btn label="close" color="warning" @click="showDataLoad = false" flat />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="showAbout">
    <q-card>
      <q-card-section class="row items-center justify-between bg-grey-9">
        <h5 class="col-grow heading q-py-none q-my-none">About</h5>
        <q-btn class="col-shrink" icon="close" flat dense rounded @click="showAbout = false" />
      </q-card-section>
      <q-card-section>
        Quest RPG is &copy;<a href="https://twitter.com/chillmage">TC Sottek</a> and <a href="https://www.adventure.game/">The Adventure Guild</a>. Questling is
        not associated with, or endorsed by, the copyright owners in any way.
      </q-card-section>
      <q-card-section>
        The Questling codebase is &copy; <a href="https://twitter.com/tiberianpun">Nick Boughton</a>, with the exception of the Ability texts. Please see the
        <a href="https://github.com/nboughton/questling">Github repository</a> to raise issues and submit bug reports.
      </q-card-section>
      <q-card-section>
        If you like this app, and want to support me, you can always <a href="https://ko-fi.com/tiberianpun">buy me a coffee</a>.
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IIndexItem } from 'src/components/models';
import { useCharacterStore } from 'src/stores/character';
import { useConfigStore } from 'src/stores/config';
import { defineComponent, ref } from 'vue';
import { coreRoll } from 'src/lib/util';

export default defineComponent({
  setup() {
    const config = useConfigStore();
    const character = useCharacterStore();
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);

    const addCharacter = () => character.new();
    const removeCharacter = (id: string) =>
      $q
        .dialog({
          title: 'Delete character?',
          message: 'This will delete your character and cannot be undone',
          cancel: true,
        })
        .onOk(() => character.delete(id));

    const fileToLoad = ref(null);
    const showDataLoad = ref(false);
    const loadData = () => {
      const f: File = fileToLoad.value as unknown as File;
      character.loadData(f);
      showDataLoad.value = false;
    };

    const showAbout = ref(false);

    const rollAction = () => {
      const r = coreRoll();

      const icon = (): string => {
        switch (true) {
          case RegExp('^CATASTROPHE').test(r.result):
            return 'mdi-skull';
          case RegExp('^FAILURE').test(r.result):
            return 'mdi-emoticon-sad';
          case RegExp('TOUGH CHOICE').test(r.result):
            return 'mdi-emoticon-neutral';
          case RegExp('^SUCCESS').test(r.result):
            return 'mdi-emoticon-happy';
          case RegExp('^TRIUMPH').test(r.result):
            return 'mdi-emoticon-kiss';

          default:
            return 'mdi-dice-d20';
        }
      };

      $q.notify({
        position: 'center',
        color: 'black',
        message: `<div class="page-content text-justify">${r.roll}: ${r.result}</div>`,
        html: true,
        timeout: 0,

        icon: icon(),
        iconColor: 'white',
        iconSize: 'lg',
        actions: [
          {
            label: 'Dismiss',
            color: 'white',
            handler: () => {
              /*..*/
            },
          },
        ],
      });
    };

    return {
      config,

      character,
      addCharacter,
      removeCharacter,

      fileToLoad,
      showDataLoad,
      loadData,

      rollAction,

      showAbout,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
