<template>
  <div class="row justify-between items-center">
    <h6 class="heading q-py-none q-my-none col-grow">{{ ability.name }}</h6>
    <q-checkbox v-model="learned" size="lg" checked-icon="star" unchecked-icon="star_border" indeterminate-icon="star_border">
      <q-tooltip>Learn this ability</q-tooltip>
    </q-checkbox>
  </div>
  <div class="row q-pa-sm bg-black text-white heading rounded-borders" v-if="ability.roll">roll the die</div>
  <div v-if="ability.prefixText" v-html="ability.prefixText" />
  <div v-for="(sub, index) of ability.subAbilities" :key="index">
    <sub-ability-display :ability="sub" />
  </div>
  <div v-if="ability.suffixText" v-html="ability.suffixText" />
</template>

<script lang="ts">
import { computed } from 'vue';
import { defineComponent, PropType } from 'vue';
import { IAbility } from './models';
import SubAbilityDisplay from './SubAbilityDisplay.vue';
export default defineComponent({
  name: 'AbilityDisplay',
  components: { SubAbilityDisplay },
  props: {
    ability: {
      type: Object as PropType<IAbility>,
      required: true,
    },
  },
  emits: ['learned'],
  setup(props, { emit }) {
    const learned = computed({
      get() {
        return props.ability.learned;
      },
      set() {
        emit('learned');
      },
    });

    return {
      learned,
    };
  },
});
</script>
