<template>
  <div id="app">
     <main>
    <Scene />
    </main>
  </div>
</template>

<script>
import Scene from './components/Scene.vue';

export default {
  name: 'app',
  components: {
    Scene,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
