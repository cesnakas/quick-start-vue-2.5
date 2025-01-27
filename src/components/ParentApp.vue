<template>
  <v-container>
    <ChildApp class="mt-16" @send="handleEvent"/>

    <ModalApp>
      <template v-slot:title>Text Test</template>
      <template v-slot:text>CONTENT</template>
    </ModalApp>
  </v-container>
</template>

<script>
import ChildApp from './ChildApp.vue';
import ModalApp from './ModalApp.vue';

export default {
  components: {
    ChildApp,
    ModalApp,
  },
  methods: {
    handleEvent(message) {
      alert(message);
    }
  }
}
</script>
