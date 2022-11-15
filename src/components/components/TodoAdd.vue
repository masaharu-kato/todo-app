<script lang="ts">
import { defineComponent } from 'vue'
import MyButton from '@/components/basics/MyButton.vue'
export default defineComponent({
  components: {
    MyButton,
  },
  emits: ['delete-done', 'add-todo'],
  methods: {
    addTodo() {
      this.$emit('add-todo', this.input.text)
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
  <MyButton @click="addTodo"><img src="@/assets/icon-plus.svg" height="10" />追加</MyButton>
  <MyButton @click="$emit('delete-done')">完了済みを削除する</MyButton>
</template>
