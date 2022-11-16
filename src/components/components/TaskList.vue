<script setup lang="ts">
import { useRouter } from 'vue-router'
import MyButton from '@/components/basics/MyButton.vue'
import TaskVue from '@/components/components/Task.vue'
import { Task } from '@/models/task'

const router = useRouter()

const props = defineProps<{
  tasks: Task[]
}>()

const openEditMode = (task: Task) => {
  console.log('target task:', task)
  router.push('/edit/' + task._id)
}
</script>

<template>
  <ul>
    <TaskVue v-for="task in tasks" :task="task" />
  </ul>
</template>
