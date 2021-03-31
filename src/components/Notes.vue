<template>
  <ul>
    <li v-for="(note, index) in notes" :key="index">{{ note }}</li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    const notes = computed(() => store.state.notes);

    return {
      notes,
    };
  },
};
</script>
