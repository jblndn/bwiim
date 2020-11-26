<template>
  <div class="container m-auto">
    <div id="nav">
      <router-link to="/" class="mr-3">Sports</router-link>
      |
      <router-link to="/bets" class="ml-3">Bets <span v-if="$store.state.currentBets.length">{{ $store.state.currentBets.length }}</span></router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    created() {
      this.$store.dispatch('getCurrentBets')
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a span {
  background: #2c3e50;
  color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: 8px;
}
</style>
