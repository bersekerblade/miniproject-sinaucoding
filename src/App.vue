<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dashboard">Dashoboard</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> -->
  </nav>
  <router-view/>

  <!-- footer -->
  <div class="footer">
    <p style="margin:10px;">Marketplace Sinau Coding <img src="./assets/logo-footer-small.png" style="height: 15px;"></p>
  </div>
</template>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: aquamarine;
  color: blue;
  text-align: center;
}
</style>
