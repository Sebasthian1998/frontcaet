<template>
  <div id="app">
    <router-link to="/">Casa</router-link>|
    <router-link to="/autor">Autor</router-link>|
    <router-link to="/otrapagina">Otra pagina</router-link>
    <hr>
   <!-- <a @click="redireccionar('home')">Casa</a> |
    <a @click="redireccionar('autor')">Autor</a>|
    <a @click="redireccionar('otrapag')">Otra pagina</a> -->

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    redireccionar(direccion){
      this.$router.push({name:direccion})
    }
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
