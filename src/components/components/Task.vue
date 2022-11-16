<script setup lang="ts">
import { useRouter } from 'vue-router';
import MyButton from '@/components/basics/MyButton.vue'
import { Task } from '@/models/task';
import { computed } from 'vue';
import { apiClient } from '@/plugins/apiClient';

const router = useRouter()

const props = defineProps<{
  task: Task
}>()

const task_done = computed({
  get() {
    return props.task.done
  },
  async set(value: boolean) {
    await apiClient.post(
      value ? '/api/set-task-done' : '/api/set-task-undone',
      { id: props.task._id }
    )
    props.task.done = value
  }
})

const openEditMode = (task: Task) => {
  console.log('target task:', task)
  router.push('/edit/' + task._id)
}
</script>

<template>
  <li>
    <input type="checkbox" v-model="task_done" />
    <span :class="{ 'task-done': task.done }">
      {{ task.text }}
    </span>
    <MyButton @click="openEditMode(task)">編集</MyButton>
  </li>
</template>
