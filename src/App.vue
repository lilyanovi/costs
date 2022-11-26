<template>
  <div id="app">
    <nav class="nav_home">
      <router-link to="/">
        <img alt="Vue logo" class="logo" src="./assets/logo.png"/></router-link>
    </nav>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    
    <header class="center">
      <h1>My personal costs</h1>
    </header>

    <router-view/>

   
  </div>
</template>

<script>
export default {
  name: 'App'
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.center {
    padding-left: calc(50% - 570px);
    padding-right: calc(50% - 570px);
}
.logo {
  max-height: 100px;
  padding: 0;
}
.nav_home {
  padding: 0;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
