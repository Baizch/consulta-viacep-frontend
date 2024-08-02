<script setup lang="ts">
import Home from './pages/Home.vue'
</script>

<template>
  <div id="app">
    <Home />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 20px;
  background-color: #F7F3E9;
  overflow-x: hidden;
}
</style>
