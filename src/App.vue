<template>
  <div id="app">
    <K24Button />
  </div>
</template>

<script>
import K24Button from './components/K24Button/K24Button.vue'

export default {
  name: 'App',
  components: {
    K24Button
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
