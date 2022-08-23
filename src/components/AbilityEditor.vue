<template>
  <div class="row items-center">
    <strong class="col-grow">Add ability</strong>
    <q-btn class="col-shrink" icon="mdi-plus-circle" flat dense rounded @click="addAbility" />
  </div>
  <div class="column" v-for="(abl, index) of obj" :key="index">
    <div class="row items-center">
      <q-input class="col-grow" label="AP Cost" hint="Leave empty if ability has no AP cost" v-model="obj[index].ap" />
      <q-btn class="col-shrink" icon="delete" flat dense rounded @click="removeAbility(index)" />
    </div>
    <!--q-input class="row" label="Damage" hint="Leave empty if ability doesn't have a damage value" v-model="obj[index].dmg" /-->
    <q-input class="row" label="Text" v-model="obj[index].text" />

    <q-separator class="q-mb-md" />

    <q-btn v-if="!obj[index].table" class="row" icon-right="add" label="Add a roll table" @click="addTable(index)" outline />
    <q-btn v-else class="row" icon-right="delete" label="Remove the roll table" @click="removeTable(index)" outline />
    <q-separator class="q-mb-md" />
    <roll-table-editor v-if="obj[index].table !== undefined" v-model="obj[index].table" />
    <q-separator />
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, PropType, ref, watch } from 'vue';
import { ISubAbility, ITableRow } from './models';
import RollTableEditor from './RollTableEditor.vue';

export default defineComponent({
  name: 'AbilityEditor',
  components: { RollTableEditor },
  props: {
    modelValue: {
      type: Array as PropType<ISubAbility[]>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const obj = ref(props.modelValue);
    watch(
      () => props.modelValue,
      () => (obj.value = props.modelValue),
      { deep: true }
    );
    watch(
      () => obj.value,
      () => emit('update:modelValue', obj.value),
      { deep: true }
    );

    const addAbility = () =>
      obj.value.push({
        text: '',
      });
    const $q = useQuasar();
    const removeAbility = (index: number) =>
      $q
        .dialog({
          title: 'Remove this ability?',
          cancel: true,
        })
        .onOk(() => obj.value.splice(index, 1));

    const addTable = (index: number) => (obj.value[index].table = [] as ITableRow[]);
    const removeTable = (index: number) =>
      $q
        .dialog({
          title: 'Delete the table?',
          cancel: true,
        })
        .onOk(() => (obj.value[index].table = undefined));

    return {
      obj,
      addAbility,
      removeAbility,
      addTable,
      removeTable,
    };
  },
});
</script>
