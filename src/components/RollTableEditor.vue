<template>
  <div class="row items-center q-gutter-sm">
    <div class="col-grow"><strong>Add row</strong></div>
    <q-btn class="col-shrink" icon="mdi-plus-circle" flat dense rounded @click="addRow"></q-btn>
  </div>
  <div class="row items-center justify-between" v-for="(row, index) of rows" :key="index">
    <q-input class="col-shrink" label="Floor" type="number" v-model.number="rows[index].floor" dense />
    <q-input class="col-shrink" label="Ceiling" type="number" v-model.number="rows[index].ceiling" dense />
    <q-input class="col-grow" label="Result" v-model="rows[index].result" dense />
    <q-btn class="col-shrink" icon="delete" flat dense rounded @click="removeRow(index)" />
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, PropType, ref, watch } from 'vue';
import { ITableRow } from './models';
export default defineComponent({
  name: 'RollTableEditor',
  props: {
    modelValue: {
      type: Array as PropType<ITableRow[]>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const rows = ref(props.modelValue);
    watch(
      () => props.modelValue,
      () => (rows.value = props.modelValue),
      { deep: true }
    );
    watch(
      () => rows.value,
      () => emit('update:modelValue', rows.value),
      { deep: true }
    );

    const addRow = () => rows.value.push({ floor: 1, ceiling: 1, result: '' });
    const $q = useQuasar();
    const removeRow = (index: number) =>
      $q
        .dialog({
          title: 'Remove this row?',
          cancel: true,
        })
        .onOk(() => rows.value.splice(index, 1));

    return {
      rows,
      addRow,
      removeRow,
    };
  },
});
</script>
