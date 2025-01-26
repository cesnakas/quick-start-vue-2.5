<template>
  <v-container>
    <v-btn @click="handleEvent">Отправить</v-btn>
  </v-container>
</template>

<script>
export default {
  methods: {
    handleEvent() {
      this.$emit('send', 'Сообщение от Child')
    }
  }
}
</script>
