<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { apiClient } from '@/plugins/apiClient';
import TaskAdd from '@/components/components/TaskAdd.vue'
import TaskList from '@/components/components/TaskList.vue'
import { Task } from '@/models/task';

const addNewTask = (text: string) => {
  if (!text) {
    window.alert('内容が入力されていません！')
    return
  }
  // tasksStore.addNewTask(text)
}

const clearDoneTasks = () => {
  // tasksStore.clearDoneTasks()
}

const tasks = ref<Task[]>([])

onMounted(async () => {
  console.log('onMounted')
  console.log('baseURL:', apiClient.defaults.baseURL)
  const response = await apiClient.get('/api/tasks')
  console.log('response:', response)
  tasks.value = response.data
})

</script>

<template>
  <TaskAdd @clear-done-tasks="clearDoneTasks" @add-new-task="addNewTask" />
  <div v-if="!tasks.length">
    タスクがまだありません！
  </div>
  <TaskList v-else :tasks="tasks" />
</template>

<style>
.task-done {
  text-decoration: line-through;
}
</style>
