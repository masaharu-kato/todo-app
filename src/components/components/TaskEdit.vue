<script setup lang="ts">
import MyButton from '@/components/basics/MyButton.vue'
import { Task } from '@/models/task'
import { onMounted, Ref, toRef } from 'vue';

const props = defineProps<{
  task: Ref<Task>
}>()

const emit = defineEmits<{
  (e: 'edit-task', text: string): void
}>()

const input = {
  text: ''
}

onMounted(async () => {
  const task = props.task.value
  input.text = task.text
})

const editTask = () => {
  emit('edit-task', input.text)
  input.text = ""
}

</script>

<template>
  <input type="text" v-model="input.text" />
  <MyButton @click="editTask">編集</MyButton>
</template>
