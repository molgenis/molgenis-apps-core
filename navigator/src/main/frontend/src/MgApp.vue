<template>
  <div class="container">
    <div id="app">
      <h2>Hello world</h2>
      <b-alert show dismissible>A vue bootstrap alert component</b-alert>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'molgenis-app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
