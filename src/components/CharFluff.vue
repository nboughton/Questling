<template>
  <div class="row items-center justify-between q-gutter-sm">
    <span class="col-grow">Hello,</span>
    <q-toggle v-model="config.data.edit" label="Edit" checked-icon="edit" unchecked-icon="lock" />
  </div>

  <div v-if="config.data.edit">
    <div class="row items-baseline">
      My name is<q-input class="q-mx-sm" label="Name" v-model="char.data.name" dense autogrow />, (<q-input
        class="q-mx-sm"
        label="Pronouns"
        v-model="char.data.deets.pronouns"
        dense
      />), I'm <q-input class="q-mx-sm" label="Age" v-model="char.data.deets.age" dense autogrow /> years old and stand
      <q-input class="q-mx-sm" label="Height" v-model="char.data.deets.height" dense autogrow /> tall.
    </div>

    <div class="row items-center">
      I'm the party's
      <q-select class="q-mx-sm" label="Role(s)" :options="availableRoles" multiple v-model="selectedRoles" dense />.
    </div>

    <div class="row items-baseline">
      When people see me, they first notice my
      <q-input class="q-mx-sm" label="Body" v-model="char.data.deets.body" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="char.data.deets.body = getSuggestion(Lists.Body)" />
        </template> </q-input
      >,
      <q-input class="q-mx-sm" label="Face" v-model="char.data.deets.face" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="char.data.deets.face = getSuggestion(Lists.Face)" />
        </template> </q-input
      >, and
      <q-input class="q-mx-sm" label="Vibe" v-model="char.data.deets.vibe" dense autogrow>
        <template v-slot:append> <q-btn icon="mdi-dice-d20" flat dense rounded @click="char.data.deets.vibe = getSuggestion(Lists.Vibe)" /> </template></q-input
      >.
    </div>

    <div class="row items-baseline">
      I wear
      <q-input class="q-mx-sm" v-model="char.data.deets.wear[0]" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="char.data.deets.wear[0] = getSuggestion(Lists.Wear)" />
        </template> </q-input
      >,
      <q-input class="q-mx-sm" v-model="char.data.deets.wear[1]" dense autogrow>
        <template v-slot:append> <q-btn icon="mdi-dice-d20" flat dense rounded @click="char.data.deets.wear[1] = getSuggestion(Lists.Wear)" /> </template
      ></q-input>
      and move with
      <q-input class="q-mx-sm" v-model="char.data.deets.move" dense autogrow>
        <template v-slot:append> <q-btn icon="mdi-dice-d20" flat dense rounded @click="char.data.deets.move = getSuggestion(Lists.Move)" /> </template></q-input
      >.
    </div>

    <div class="row items-baseline">
      I'm from
      <q-input class="q-mx-sm" label="Place" v-model="char.data.deets.from" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="char.data.deets.from = getSuggestion(Lists.From)" />
        </template> </q-input
      >, where my people are known for
      <q-input class="q-mx-sm" label="Characteristic" v-model="char.data.deets.knownFor" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="char.data.deets.knownFor = getSuggestion(Lists.Known)" />
        </template> </q-input
      >.
    </div>

    <div class="row items-baseline">
      I believe in
      <q-input class="q-mx-sm" label="Ideal" v-model="char.data.deets.ideal" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="char.data.deets.ideal = getSuggestion(Lists.Ideal)" />
        </template> </q-input
      >, but my
      <q-input class="q-mx-sm" label="Flaw" v-model="char.data.deets.flaw" dense autogrow>
        <template v-slot:append> <q-btn icon="mdi-dice-d20" flat dense rounded @click="char.data.deets.flaw = getSuggestion(Lists.Flaw)" /> </template>
      </q-input>
      side can get in my way.
    </div>

    <div class="row items-baseline">
      I dream of
      <q-input class="q-mx-sm" label="Dream" v-model="char.data.deets.dream" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="char.data.deets.dream = getSuggestion(Lists.Dream)" />
        </template> </q-input
      >.
    </div>
  </div>
  <div v-else>
    <div class="row">
      My name is {{ char.data.name }}, ({{ char.data.deets.pronouns }}), I'm {{ char.data.deets.age }} years old and stand {{ char.data.deets.height }} tall.
    </div>
    <div class="row">I'm the party's {{ selectedRoles.join('/') }}.</div>
    <div class="row">When people see me, they first notice my {{ char.data.deets.body }}, {{ char.data.deets.face }}, and {{ char.data.deets.vibe }}.</div>
    <div class="row">I wear {{ char.data.deets.wear[0] }}, {{ char.data.deets.wear[1] }} and move with {{ char.data.deets.move }}.</div>
    <div class="row">I'm from {{ char.data.deets.from }}, where my people are known for {{ char.data.deets.knownFor }}.</div>
    <div class="row">I believe in {{ char.data.deets.ideal }}, but my {{ char.data.deets.flaw }} side can get in my way.</div>
    <div class="row">I dream of {{ char.data.deets.dream }}.</div>
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { Roles } from 'src/data/roles';
import { deepCopy } from 'src/lib/util';
import { useCharacterStore } from 'src/stores/character';
import { useConfigStore } from 'src/stores/config';
import { computed, defineComponent } from 'vue';
import { Lists, getSuggestion } from 'src/data/profileSuggestions';
export default defineComponent({
  name: 'CharFluff',
  setup() {
    const char = useCharacterStore();
    const config = useConfigStore();
    const $q = useQuasar();

    const availableRoles = computed((): string[] => Object.keys(Roles));
    const selectedRoles = computed({
      get: (): string[] => Object.keys(char.data.roles),
      set: (sel: string[]) => {
        // Add missing roles
        sel.forEach((role) => {
          if (!Object.keys(char.data.roles).includes(role)) {
            char.data.roles[role] = deepCopy(Roles[role]);
          }
        });

        // Remove deleted roles
        Object.keys(char.data.roles).forEach((role) => {
          if (!sel.includes(role)) {
            $q.dialog({
              title: `Remove ${role} Role?`,
              message: 'This will remove all data for this Role from your character.',
              cancel: true,
            }).onOk(() => delete char.data.roles[role]);
          }
        });
      },
    });

    return {
      char,
      config,
      availableRoles,
      selectedRoles,
      Lists,
      getSuggestion,
    };
  },
});
</script>
