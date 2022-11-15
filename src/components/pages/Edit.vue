<script lang="ts">
import TaskEdit from '@/components/components/TaskEdit.vue'
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    TaskEdit,
  }
})
</script>

<template>
  <p>編集モード</p>
  <TaskEdit />
</template>
