<template>
    <div>
        <div v-if="odds && odds.length">
            <div v-for="(odd, index) in odds" :key="index">
                {{odd}}
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Sport",
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
