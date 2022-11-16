<script setup lang="ts">
import { useRouter } from 'vue-router';
import MyButton from '@/components/basics/MyButton.vue'
import { Task } from '@/models/task';

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
    <li v-for="task in tasks">
      <input type="checkbox" v-model="task.done" />
      <span :class="{ 'task-done': task.done }">
        {{ task.text }}
      </span>
      <MyButton @click="openEditMode(task)">編集</MyButton>
    </li>
  </ul>
</template>
