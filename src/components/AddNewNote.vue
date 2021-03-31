<template>
  <input type="text" v-model="title" @keypress.enter="save" />
  <p>Total Notes: {{ totalNotes }}</p>
</template>


<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  setup() {
    const store = useStore();

    const totalNotes = computed(() => store.getters.totalNotes);

    const title = ref("");

    function save() {
      store.dispatch("saveNote", title.value);
      title.value = "";
    }

    return {
      totalNotes,
      title,
      save,
    };
  },
};
</script>
