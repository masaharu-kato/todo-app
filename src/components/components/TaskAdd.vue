<script setup lang="ts">
import MyButton from '@/components/basics/MyButton.vue'
import { reactive } from 'vue';

const emit = defineEmits<{
  (e: 'add-new-task', text: string): void,
  (e: 'clear-done-tasks'): void,
}>()

const input = reactive<{ text: string }>({
  text: ''
})

const addNewTask = () => {
  emit('add-new-task', input.text)
  input.text = ''
}
</script>

<template>
  <input type="text" v-model="input.text" />
  <MyButton @click="addNewTask"><img src="@/assets/icon-plus.svg" height="10" />追加</MyButton>
  <MyButton @click="emit('clear-done-tasks')">完了済みを削除する</MyButton>
</template>
