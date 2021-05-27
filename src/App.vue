<template>
  <Session />
  <img
    alt="Vue logo"
    src="./assets/solid.svg"
  >
  <HelloSolid msg="Solid Vue says hello" />
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import HelloSolid from './components/HelloSolid.vue'
import Session from './components/Session.vue'

@Options({
  components: {
    HelloSolid,
    Session
  },
})
export default class App extends Vue {}
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
