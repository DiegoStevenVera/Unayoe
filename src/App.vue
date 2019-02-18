<template>
  <div id="app">
    <Toolbar></Toolbar>
    <router-view inset/>
    <Footer style="position:absolute;z-index:-1"></Footer>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Toolbar,
    Footer
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
