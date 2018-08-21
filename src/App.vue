<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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
.btn-primary {
  border: none;
  font-weight: normal;
  color: #fff;
  background: #42b983;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
}
</style>
