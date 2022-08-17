<template>
  <div class="row items-baseline q-gutter-sm">Hello,</div>

  <div class="row items-baseline q-gutter-sm">
    My name is<q-input v-if="config.data.edit" class="col" label="Name" v-model="char.data.name" dense autogrow /><span v-else>{{ char.data.name }}</span
    >, (<q-input v-if="config.data.edit" class="col" label="Pronouns" v-model="char.data.deets.pronouns" dense /><span v-else>{{
      char.data.deets.pronouns
    }}</span
    >) I'm <q-input v-if="config.data.edit" class="col" label="Age" v-model="char.data.deets.age" dense autogrow /><span v-else>{{ char.data.deets.age }}</span
    >&nbsp;years old and stand <q-input v-if="config.data.edit" class="col" label="Height" v-model="char.data.deets.height" dense autogrow /><span v-else>{{
      char.data.deets.height
    }}</span
    >&nbsp; tall.
  </div>

  <div class="row items-baseline q-gutter-sm">
    I'm the party's
    <q-select v-if="config.data.edit" :options="availableRoles" multiple v-model="selectedRoles" dense /><span v-else>{{ selectedRoles.join('/') }}</span
    >.
  </div>

  <div class="row items-baseline q-gutter-sm">
    When people see me, they first notice my
    <q-input v-if="config.data.edit" class="col" label="Body" v-model="char.data.deets.body" dense autogrow /><span v-else>{{ char.data.deets.body }}</span
    >, <q-input v-if="config.data.edit" class="col" label="Face" v-model="char.data.deets.face" dense autogrow /><span v-else>{{ char.data.deets.face }}</span
    >, and <q-input v-if="config.data.edit" class="col" label="Vibe" v-model="char.data.deets.vibe" dense autogrow /><span v-else>{{
      char.data.deets.vibe
    }}</span
    >.
  </div>

  <div class="row items-baseline q-gutter-sm">
    I wear
    <q-input v-if="config.data.edit" class="col" v-model="char.data.deets.wear[0]" dense autogrow /><span v-else>{{ char.data.deets.wear[0] }}</span
    >, <q-input v-if="config.data.edit" class="col" v-model="char.data.deets.wear[1]" dense autogrow /><span v-else>{{ char.data.deets.wear[1] }}</span
    >&nbsp; and move with <q-input v-if="config.data.edit" class="col" v-model="char.data.deets.move" dense autogrow /><span v-else>{{
      char.data.deets.move
    }}</span
    >.
  </div>

  <div class="row items-baseline q-gutter-sm">
    I'm from
    <q-input v-if="config.data.edit" class="col" label="Place" v-model="char.data.deets.from" dense autogrow /><span v-else>{{ char.data.deets.from }}</span
    >, where my people are known for
    <q-input v-if="config.data.edit" class="col" label="Characteristic" v-model="char.data.deets.knownFor" dense autogrow /><span v-else>{{
      char.data.deets.knownFor
    }}</span
    >.
  </div>

  <div class="row items-baseline q-gutter-sm">
    I believe in
    <q-input v-if="config.data.edit" class="col" label="Ideal" v-model="char.data.deets.ideal" dense autogrow /><span v-else>{{ char.data.deets.ideal }}</span
    >, but my <q-input v-if="config.data.edit" class="col" label="Flaw" v-model="char.data.deets.flaw" dense autogrow /><span v-else>{{
      char.data.deets.flaw
    }}</span>
    side can get in my way.
  </div>

  <div class="row items-baseline q-gutter-sm">
    I dream of
    <q-input v-if="config.data.edit" class="col" label="Dream" v-model="char.data.deets.dream" dense autogrow /><span v-else>{{ char.data.deets.dream }}</span
    >.
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { Roles } from 'src/data/roles';
import { deepCopy } from 'src/lib/util';
import { useCharacterStore } from 'src/stores/character';
import { useConfigStore } from 'src/stores/config';
import { computed, defineComponent, ref, watch } from 'vue';
export default defineComponent({
  name: 'CharFluff',
  setup() {
    const char = useCharacterStore();
    const config = useConfigStore();
    const $q = useQuasar();

    const availableRoles = computed((): string[] => Object.keys(Roles));
    const selectedRoles = ref(Object.keys(char.data.roles));
    watch(
      () => selectedRoles.value,
      () => {
        // Add missing roles
        selectedRoles.value.forEach((role) => {
          if (!Object.keys(char.data.roles).includes(role)) {
            char.data.roles[role] = deepCopy(Roles[role]);
          }
        });

        // Remove deleted roles
        Object.keys(char.data.roles).forEach((role) => {
          if (!selectedRoles.value.includes(role)) {
            $q.dialog({
              title: `Remove ${role} Role?`,
              message: 'This will remove all data for this Role from your character.',
              cancel: true,
            }).onOk(() => delete char.data.roles[role]);
          }
        });
      }
    );

    return {
      char,
      config,
      availableRoles,
      selectedRoles,
    };
  },
});
</script>
