<script lang="ts">
export default {
  data() {
    return {
      input: {
        text: '',
        done: false,
      },
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
    addTask() {
      if (!this.input.text) {
        window.alert('内容が入力されていません！')
        return
      }
      this.tasks.push(this.input)
      this.input = {
        text: '',
        done: false,
      }
    },
    removeDoneTasks() {
      // console.log(this.tasks.map(task => task.done))
      this.tasks = this.tasks.filter(task => !task.done)
    },

  },
}
</script>

<template>
  <h1>My ToDo App</h1>
  <input type="text" v-model="input.text" />
  <button @click="addTask">追加</button>
  <button @click="removeDoneTasks">完了済みを削除する</button>
  <div v-if="!tasks.length">
    タスクがまだありません！
  </div>
  <ul v-else>
    <li v-for="task in tasks">
      <input type="checkbox" v-model="task.done" /><span :class="{ 'todo-done': task.done }">{{ task.text }}</span>
    </li>
  </ul>
</template>

<style>
.todo-done {
  text-decoration: line-through;
}
</style>
