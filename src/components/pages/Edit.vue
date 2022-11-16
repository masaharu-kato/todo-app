<script lang="ts">
import TaskEdit from '@/components/components/TaskEdit.vue'
import { defineComponent } from 'vue';
import { useTasksStore } from '@/stores/task'
import { mapStores } from 'pinia';

export default defineComponent({
  components: {
    TaskEdit,
  },
  data() {
    const store = useTasksStore()
    const task_id = Number(this.$route.params.id)
    return {
      task: store.getTask(task_id)
    }
  },
  computed: {
    ...mapStores(useTasksStore),
  },
  methods: {
    editTask(text: string) {
      const new_task = { ...this.task }
      new_task.text = text
      this.tasksStore.editTask(new_task)
      this.$router.push('/')
    },
  },
})
</script>

<template>
  <p>編集モード</p>
  <TaskEdit :task="task" @edit-task="editTask" />
</template>
