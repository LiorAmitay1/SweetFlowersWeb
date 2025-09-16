<template>
  <NavMainPage/>
  <router-view />
</template>

<script>
import NavMainPage from './components/NavMainPage.vue'
export default {
  name: 'App',
  components: {
    NavMainPage
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alef&display=swap');

#app {
  font-family: 'Alef', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
