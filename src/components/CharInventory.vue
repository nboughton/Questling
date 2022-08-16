<template>
  <h5 class="row items-center">
    Carrying {{ char.data.inventory.length }} of 12 item(s)
    <q-btn icon="add" flat dense @click="addItem">
      <q-tooltip>Add inventory item</q-tooltip>
    </q-btn>
  </h5>
  <div
    class="row items-baseline q-gutter-sm full-width"
    v-for="(item, index) of char.data.inventory"
    :key="index"
  >
    <q-input label="Name" v-model="char.data.inventory[index].name" />
    <q-input label="Text" v-model="char.data.inventory[index].text" autogrow />
    <q-btn icon="delete" flat dense @click="removeItem(index)">
      <q-tooltip>Remove this item</q-tooltip>
    </q-btn>
  </div>
  <q-input
    class="row"
    label="Tiny Items"
    v-model="char.data.tinyItems"
    autogrow
  />
</template>

<script lang="ts">
import { useCharacterStore } from 'src/stores/character';
import { NewInventoryItem } from 'src/lib/character';
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'CharInventory',
  setup() {
    const char = useCharacterStore();

    const addItem = () => char.data.inventory.push(NewInventoryItem());

    const $q = useQuasar();
    const removeItem = (index: number) =>
      $q
        .dialog({
          title: 'Confirm',
          message: 'Delete this item?',
          cancel: true,
        })
        .onOk(() => char.data.inventory.splice(index, 1));

    return {
      char,
      addItem,
      removeItem,
    };
  },
});
</script>
