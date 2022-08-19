<template>
  <div class="row items-center">
    <div class="col-grow">{{ result ? result : 'Roll result shows here' }}</div>
    <q-btn class="col-shrink" icon="mdi-dice-d20" @click="roll" label="Roll The Die" flat dense rounded />
  </div>
  <q-separator />
  <div class="row items-center justify-between q-gutter-lg" v-for="(row, index) of table" :key="index">
    <div class="col-sm-2">
      <strong
        >{{ row.floor }}<span v-if="row.ceiling && row.ceiling !== row.floor"> - {{ row.ceiling }}</span></strong
      >
    </div>
    <div class="col-grow">{{ row.result }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { ITableRow } from './models';
import { tableRoll } from 'src/lib/util';
export default defineComponent({
  name: 'RollTable',
  props: {
    table: {
      type: Array as PropType<ITableRow[]>,
      required: true,
    },
  },
  setup(props) {
    const result = ref('');
    const roll = () => {
      const r = tableRoll(props.table);
      result.value = `${r.roll}: ${r.result}`;
    };

    return {
      roll,
      result,
    };
  },
});
</script>
