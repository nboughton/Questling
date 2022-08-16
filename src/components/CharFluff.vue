<template>
  <div class="row items-baseline q-gutter-sm">Hello,</div>

  <div class="row items-baseline q-gutter-sm">
    My name is<q-input
      class="col"
      label="Name"
      v-model="char.data.name"
      dense
      autogrow
      borderless
    />, (<q-input
      class="col"
      label="Pronouns"
      v-model="char.data.deets.pronouns"
      dense
      borderless
    />). I'm
    <q-input
      class="col"
      label="Age"
      v-model="char.data.deets.age"
      dense
      autogrow
      borderless
    />
    years old and stand
    <q-input
      class="col"
      label="Height"
      v-model="char.data.deets.height"
      dense
      autogrow
      borderless
    />
    tall.
  </div>

  <div class="row items-baseline q-gutter-sm">
    I'm the party's
    <q-select
      :options="availableRoles"
      multiple
      v-model="selectedRoles"
      dense
    />.
  </div>

  <div class="row items-baseline q-gutter-sm">
    When people see me, they first notice my
    <q-input
      class="col"
      label="Body"
      v-model="char.data.deets.body"
      dense
      autogrow
      borderless
    />,
    <q-input
      class="col"
      label="Face"
      v-model="char.data.deets.face"
      dense
      autogrow
      borderless
    />, and
    <q-input
      class="col"
      label="Vibe"
      v-model="char.data.deets.vibe"
      dense
      autogrow
      borderless
    />.
  </div>

  <div class="row items-baseline q-gutter-sm">
    I wear
    <q-input
      class="col"
      v-model="char.data.deets.wear[0]"
      dense
      autogrow
      borderless
    />,
    <q-input
      class="col"
      v-model="char.data.deets.wear[1]"
      dense
      autogrow
      borderless
    />
    and move with
    <q-input
      class="col"
      v-model="char.data.deets.move"
      dense
      autogrow
      borderless
    />.
  </div>

  <div class="row items-baseline q-gutter-sm">
    I'm from
    <q-input
      class="col"
      label="Place"
      v-model="char.data.deets.from"
      dense
      autogrow
      borderless
    />, where my people are known for
    <q-input
      class="col"
      label="Characteristic"
      v-model="char.data.deets.knownFor"
      dense
      autogrow
      borderless
    />.
  </div>

  <div class="row items-baseline q-gutter-sm">
    I believe in
    <q-input
      class="col"
      label="Ideal"
      v-model="char.data.deets.ideal"
      dense
      autogrow
      borderless
    />, but my
    <q-input
      class="col"
      label="Flaw"
      v-model="char.data.deets.flaw"
      dense
      autogrow
      borderless
    />
    side can get in my way.
  </div>

  <div class="row items-baseline q-gutter-sm">
    I dream of
    <q-input
      class="col"
      label="Dream"
      v-model="char.data.deets.dream"
      dense
      autogrow
      borderless
    />.
  </div>
</template>

<script lang="ts">
import { Roles } from 'src/data/roles';
import { useCharacterStore } from 'src/stores/character';
import { computed, defineComponent, ref, watch } from 'vue';
export default defineComponent({
  name: 'CharFluff',
  setup() {
    const char = useCharacterStore();

    const availableRoles = computed((): string[] => Object.keys(Roles));
    const selectedRoles = ref(null);
    watch(
      () => selectedRoles.value,
      () => {
        // stuff happens
      }
    );

    return {
      char,
      availableRoles,
      selectedRoles,
    };
  },
});
</script>
