<template>
  <div class="column">
    <q-input class="row" label="Name" v-model="role.name" />

    <div class="row items-center">
      <h6 class="q-py-none q-my-none heading">Add path</h6>
      <q-btn icon="mdi-plus-circle" flat dense rounded @click="addPath">
        <q-tooltip>Create a new Learning Path</q-tooltip>
      </q-btn>
    </div>

    <div v-for="(path, pathKey) in role.paths" :key="`paths-${pathKey}`">
      <div v-for="(abl, ablIndex) in path" :key="`ability-${pathKey}-${ablIndex}`">
        <q-toggle label="Roll the Die?" v-model="role.paths[pathKey][ablIndex].roll" />
        <q-input label="Prefix Text" v-model="role.paths[pathKey][ablIndex].prefixText" />
        <ability-editor v-model="role.paths[pathKey][ablIndex].subAbilities" />
        <q-input label="Suffix Text" v-model="role.paths[pathKey][ablIndex].suffixText" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';

import { IRole, IAbility } from './models';

import { useQuasar } from 'quasar';

import { deepCopy } from 'src/lib/util';

import AbilityEditor from './AbilityEditor.vue';

export default defineComponent({
  name: 'RoleEditor',
  components: { AbilityEditor },
  props: {
    modelValue: {
      type: Object as PropType<IRole>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const role = ref(props.modelValue);
    watch(
      () => props.modelValue,
      () => (role.value = props.modelValue),
      { deep: true }
    );
    watch(
      () => role.value,
      () => emit('update:modelValue', role.value),
      { deep: true }
    );

    const $q = useQuasar();
    const addPath = () =>
      $q
        .dialog({
          title: 'New Path',
          cancel: true,
          prompt: {
            model: '',
            type: 'string',
          },
        })
        .onOk((name) => (role.value.paths[name] = []));
    const removePath = (name: string) =>
      $q
        .dialog({
          title: `Remove ${name} Path?`,
          cancel: true,
        })
        .onOk(() => delete role.value.paths[name]);
    const editPathName = (oldName: string) =>
      $q
        .dialog({
          title: 'New Path Name?',
          cancel: true,
          prompt: {
            model: '',
            type: 'string',
          },
        })
        .onOk((name) => {
          role.value.paths[name] = deepCopy(role.value.paths[oldName]);
          delete role.value.paths[oldName];
        });

    const addAbility = (path: string) =>
      role.value.paths[path]
        ? role.value.paths[path].push({
            name: 'New ability',
            subAbilities: [],
            learned: false,
            roll: false,
          } as IAbility)
        : $q.notify({
            message: `ERROR: Path ${path} does not exist`,
            type: 'warn',
          });

    const removeAbility = (path: string, index: number) =>
      role.value.paths[path][index]
        ? role.value.paths[path].splice(index, 1)
        : $q.notify({
            message: `ERROR: Path ${path} or Ability index ${index} does not exist`,
            type: 'warn',
          });

    return {
      role,

      addPath,
      removePath,
      editPathName,

      addAbility,
      removeAbility,
    };
  },
});
</script>
