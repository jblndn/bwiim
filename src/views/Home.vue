<template>
    <div class="home">
        <div v-if="sportsByGroup">
            <div v-for="(sport, index) in sportsByGroup" :key="index">
                <h2 class="text-2xl mb-8 font-bold">
                    {{index}}
                </h2>

                <CardSport v-for="(s, index) in sport" :key="index" :sport="s">
                </CardSport>
                <br>
                <br>
            </div>
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
            sportsByGroup() {
                console.log(this.$store.getters.sportsByGroup)
                return this.$store.getters.sportsByGroup
            }
        },
        created() {
            this.$store.dispatch({
                type: 'getSports'
            })
        }
    }
</script>
