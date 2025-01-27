<template>
  <v-container class="mt-16">

    <v-row>
      <v-col cols="12" md="10">
        <v-text-field v-model="todo" outlined label="Введите название задачи" />
      </v-col>
      <v-col cols="12" md="2">
        <v-btn x-large @click="addTodo">Добавить</v-btn>
      </v-col>
    </v-row>

    <TodoList class="mt-8" :todos="list" @removeTodo="removeTodo" />

  </v-container>
</template>

<script>
import TodoList from './TodoList.vue'

export default {
  components: {
    TodoList
  },

  data() {
    return {
      list: [],
      todo: ''
    }
  },

  mounted() {
    // Загружаем список задач из localStorage
    if (localStorage.getItem('key')) {
      this.list = JSON.parse(localStorage.getItem('key'));
    }
  },

  methods: {
    // Добавляем задачу в список localStorage
    addTodo() {
      if (this.todo.trim() !== '') {
        this.list.push(this.todo);
        localStorage.setItem('key', JSON.stringify(this.list));
        this.todo = '';
      }
    },

    // Удаляем задачу из списка localStorage
    removeTodo(index) {
      this.list.splice(index, 1);
      localStorage.setItem('key', JSON.stringify(this.list));
    }
  },
}
</script>
