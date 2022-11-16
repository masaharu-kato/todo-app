<script setup lang="ts">
import TaskEdit from '@/components/components/TaskEdit.vue'
import { useTasksStore } from '@/stores/task'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const tasksStore = useTasksStore()

const task_id = Number(route.params.id)
const task = tasksStore.getTask(task_id)
const editTask = (text: string) => {
  const new_task = { ...task }
  new_task.text = text
  tasksStore.editTask(new_task)
  router.push('/')
}

</script>

<template>
  <p>編集モード</p>
  <TaskEdit :task="task" @edit-task="editTask" />
</template>
