<script lang="ts">
import { defineComponent, PropType } from 'vue'
import MyButton from '@/components/basics/MyButton.vue'
import { Task } from '@/stores/task'
export default defineComponent({
  components: {
    MyButton,
  },
  props: {
    task: { type: Object as PropType<Task>, required: true }
  },
  data() {
    return {
      input: {
        text: this.task.text,
      },
    }
  },
  emits: ['edit-task'],
  methods: {
    editTask() {
      this.$emit('edit-task', this.input.text)
      this.input.text = ""
    },
  },
})
</script>

<template>
  <input type="text" v-model="input.text" />
  <MyButton @click="editTask">編集</MyButton>
</template>
