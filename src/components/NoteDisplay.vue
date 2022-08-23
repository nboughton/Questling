<template>
  <q-card class="q-mb-md" flat>
    <q-card-section class="column">
      <div class="row items-center justify-between">
        <q-input class="col-xs-12 col-sm-8" v-model="note.name" label="Title" dense borderless>
          <template v-slot:append>
            <q-btn icon="delete" flat dense rounded @click="$emit('delete')">
              <q-tooltip>Delete this note</q-tooltip>
            </q-btn>
          </template>
        </q-input>

        <q-select class="col-xs-12 col-sm-4" v-model="note.tags" use-chips multiple :options="char.getTags" label="Tags" dense borderless>
          <template v-slot:append>
            <q-btn icon="mdi-plus-circle" flat dense rounded @click="addTag">
              <q-tooltip>Add tag</q-tooltip>
            </q-btn>
          </template>
        </q-select>
      </div>
      <div class="row items-center justify-between"></div>
      <q-input class="row" v-model="note.text" label="Text" autogrow outlined />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { useCharacterStore } from 'src/stores/character';
import { defineComponent, PropType, ref, watch } from 'vue';
import { INote } from './models';
export default defineComponent({
  name: 'NoteDisplay',
  props: {
    modelValue: {
      type: Object as PropType<INote>,
      required: true,
    },
  },
  emits: ['update:modelValue', 'delete'],
  setup(props, { emit }) {
    const note = ref(props.modelValue);
    watch(
      () => props.modelValue,
      () => (note.value = props.modelValue),
      { deep: true }
    );
    watch(
      () => note.value,
      () => emit('update:modelValue', note.value),
      { deep: true }
    );

    const $q = useQuasar();
    const addTag = () =>
      $q
        .dialog({
          title: 'Add Tag',
          prompt: {
            model: '',
            type: 'text',
          },
          cancel: true,
        })
        .onOk((data) => {
          if (data != '' && !note.value.tags.includes(data)) note.value.tags.push(data);
        });

    const char = useCharacterStore();
    return {
      char,
      note,
      addTag,
    };
  },
});
</script>
