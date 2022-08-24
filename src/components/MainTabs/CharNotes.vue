<template>
  <q-input class="row" v-model="filter" debounce="500" label="Search" hint="Search by title or tags" dense clearable>
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>

    <template v-slot:after>
      <q-btn icon="mdi-plus-circle" flat rounded dense @click="addNote">
        <q-tooltip>Add new note</q-tooltip>
      </q-btn>
    </template>
  </q-input>

  <div class="q-mt-sm" v-for="(note, index) of char.data.notes" :key="`notes-${index}`">
    <note-display v-if="showNote(note)" v-model="char.data.notes[index]" @delete="removeNote(index)" />
    <q-separator />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { INote } from 'src/components/models';

import { useQuasar } from 'quasar';
import { useCharacterStore } from 'src/stores/character';

import { NewNote } from 'src/lib/character';

import NoteDisplay from '../NoteDisplay.vue';

export default defineComponent({
  name: 'CharNotes',
  components: { NoteDisplay },
  setup() {
    const $q = useQuasar();
    const char = useCharacterStore();

    const addNote = () => char.data.notes.unshift(NewNote());
    const removeNote = (index: number) =>
      $q
        .dialog({
          title: 'Delete this note?',
          cancel: true,
        })
        .onOk(() => char.data.notes.splice(index, 1));

    const filter = ref('');
    const showNote = (note: INote): boolean => {
      if (filter.value === '' || filter.value === null) return true;

      if (note.name !== undefined) if (RegExp(filter.value, 'i').test(note.name)) return true;

      if (note.tags.length > 0) if (RegExp(filter.value, 'i').test(note.tags.join(' '))) return true;

      return false;
    };

    return {
      char,

      addNote,
      removeNote,
      showNote,

      filter,
    };
  },
});
</script>
