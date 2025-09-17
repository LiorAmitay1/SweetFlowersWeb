<template>
  <NavMainPage/>
    <div id="app">
      <router-view />
    </div>
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
  background-color: #f1e9ed; 
  
  min-height: 100vh;
  font-family: 'Alef', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 55px;
}
</style>
