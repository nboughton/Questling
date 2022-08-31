<template>
  <div class="row items-baseline justify-between q-gutter-sm">
    <span class="col-grow">Hello,</span>
    <q-toggle v-model="configStore.data.edit" label="Edit" checked-icon="edit" unchecked-icon="lock" />
  </div>

  <div v-if="configStore.data.edit">
    <div class="row items-baseline">
      My name is<q-input class="q-mx-sm" label="Name" v-model="characterStore.data.name" dense autogrow />, (<q-input
        class="q-mx-sm"
        label="Pronouns"
        v-model="characterStore.data.deets.pronouns"
        dense
      />), I'm <q-input class="q-mx-sm" label="Age" v-model="characterStore.data.deets.age" dense autogrow /> years old and stand
      <q-input class="q-mx-sm" label="Height" v-model="characterStore.data.deets.height" dense autogrow /> tall.
    </div>

    <div class="row items-baseline">
      I'm the party's
      <q-select
        class="q-mx-sm col-xs-3 col-sm-2 col-md-1"
        label="Role(s)"
        map-options
        emit-value
        multiple
        :options="availableRoles"
        v-model="selectedRoles"
        dense
      />.
    </div>

    <div class="row items-baseline">
      When people see me, they first notice my
      <q-input class="q-mx-sm" label="Body" v-model="characterStore.data.deets.body" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="characterStore.data.deets.body = getSuggestion(Lists.Body)" />
        </template> </q-input
      >,
      <q-input class="q-mx-sm" label="Face" v-model="characterStore.data.deets.face" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="characterStore.data.deets.face = getSuggestion(Lists.Face)" />
        </template> </q-input
      >, and
      <q-input class="q-mx-sm" label="Vibe" v-model="characterStore.data.deets.vibe" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="characterStore.data.deets.vibe = getSuggestion(Lists.Vibe)" /> </template></q-input
      >.
    </div>

    <div class="row items-baseline">
      I wear
      <q-input class="q-mx-sm" v-model="characterStore.data.deets.wear[0]" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="characterStore.data.deets.wear[0] = getSuggestion(Lists.Wear)" />
        </template> </q-input
      >,
      <q-input class="q-mx-sm" v-model="characterStore.data.deets.wear[1]" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="characterStore.data.deets.wear[1] = getSuggestion(Lists.Wear)" /> </template
      ></q-input>
      and move with
      <q-input class="q-mx-sm" v-model="characterStore.data.deets.move" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="characterStore.data.deets.move = getSuggestion(Lists.Move)" /> </template></q-input
      >.
    </div>

    <div class="row items-baseline">
      I'm from
      <q-input class="q-mx-sm" label="Place" v-model="characterStore.data.deets.from" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="characterStore.data.deets.from = getSuggestion(Lists.From)" />
        </template> </q-input
      >, where my people are known for
      <q-input class="q-mx-sm" label="Characteristic" v-model="characterStore.data.deets.knownFor" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="characterStore.data.deets.knownFor = getSuggestion(Lists.Known)" />
        </template> </q-input
      >.
    </div>

    <div class="row items-baseline">
      I believe in
      <q-input class="q-mx-sm" label="Ideal" v-model="characterStore.data.deets.ideal" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="characterStore.data.deets.ideal = getSuggestion(Lists.Ideal)" />
        </template> </q-input
      >, but my
      <q-input class="q-mx-sm" label="Flaw" v-model="characterStore.data.deets.flaw" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="characterStore.data.deets.flaw = getSuggestion(Lists.Flaw)" />
        </template>
      </q-input>
      side can get in my way.
    </div>

    <div class="row items-baseline">
      I dream of
      <q-input class="q-mx-sm" label="Dream" v-model="characterStore.data.deets.dream" dense autogrow>
        <template v-slot:append>
          <q-btn icon="mdi-dice-d20" flat dense rounded @click="characterStore.data.deets.dream = getSuggestion(Lists.Dream)" />
        </template> </q-input
      >.
    </div>
  </div>
  <div v-else>
    <div class="row">
      My name is {{ characterStore.data.name }}, ({{ characterStore.data.deets.pronouns }}), I'm {{ characterStore.data.deets.age }} years old and stand
      {{ characterStore.data.deets.height }} tall.
    </div>
    <div class="row">
      I'm the party's
      {{
        Object.keys(characterStore.data.roles)
          .map((k) => characterStore.data.roles[k].name)
          .join('/')
      }}.
    </div>
    <div class="row">
      When people see me, they first notice my {{ characterStore.data.deets.body }}, {{ characterStore.data.deets.face }}, and
      {{ characterStore.data.deets.vibe }}.
    </div>
    <div class="row">
      I wear {{ characterStore.data.deets.wear[0] }}, {{ characterStore.data.deets.wear[1] }} and move with {{ characterStore.data.deets.move }}.
    </div>
    <div class="row">I'm from {{ characterStore.data.deets.from }}, where my people are known for {{ characterStore.data.deets.knownFor }}.</div>
    <div class="row">I believe in {{ characterStore.data.deets.ideal }}, but my {{ characterStore.data.deets.flaw }} side can get in my way.</div>
    <div class="row">I dream of {{ characterStore.data.deets.dream }}.</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import { useQuasar } from 'quasar';
import { useRoleStore } from 'src/stores/roles';
import { useConfigStore } from 'src/stores/config';
import { useCharacterStore } from 'src/stores/character';

import { Lists, getSuggestion } from 'src/data/profileSuggestions';
import { Roles } from 'src/data/roles';
import { deepCopy } from 'src/lib/util';
import { IRole } from '../models';

export default defineComponent({
  name: 'CharProfile',
  setup() {
    const $q = useQuasar();
    const characterStore = useCharacterStore();
    const configStore = useConfigStore();
    const roleStore = useRoleStore();

    interface IOption {
      label: string;
      value: string;
    }

    // Aggregate built-in, custom roles, and player roles that are not mirrored in either of the other two stores
    const aggregateRoles = computed((): { [index: string]: IRole } => {
      const r: { [index: string]: IRole } = {};
      // Built-in Roles
      Object.keys(Roles).forEach((key) => (r[Roles[key].id] = Roles[key]));
      // Custom Roles
      roleStore.data.forEach((cRole) => (r[cRole.id] = cRole));
      // Player Roles
      Object.keys(characterStore.data.roles).forEach((key) => {
        if (!r[characterStore.data.roles[key].id]) r[characterStore.data.roles[key].id] = characterStore.data.roles[key];
      });

      return r;
    });
    // QSelect options
    const availableRoles = computed((): IOption[] =>
      Object.keys(aggregateRoles.value).map((k) => {
        return { label: aggregateRoles.value[k].name, value: aggregateRoles.value[k].id };
      })
    );

    // QSelect v-model
    const selectedRoles = computed({
      get: (): string[] => Object.keys(characterStore.data.roles).map((k) => characterStore.data.roles[k].id),
      set: (sel: string[]) => {
        // Add missing roles
        sel.forEach((role) => {
          if (!Object.keys(characterStore.data.roles).includes(role)) {
            characterStore.data.roles[role] = deepCopy(aggregateRoles.value[role]);
          }
        });

        // Remove deleted roles
        Object.keys(characterStore.data.roles).forEach((role) => {
          if (!sel.includes(role)) {
            $q.dialog({
              title: `Remove ${characterStore.data.roles[role].name} Role?`,
              message: 'This will remove all data for this Role from your character.',
              cancel: true,
            }).onOk(() => delete characterStore.data.roles[role]);
          }
        });
      },
    });

    return {
      characterStore,
      configStore,
      availableRoles,
      selectedRoles,
      Lists,
      getSuggestion,
    };
  },
});
</script>
