<script lang="ts">
import { defineComponent } from 'vue'
import TodoAdd from './components/TodoAdd.vue'
import TodoList from './components/TodoList.vue'

export default defineComponent({
  components: {
    TodoAdd,
    TodoList,
  },
  data() {
    return {
      tasks: [
        // {
        //   text: "Vueをマスターする",
        //   done: true,
        // }, {
        //   text: "牛乳を買う",
        //   done: false,
        // }, {
        //   text: "家賃を払う",
        //   done: false,
        // },
      ] as { text: string, done: boolean }[]
    }
  },
  methods: {
    addTask(text: string) {
      if (!text) {
        window.alert('内容が入力されていません！')
        return
      }
      this.tasks.push({ text: text, done: false })
    },
    removeDoneTasks() {
      // console.log(this.tasks.map(task => task.done))
      this.tasks = this.tasks.filter(task => !task.done)
    },
  },
})
</script>

<template>
  <h1>My ToDo App</h1>
  <TodoAdd @delete-done="removeDoneTasks" @add-todo="addTask" />
  <div v-if="!tasks.length">
    タスクがまだありません！
  </div>
  <TodoList v-else :tasks="tasks" />
</template>

<style>
.todo-done {
  text-decoration: line-through;
}
</style>
