<script setup lang="ts">
import MyButton from '@/components/basics/MyButton.vue'
import { Task } from '@/stores/task'

const props = defineProps<{
  task: Task
}>()

const emit = defineEmits<{
  (e: 'edit-task', text: string): void
}>()

const input = {
  text: props.task.text
}

const editTask = () => {
  emit('edit-task', input.text)
  input.text = ""
}

</script>

<template>
  <input type="text" v-model="input.text" />
  <MyButton @click="editTask">編集</MyButton>
</template>
