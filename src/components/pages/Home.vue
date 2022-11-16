<script lang="ts">
import { defineComponent } from 'vue'
import TaskAdd from '@/components/components/TaskAdd.vue'
import TaskList from '@/components/components/TaskList.vue'
import { mapActions, mapStores } from 'pinia'
import { useTasksStore } from '@/stores/task'

export default defineComponent({
  components: {
    TaskAdd: TaskAdd,
    TaskList: TaskList,
  },
  // data() {
  //   return {
  //     tasks: [
  //       // {
  //       //   text: "Vueをマスターする",
  //       //   done: true,
  //       // }, {
  //       //   text: "牛乳を買う",
  //       //   done: false,
  //       // }, {
  //       //   text: "家賃を払う",
  //       //   done: false,
  //       // },
  //     ] as { text: string, done: boolean }[]
  //   }
  // },
  computed: {
    ...mapStores(useTasksStore),
  },
  methods: {
    // ...mapActions(useTasksStore, ['addTask', 'clearDoneTasks']),
    addNewTask(text: string) {
      if (!text) {
        window.alert('内容が入力されていません！')
        return
      }
      this.tasksStore.addNewTask(text)
    },
    clearDoneTasks() {
      this.tasksStore.clearDoneTasks()
    }
    // removeDoneTasks() {
    //   // console.log(this.tasks.map(task => task.done))
    //   this.tasks = this.tasks.filter(task => !task.done)
    // },
  },
})
</script>

<template>
  <TaskAdd @clear-done-tasks="clearDoneTasks" @add-new-task="addNewTask" />
  <div v-if="!tasksStore.tasks.length">
    タスクがまだありません！
  </div>
  <TaskList v-else :tasks="tasksStore.tasks" />
</template>

<style>
.task-done {
  text-decoration: line-through;
}
</style>

