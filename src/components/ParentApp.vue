<template>
  <v-container>
    <ChildApp class="mt-16" @send="handleEvent"/>
  </v-container>
</template>

<script>
import ChildApp from "./ChildApp.vue";

export default {
  components: {
    ChildApp
  },
  methods: {
    handleEvent(message) {
      alert(message);
    }
  }
}
</script>
