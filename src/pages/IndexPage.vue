<template>
  <q-page :class="`page-content q-px-${padding}`" padding>
    <div class="row justify-between items-center">
      <q-input
        class="col-xs-3 col-md-1"
        type="number"
        :max="10"
        :min="0"
        v-model.number="char.data.hp"
        borderless
        input-class="pull-quote"
        input-style="font-size: x-large;"
      >
        <template v-slot:prepend>
          <div class="pull-quote q-pr-sm">HP</div>
        </template>
      </q-input>

      <div class="col-xs-6 col-md-10">
        <div class="row full-width">
          <div class="col-12 text-center pull-quote">{{ char.data.name }}</div>
          <div class="col-12 text-center text-subtitle2" v-if="char.data.deets.pronouns">({{ char.data.deets.pronouns }})</div>
        </div>
      </div>

      <q-input
        class="col-xs-3 col-md-1"
        type="number"
        :min="0"
        v-model.number="char.data.ap"
        borderless
        input-class="pull-quote"
        input-style="text-align: right; font-size: x-large;"
      >
        <template v-slot:append>
          <div class="pull-quote">AP</div>
        </template>
      </q-input>
    </div>

    <q-tabs v-model="tab" align="justify">
      <q-tab name="fluff" label="Profile" class="heading" />
      <q-tab name="abilities" label="Abilities" class="heading" />
      <q-tab name="inventory" label="Inventory" class="heading" />
      <q-tab name="notes" label="Notes" class="heading" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="fluff"><char-fluff /></q-tab-panel>
      <q-tab-panel name="abilities"><char-abilities /></q-tab-panel>
      <q-tab-panel name="inventory"><char-inventory /></q-tab-panel>
      <q-tab-panel name="notes"><char-notes /></q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts">
import { useCharacterStore } from 'src/stores/character';
import { computed, defineComponent, ref } from 'vue';
import CharFluff from 'src/components/CharFluff.vue';
import CharAbilities from 'src/components/CharAbilities.vue';
import CharInventory from 'src/components/CharInventory.vue';
import CharNotes from 'src/components/CharNotes.vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
  components: { CharFluff, CharAbilities, CharInventory, CharNotes },
  setup() {
    const tab = ref('fluff');
    const char = useCharacterStore();
    const $q = useQuasar();
    const padding = computed((): string => ($q.screen.lt.md ? 'sm' : 'xl'));

    return {
      tab,
      char,
      padding,
    };
  },
});
</script>
