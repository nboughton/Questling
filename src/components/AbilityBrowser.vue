<template>
  <div v-if="Object.keys(char.data.roles).length == 0">No roles selected. Please add a role in the profile tab</div>
</template>

<script lang="ts">
import { useCharacterStore } from 'src/stores/character';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AbilityBrowser',
  setup() {
    const char = useCharacterStore();

    return {
      char,
    };
  },
});
</script>
