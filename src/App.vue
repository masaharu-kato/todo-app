<script lang="ts">
import { defineComponent } from 'vue'
import Home from '@/components/pages/Home.vue'
export default defineComponent({
  components: { Home },
})
</script>

<template>
  <router-link to="/">Home</router-link> ・
  <h1>My ToDo App</h1>
  <router-view />
</template>

<style>

</style>
