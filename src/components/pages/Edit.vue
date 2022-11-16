<script setup lang="ts">
import { apiClient } from '@/plugins/apiClient';
import TaskEdit from '@/components/components/TaskEdit.vue'
import { Task } from '@/models/task';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const task_id = Number(route.params.id)
const task = ref<Task>()
const editTask = async (text: string) => {
  await apiClient.post('/api/edit-task', {
    id: task_id,
    text: text
  })
  router.push('/')
}

onMounted(async () => {
  task.value = await apiClient.get('/api/task/' + task_id)
})

</script>

<template>
  <p>編集モード</p>
  <TaskEdit :task="task" @edit-task="editTask" />
</template>
