<script lang="ts">
import { defineComponent, PropType } from 'vue';
import MyButton from '@/components/basics/MyButton.vue'
import { Task } from '@/stores/task';

export default defineComponent({
  components: {
    MyButton,
  },
  props: {
    tasks: Array as PropType<Task[]>
  },
  methods: {
    openEditMode(task: Task) {
      console.log('target task:', task)
      this.$router.push('/edit/' + task.id)
    }
  }
})
</script>

<template>
  <ul>
    <li v-for="task in tasks">
      <input type="checkbox" v-model="task.done" />
      <span :class="{ 'task-done': task.done }">
        # {{ task.id }}: {{ task.text }}
      </span>
      <MyButton @click="openEditMode(task)">編集</MyButton>
    </li>
  </ul>
</template>
