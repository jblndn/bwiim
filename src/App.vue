<template>
    <div class="wrapper">
        <CardBet v-for="bet in bets" :key="bet.home_team" :bet="bet">

        </CardBet>
    </div>
</template>

<script>
    import CardBet from "./components/CardBet";
    import axios from 'axios';

    export default {
        name: 'App',
        components: {
            CardBet
        },
        data: () => ({
            bets: [],
        }),
        created() {
            const api_key = '54945b67cea1e322588346abbf53d0bd'

            axios.get('https://api.the-odds-api.com/v3/odds/?sport=soccer_france_ligue_one&region=eu&mkt=h2h&apiKey='+ api_key).then(response => {

                this.bets = response.data.data;
            })
                .catch(error => {
                    console.log('Error status', error.response.status)
                    console.log(error.response.data)
                })
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
