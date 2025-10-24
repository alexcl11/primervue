<template>
  <div>
    <h1>Elemento estático</h1>
    <MenuComponent/>
    <hr>
    <router-view></router-view>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HolaMundo/> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <MusicaComponent/> -->
  <!-- <CineComponent/> -->
  <!-- <HomeComponent/> -->
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'

// import MusicaComponent from './components/MusicaComponent.vue'
// import HomeComponent from './components/HomeComponent.vue'
// import CineComponent from './components/CineComponent.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import HolaMundo from './components/HolaMundo.vue'


export default {
  name: 'App',
  components: {
    MenuComponent
    // HelloWorld,
    // HolaMundo
    // MusicaComponent
    // HomeComponent,
    // CineComponent,
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
