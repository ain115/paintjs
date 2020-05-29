<template>
  <div id="app">
      <div>
        <button @click="all">all</button>
        <button @click="active">active</button>
        <button @click="completed">completed</button>
      </div>
      <input class="form-control" placeholder="New item" v-model="newTodo" @keydown.enter="addTodo">
      <ul class="list-unstyled">
        <li v-for="todo in todos" :key="todo.index" :class="{ completed: todo.completed }">
          <input type="checkbox" v-model="todo.completed">
          {{ todo.text }}
          <button @click="remove(todo)">삭제</button>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      newTodo: '',
      todos: [],
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';
    },
    remove(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },

  },
  mounted() {
    console.log('App mounted!');
    if (localStorage.getItem('todos')) this.todos = JSON.parse(localStorage.getItem('todos'));
  },
  watch: {
    todos: {
      handler() {
        console.log('Todos changed!');
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deep: true,
    },
  },
};
</script>

<style>

</style>