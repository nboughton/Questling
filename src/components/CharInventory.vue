<template>
  <h5 class="row items-center pull-quote q-my-none">
    Carrying {{ char.data.inventory.length }} of 12 items
    <q-btn icon="mdi-plus-circle" flat dense rounded @click="addItem">
      <q-tooltip>Add inventory item</q-tooltip>
    </q-btn>
  </h5>

  <q-card flat class="inventory-content q-my-none q-py-none q-mb-md" v-for="(item, index) of char.data.inventory" :key="index">
    <q-card-section class="row items-center q-py-none q-my-none">
      <h5 class="col-grow pull-quote q-my-sm">{{ item.name }}</h5>
      <q-btn class="col-shrink" icon="edit" flat dense rounded @click="editItem(index)" />
      <q-btn class="col-shrink" icon="delete" flat dense @click="removeItem(index)">
        <q-tooltip>Remove this item</q-tooltip>
      </q-btn>
    </q-card-section>

    <q-card-section v-if="item.text" class="row q-py-sm q-my-sm">
      <p class="abl-text">
        <span class="dmg-box" v-if="item.dmg">{{ item.dmg }}</span>
        {{ item.text }}
      </p>
    </q-card-section>

    <q-card-section v-for="(abl, ablIndex) of char.data.inventory[index].subAbilities" :key="`abl-${ablIndex}`">
      <sub-ability-display :ability="abl" />
    </q-card-section>

    <q-separator />
  </q-card>

  <q-input class="row" label="Tiny Items" v-model="char.data.tinyItems" autogrow />

  <q-dialog v-model="showEditor" :maximized="$q.platform.is.mobile">
    <q-card style="min-width: 50%">
      <q-card-section class="row justify-between items-center"
        ><h5 class="q-my-sm heading col-grow">Item Editor</h5>
        <q-btn class="col-shrink" icon="close" flat dense rounded @click="showEditor = false"
      /></q-card-section>
      <q-card-section class="column"><item-editor v-model="char.data.inventory[itemToEdit]" /></q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { useCharacterStore } from 'src/stores/character';
import { NewInventoryItem } from 'src/lib/character';
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import ItemEditor from './ItemEditor.vue';
import { useConfigStore } from 'src/stores/config';
import SubAbilityDisplay from './SubAbilityDisplay.vue';

export default defineComponent({
  name: 'CharInventory',
  components: { ItemEditor, SubAbilityDisplay },
  setup() {
    const char = useCharacterStore();
    const config = useConfigStore();

    const showEditor = ref(false);
    const itemToEdit = ref(0);
    const addItem = () => {
      char.data.inventory.push(NewInventoryItem());
      itemToEdit.value = char.data.inventory.length - 1;
      showEditor.value = true;
    };
    const editItem = (index: number) => {
      itemToEdit.value = index;
      showEditor.value = true;
    };

    const $q = useQuasar();
    const removeItem = (index: number) =>
      $q
        .dialog({
          title: 'Delete this item?',
          cancel: true,
        })
        .onOk(() => char.data.inventory.splice(index, 1));

    return {
      char,
      config,
      addItem,
      editItem,
      removeItem,
      showEditor,
      itemToEdit,
    };
  },
});
</script>
