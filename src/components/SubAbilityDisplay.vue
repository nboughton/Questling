<template>
  <div class="abl-text">
    <span class="ap-cost-box" v-if="ability.ap || ability.ap == 0">{{ ability.ap }}</span>
    <span class="dmg-box" v-if="ability.dmg">{{ ability.dmg }}</span>
    <span class="text-block" v-html="ability.text" />
  </div>
  <div class="col-12">
    <roll-table v-if="ability.table" :table="ability.table" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ISubAbility } from './models';
import RollTable from './RollTable.vue';
export default defineComponent({
  name: 'SubAbilityDisplay',
  components: { RollTable },
  props: {
    ability: {
      type: Object as PropType<ISubAbility>,
      required: true,
    },
  },
});
</script>
