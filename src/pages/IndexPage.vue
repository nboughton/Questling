<template>
  <q-page :class="`page-content q-px-${padding}`" padding>
    <div class="row justify-between items-center">
      <q-btn class="col-shrink" flat rounded size="xl" @click="editHP">
        <template v-slot:default>
          <div class="pull-quote"><span class="pull-quote q-mr-md">HP</span> {{ char.data.hp }}</div>
        </template>
      </q-btn>

      <div class="col-grow">
        <div class="row full-width">
          <div class="col-12 text-center pull-quote">{{ char.data.name }}</div>
          <div class="col-12 text-center text-subtitle2" v-if="char.data.deets.pronouns">({{ char.data.deets.pronouns }})</div>
        </div>
      </div>

      <q-btn class="col-shrink" flat rounded size="xl" @click="editAP">
        <template v-slot:default>
          <div class="pull-quote">{{ char.data.ap }} <span class="pull-quote q-ml-md">AP</span></div>
        </template>
      </q-btn>
    </div>

    <q-tabs v-model="tab" align="justify">
      <q-tab name="profile" label="Profile" class="heading" />
      <q-tab name="abilities" label="Abilities" class="heading" />
      <q-tab name="inventory" label="Inventory" class="heading" />
      <q-tab name="notes" label="Notes" class="heading" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="profile"><char-profile /></q-tab-panel>
      <q-tab-panel name="abilities"><char-abilities /></q-tab-panel>
      <q-tab-panel name="inventory"><char-inventory /></q-tab-panel>
      <q-tab-panel name="notes"><char-notes /></q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import { useQuasar } from 'quasar';
import { useCharacterStore } from 'src/stores/character';

import CharProfile from 'src/components/MainTabs/CharProfile.vue';
import CharAbilities from 'src/components/MainTabs/CharAbilities.vue';
import CharInventory from 'src/components/MainTabs/CharInventory.vue';
import CharNotes from 'src/components/MainTabs/CharNotes.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { CharProfile, CharAbilities, CharInventory, CharNotes },
  setup() {
    const tab = ref('profile');
    const char = useCharacterStore();
    const $q = useQuasar();
    const padding = computed((): string => ($q.screen.lt.md ? 'sm' : 'xl'));

    const editHP = () =>
      $q
        .dialog({
          title: 'HP',
          cancel: true,
          prompt: {
            model: `${char.data.hp}`,
            type: 'number',
          },
        })
        .onOk((hp) => (char.data.hp = hp as number));

    const editAP = () =>
      $q
        .dialog({
          title: 'AP',
          cancel: true,
          prompt: {
            model: `${char.data.ap}`,
            type: 'number',
          },
        })
        .onOk((ap) => (char.data.ap = ap as number));

    return {
      tab,
      char,
      padding,

      editHP,
      editAP,
    };
  },
});
</script>
