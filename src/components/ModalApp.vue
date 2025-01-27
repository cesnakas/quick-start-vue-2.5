<template>
  <v-container>
    <v-dialog v-model="dialog" max-width="600px">

      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark class="mt-16 mb-2" v-on="on">Открыть модальное окно</v-btn>
      </template>

      <v-card>
        <v-card-title>
          <slot name="title" class="headline">Модальное окно</slot>
        </v-card-title>
        <v-card-text>
          <slot name="text">Произвольный контент</slot>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Закрыть</v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    close() {
      this.dialog = false;
    }
  }
};
</script>
