<template>
  <div class="row items-center">
    <h6 class="heading q-py-none q-my-none">Add ability</h6>
    <q-btn class="col-shrink" icon="mdi-plus-circle" flat dense rounded @click="addAbility" />
  </div>
  <div class="column" v-for="(abl, index) of obj" :key="index">
    <q-card class="q-mb-md">
      <div class="row items-center justify-end">
        <!--h6 class="heading q-my-none q-py-none">Remove Ability</h6-->
        <q-btn class="q-mr-sm q-mt-sm" icon="delete" flat dense rounded @click="removeAbility(index)">
          <q-tooltip>Remove this ability</q-tooltip>
        </q-btn>
      </div>
      <q-card-section>
        <div class="row items-center">
          <q-input class="col-grow" label="AP Cost" hint="Leave empty if ability has no AP cost" v-model="obj[index].ap" dense />
        </div>
        <!--q-input class="row" label="Damage" hint="Leave empty if ability doesn't have a damage value" v-model="obj[index].dmg" /-->
        <q-input class="row" label="Text" v-model="obj[index].text" />

        <q-separator class="q-mb-md" />

        <div class="row items-center">
          <h6 class="heading q-py-none q-my-none">{{ !obj[index].table ? 'Add' : 'Remove' }} Roll Table</h6>
          <q-btn v-if="!obj[index].table" class="col-shrink" icon="mdi-plus-circle" flat dense rounded @click="addTable(index)" />
          <q-btn v-else class="col-shrink" icon="delete" flat dense rounded @click="removeTable(index)" />
        </div>

        <q-separator class="q-mb-md" />
        <roll-table-editor v-if="obj[index].table !== undefined" v-model="obj[index].table" />
      </q-card-section>
    </q-card>
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
