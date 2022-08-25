<template>
  <div class="column">
    <q-input label="Name" v-model="role.name">
      <template v-slot:after>
        <q-btn icon="delete" flat dense rounded @click="$emit('delete')">
          <q-tooltip>Delete this role</q-tooltip>
        </q-btn>
      </template>
    </q-input>

    <div class="row items-center">
      <h6 class="q-py-none q-my-none heading">Add path</h6>
      <q-btn icon="mdi-plus-circle" flat dense rounded @click="addPath">
        <q-tooltip>Create a new Learning Path</q-tooltip>
      </q-btn>
    </div>

    <div class="q-mb-lg path-block" v-for="(path, pathKey) in role.paths" :key="`paths-${pathKey}`">
      <div class="row items-center justify-between bg-grey-3 rounded-borders">
        <div class="col">
          <div class="row">
            <h5 class="q-pl-xs q-py-none q-my-none">{{ pathKey }}</h5>
            <q-btn icon="edit" flat dense rounded @click="editPathName(pathKey as string)" />
          </div>
        </div>
        <q-btn icon="delete" flat dense rounded @click="removePath(pathKey as string)">
          <q-tooltip>Delete path</q-tooltip>
        </q-btn>
      </div>

      <div class="row items-center q-ml-md">
        <h6 class="q-py-none q-my-none heading">Add ability</h6>
        <q-btn icon="mdi-plus-circle" flat dense rounded @click="addAbility(pathKey as string)"></q-btn>
      </div>

      <div class="q-ml-lg q-mb-md" v-for="(abl, ablIndex) in path" :key="`ability-${pathKey}-${ablIndex}`">
        <q-input label="Name" v-model="role.paths[pathKey][ablIndex].name">
          <template v-slot:after>
            <q-btn icon="delete" flat dense rounded @click="removeAbility(pathKey as string, ablIndex)" />
          </template>
        </q-input>
        <q-toggle label="Roll the Die?" v-model="role.paths[pathKey][ablIndex].roll" />
        <q-input
          label="Prefix Text"
          v-model="role.paths[pathKey][ablIndex].prefixText"
          hint="Use this space for descriptive text that appears before sub-abilities"
        />

        <div class="q-ml-md">
          <sub-ability-editor v-model="role.paths[pathKey][ablIndex].subAbilities" />
        </div>

        <q-input
          label="Suffix Text"
          v-model="role.paths[pathKey][ablIndex].suffixText"
          hint="Use this space for descriptive text that appears after sub-abilities"
        />
        <q-separator class="q-my-md q-py-xs" color="black" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';

import { IRole, IAbility } from './models';

import { debounce, useQuasar } from 'quasar';
import { useRoleStore } from 'src/stores/roles';

import { deepCopy, sleep } from 'src/lib/util';

import SubAbilityEditor from './SubAbilityEditor.vue';
import { useConfigStore } from 'src/stores/config';

export default defineComponent({
  name: 'RoleEditor',
  components: { SubAbilityEditor },
  props: {
    modelValue: {
      type: Object as PropType<IRole>,
      required: true,
    },
  },
  emits: ['update:modelValue', 'delete'],
  setup(props, { emit }) {
    const role = ref(props.modelValue);
    const roleStore = useRoleStore();
    const configStore = useConfigStore();
    watch(
      () => props.modelValue,
      () => (role.value = props.modelValue),
      { deep: true }
    );
    watch(
      () => role.value,
      () => {
        emit('update:modelValue', role.value);
        debounce(async () => {
          configStore.data.saving = true;
          roleStore.save(role.value);
          await sleep(200);
          configStore.data.saving = false;
        }, 1000);
      },
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
          title: 'Edit Path Name',
          cancel: true,
          prompt: {
            model: oldName,
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
        ? $q
            .dialog({
              title: `Remove ${role.value.paths[path][index].name}?`,
              cancel: true,
            })
            .onOk(() => role.value.paths[path].splice(index, 1))
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

<style lang="sass">
.path-block
  border-left: 1px solid lightgrey
  padding-left: 5px
</style>
