<template>
  <div class="home">
    <div v-if="sports && sports.length">
      <CardSport v-for="(sport, index) in sports" :key="index" :sport="sport">
      </CardSport>
    </div>

  </div>
</template>

<script>
  import CardSport from "../components/CardSport";

export default {
  name: 'Home',
  components: {
    CardSport
  },
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
