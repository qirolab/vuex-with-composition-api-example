<template>
  {{ $store.state.title }}
  <Notes />
  <AddNewNote />
</template>

<script>
import Notes from "./components/Notes";
import AddNewNote from "./components/AddNewNote";

export default {
  name: "App",
  components: {
    Notes,
    AddNewNote,
  },
};
</script>
