<template>
  <div class="home">
    <div v-if="sports && sports.length">
      <div v-for="(sport, index) in sports" :key="index">
        {{sport}}
        <router-link :to="{ name: 'Sport', params: { sport_name: sport.key }}">Voir les paris</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    sports() {
      return this.$store.state.sports
    }
  },
  created() {
    this.$store.dispatch({
      type: 'getSports'
    })
  }
}
</script>
