<template>
  <div class="column">
    <q-input class="row" label="Name" v-model="item.name" />
    <q-input class="row" label="Description" v-model="item.text" autogrow />
    <q-input class="row" type="number" label="Damage" v-model.number="item.dmg" hint="Leave empty if item doesn't do damage" />

    <q-separator class="q-mb-md" />

    <ability-editor v-model="item.subAbilities" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';
import { IInventoryItem } from './models';
import AbilityEditor from './AbilityEditor.vue';
export default defineComponent({
  name: 'ItemEditor',
  components: { AbilityEditor },
  props: {
    modelValue: {
      type: Object as PropType<IInventoryItem>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const item = ref(props.modelValue);
    watch(
      () => props.modelValue,
      () => (item.value = props.modelValue),
      { deep: true }
    );
    watch(
      () => item.value,
      () => emit('update:modelValue', item.value),
      { deep: true }
    );

    return {
      item,
    };
  },
});
</script>
