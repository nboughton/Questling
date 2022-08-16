<template>
  <q-page padding>
    <div class="row justify-evenly items-baseline">
      <q-input
        class="col-2"
        type="number"
        label="HP"
        v-model.number="char.data.hp"
      />
      <q-input class="col-6" label="Name" v-model="char.data.name" />
      <q-input
        class="col-2"
        type="number"
        label="AP"
        v-model.number="char.data.ap"
      />
    </div>
    <q-tabs v-model="tab">
      <q-tab name="fluff" label="Profile" />
      <q-tab name="abilities" label="Abilities" />
      <q-tab name="inventory" label="Inventory" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="fluff"> <CharFluff /> </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts">
import { useCharacterStore } from 'src/stores/character';
import { defineComponent, ref } from 'vue';
import CharFluff from 'src/components/CharFluff.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { CharFluff },
  setup() {
    const tab = ref('fluff');
    const char = useCharacterStore();
    return {
      tab,
      char,
    };
  },
});
</script>
