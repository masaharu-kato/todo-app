<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    tasks: Array as PropType<{ text: String, done: boolean }[]>
  },
})
</script>

<template>
  <ul>
    <li v-for="task in tasks">
      <input type="checkbox" v-model="task.done" /><span :class="{ 'todo-done': task.done }">{{ task.text }}</span>
    </li>
  </ul>
</template>
