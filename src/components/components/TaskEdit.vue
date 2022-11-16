<script setup lang="ts">
import MyButton from '@/components/basics/MyButton.vue'

const props = defineProps<{
  task_text: string
}>()

const emit = defineEmits<{
  (e: 'edit-task', text: string): void
}>()

const input = {
  text: props.task_text
}

const editTask = () => {
  console.log('emit edit-task:', input.text)
  emit('edit-task', input.text)
  input.text = ''
}

</script>

<template>
  <input type="text" v-model="input.text" />
  <MyButton @click="editTask">編集</MyButton>
</template>
