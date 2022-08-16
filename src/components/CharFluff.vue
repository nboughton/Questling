<template>
  <div class="row items-baseline q-gutter-sm">Hello,</div>

  <div class="row items-baseline q-gutter-sm">
    My name is<q-input label="Name" v-model="char.data.name" dense />, (<q-input
      label="Pronouns"
      v-model="char.data.deets.pronouns"
      dense
    />). I'm <q-input label="Age" v-model="char.data.deets.age" dense /> years
    old and stand
    <q-input label="Height" v-model="char.data.deets.height" dense /> tall.
  </div>

  <!--div class="row items-baseline q-gutter-sm">I'm the party's [Role(s)].</div-->

  <div class="row items-baseline q-gutter-sm">
    When people see me, they first notice my
    <q-input label="Body" v-model="char.data.deets.body" dense />,
    <q-input label="Face" v-model="char.data.deets.face" dense />, and
    <q-input label="Vibe" v-model="char.data.deets.vibe" dense />.
  </div>

  <div class="row items-baseline q-gutter-sm">
    I wear <q-input v-model="char.data.deets.wear[0]" dense />,
    <q-input v-model="char.data.deets.wear[1]" dense /> and move with
    <q-input v-model="char.data.deets.move" dense />.
  </div>

  <div class="row items-baseline q-gutter-sm">
    I'm from <q-input v-model="char.data.deets.from" dense />, where my people
    are known for <q-input v-model="char.data.deets.knownFor" dense />.
  </div>

  <div class="row items-baseline q-gutter-sm">
    I believe in <q-input v-model="char.data.deets.ideal" dense />, but my
    <q-input v-model="char.data.deets.flaw" dense /> side can get in my way.
  </div>

  <div class="row items-baseline q-gutter-sm">
    I dream of <q-input v-model="char.data.deets.dream" dense />.
  </div>
</template>

<script lang="ts">
import { useCharacterStore } from 'src/stores/character';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CharFluff',
  setup() {
    const char = useCharacterStore();

    return {
      char,
    };
  },
});
</script>
