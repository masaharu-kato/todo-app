<script setup lang="ts">
import TaskAdd from '@/components/components/TaskAdd.vue'
import TaskList from '@/components/components/TaskList.vue'
import { useTasksStore } from '@/stores/task'

const tasksStore = useTasksStore()

const addNewTask = (text: string) => {
  if (!text) {
    window.alert('内容が入力されていません！')
    return
  }
  tasksStore.addNewTask(text)
}

const clearDoneTasks = () => {
  tasksStore.clearDoneTasks()
}

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
