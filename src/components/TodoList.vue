<template>
  <v-container>
    <v-list>
      <v-list-item v-for="(todo, index) in todos" :key="index">
        <v-list-item-content>
          <v-list-item-title>{{ todo }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn @click="$emit('removeTodo', index)">Удалить</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
}
</script>
