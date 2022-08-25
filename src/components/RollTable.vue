<template>
  <div>
    <div class="row items-center justify-between">
      <div class="col-grow heading">Table</div>
      <q-btn class="col-shrink" icon="mdi-dice-d20" @click="roll" label="Roll The Die" flat dense rounded />
    </div>

    <div class="row">{{ result ? result : 'Roll result shows here' }}</div>

    <q-separator />
    <div class="row items-center" v-for="(row, index) of table" :key="index" style="border-bottom: 1px solid lightgrey">
      <div class="col-xs-2 col-sm-1">
        {{ row.floor }}<span v-if="row.ceiling && row.ceiling !== row.floor"> - {{ row.ceiling }}</span>
      </div>
      <div class="col-xs-10 col-sm-11">{{ row.result }}</div>
    </div>
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
