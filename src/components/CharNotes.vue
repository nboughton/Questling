<template>
  <q-input class="row" v-model="filter" debounce="500" label="Search" hint="Search by title or tags" clearable>
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>

    <template v-slot:after>
      <q-btn icon="add" flat rounded dense @click="addNote">
        <q-tooltip>Add new note</q-tooltip>
      </q-btn>
    </template>
  </q-input>

  <div v-for="(note, index) of char.data.notes" :key="`notes-${index}`">
    <note-display v-if="showNote(note)" v-model="char.data.notes[index]" @delete="removeNote(index)" />
  </div>
</template>

<script lang="ts">
import { useCharacterStore } from 'src/stores/character';
import { defineComponent, ref } from 'vue';
import { NewNote } from 'src/lib/character';
import { useQuasar } from 'quasar';
import { INote } from './models';
import NoteDisplay from './NoteDisplay.vue';
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
