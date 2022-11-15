<script lang="ts">
import { defineComponent } from 'vue'
import MyButton from '@/components/basics/MyButton.vue'
export default defineComponent({
  components: {
    MyButton,
  },
  emits: ['edit-task'],
  methods: {
    editTask() {
      this.$emit('edit-task', this.input.text)
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
  <MyButton @click="editTask">編集</MyButton>
</template>
