<template>
  <div class="container">
    <div id="app">
      <b-alert show dismissible>A vue bootstrap alert component</b-alert>
      <router-view></router-view>
      <mg-i18n></mg-i18n>
    </div>
  </div>
</template>

<script>
import MgI18n from './components/MgI18n'

export default {
  name: 'molgenis-app',
  components: {
    MgI18n
  }
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
