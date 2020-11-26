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
        data: () => ({
            odds: []
        }),
        created() {
            axios.get(`https://api.the-odds-api.com/v3/odds/?sport=${this.$route.params.sport_name}&region=eu&mkt=h2h&apiKey=${process.env.VUE_APP_API_KEY}`).then(response => {
                this.odds = response.data.data;
            }).catch(error => {
                console.log('Error status', error.response.status)
                console.log(error.response.data)
            })
        }
    }
</script>

<style scoped>
</style>
