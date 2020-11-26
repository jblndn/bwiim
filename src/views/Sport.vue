<template>
    <div>
        <h1 class="text-3xl font-bold mb-14 mt-10" v-if="odds && odds.length">
            {{ odds[0].sport_nice }}
        </h1>
        <div v-if="odds && odds.length">
            <CardBet v-for="(odd, index) in odds" :key="index" :odd="odd">
            </CardBet>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import CardBet from "../components/CardBet";

    export default {
        name: "Sport",
        components: {
            CardBet
        },
        computed: {
            odds() {
                return this.$store.state.sportsBets[this.$route.params.sport_name]
            }
        },
        created() {
            if (!this.$store.state.sportsBets[this.$route.params.sport_name]) {
                axios.get(`https://api.the-odds-api.com/v3/odds/?sport=${this.$route.params.sport_name}&region=eu&mkt=h2h&apiKey=${process.env.VUE_APP_API_KEY}`).then(response => {
                    this.$store.dispatch('setBets', {
                        bets: response.data.data,
                        leagueId: this.$route.params.sport_name,
                    })
                }).catch(error => {
                    console.error('Error status', error.response.status, error.response.data)
                })
            }
        }
    }
</script>

<style scoped>
</style>
