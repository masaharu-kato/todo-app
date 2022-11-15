<script lang="ts">
import { defineComponent } from 'vue'
import MyButton from '@/components/basics/MyButton.vue'
export default defineComponent({
  components: {
    MyButton,
  },
  emits: ['clear-done-tasks', 'add-new-task'],
  methods: {
    addNewTask() {
      this.$emit('add-new-task', this.input.text)
      this.input.text = ""
    },
  },
  data() {
    return {
      input: {
        text: '',
      },
    }
  }
})
</script>

<template>
  <input type="text" v-model="input.text" />
  <MyButton @click="addNewTask"><img src="@/assets/icon-plus.svg" height="10" />追加</MyButton>
  <MyButton @click="$emit('clear-done-tasks')">完了済みを削除する</MyButton>
</template>
