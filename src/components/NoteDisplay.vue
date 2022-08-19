<template>
  <q-card flat>
    <q-card-section class="column">
      <q-input class="row" v-model="note.name" label="Title" />
      <div class="row items-center justify-between">
        <q-select class="col-grow" v-model="note.tags" use-chips multiple :options="char.getTags" label="Tags" borderless />
        <q-btn class="col-shrink" icon="add" flat dense rounded @click="addTag" />
      </div>
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
  emits: ['update:modelValue'],
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
