<template>
  <span class="ap-cost-box" v-if="ap || ap == 0" @click="spendAp">{{ ap }}<q-tooltip>Click to spend AP</q-tooltip></span>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { useCharacterStore } from 'src/stores/character';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ApCostBox',
  props: {
    ap: {
      type: [Number, String],
    },
  },
  setup(props) {
    const char = useCharacterStore();
    const $q = useQuasar();
    const spendAp = () => {
      if (typeof props.ap === 'number') {
        if (char.data.ap - props.ap >= 0) {
          char.data.ap -= props.ap;
          $q.notify({
            message: `<div class="page-content">${props.ap} AP spent</div>`,
            html: true,
            type: 'info',
            color: 'black',
          });
        } else {
          $q.notify({
            message: '<div class="page-content">Not enough AP</div>',
            html: true,
            type: 'warning',
            color: 'black',
            textColor: 'white',
          });
        }
      }

      if (typeof props.ap === 'string' && props.ap === 'X') {
        $q.dialog({
          title: 'Spend AP',
          prompt: {
            model: '',
            type: 'number',
          },
          cancel: true,
        }).onOk((data) => {
          if (char.data.ap - +data >= 0) {
            char.data.ap -= +data;
            $q.notify({
              message: `<div class="page-content">${+data} AP spent</div>`,
              html: true,
              color: 'black',
              textColor: 'white',
            });
          } else {
            $q.notify({
              message: '<div class="page-content">Not enough AP</div>',
              html: true,
              type: 'warning',
              color: 'black',
              textColor: 'white',
            });
          }
        });
      }
    };

    return {
      spendAp,
    };
  },
});
</script>
