<script setup lang="ts">
import { apiClient } from '@/plugins/apiClient';
import TaskEdit from '@/components/components/TaskEdit.vue'
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const task_id = String(route.params.id)
const task_text = ref<string>()
const editTask = async (text: string) => {
  console.log('pages.editTask', text)
  const response = await apiClient.post('/api/edit-task', {
    id: task_id,
    text: text
  })
  console.log('edit response:', response)
  router.push('/')
}

onMounted(async () => {
  task_text.value = (await apiClient.get('/api/task/' + task_id)).data.text
})

</script>

<template>
  <p>編集モード</p>
  <div v-if="task_text == undefined">Loading...</div>
  <TaskEdit v-else :task_text="task_text" @edit-task="editTask" />
</template>
