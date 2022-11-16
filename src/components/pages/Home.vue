<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { apiClient } from '@/plugins/apiClient';
import TaskAdd from '@/components/components/TaskAdd.vue'
import TaskList from '@/components/components/TaskList.vue'
import { Task } from '@/models/task';

const addNewTask = async (text: string) => {
  if (!text) {
    window.alert('内容が入力されていません！')
    return
  }
  await apiClient.post('/api/add-task', {
    text: text
  })
  tasks.value = (await apiClient.get('/api/tasks')).data
  // tasksStore.addNewTask(text)
}

const clearDoneTasks = () => {
  // tasksStore.clearDoneTasks()
}

const tasks = ref<Task[]>([])

onMounted(async () => {
  console.log('onMounted')
  console.log('baseURL:', apiClient.defaults.baseURL)
  tasks.value = (await apiClient.get('/api/tasks')).data
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
