<template>
  <div class="abl-text">
    <ap-cost-box :ap="ability.ap" />
    <span class="dmg-box" v-if="ability.dmg">{{ ability.dmg }}</span>
    <span class="text-block" v-html="ability.text" />
  </div>

  <roll-table v-if="ability.table" :table="ability.table" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ISubAbility } from './models';
import RollTable from './RollTable.vue';
import ApCostBox from './ApCostBox.vue';
export default defineComponent({
  name: 'SubAbilityDisplay',
  components: { RollTable, ApCostBox },
  props: {
    ability: {
      type: Object as PropType<ISubAbility>,
      required: true,
    },
  },
});
</script>
