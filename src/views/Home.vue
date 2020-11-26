<template>
    <div class="home">
        <div v-if="sportsByGroup">
            <div v-for="(sport, index) in sportsByGroup" :key="index">
                <h2>{{index}}</h2>

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
                return this.$store.getters.sportsByGroup
            }
        },
        created() {
            if (Object.keys(this.sportsByGroup).length === 0 && this.sportsByGroup.constructor === Object) {
                this.$store.dispatch({
                    type: 'getSports'
                })
            }
        }
    }
</script>
