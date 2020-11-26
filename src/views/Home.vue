<template>
    <div class="home">
        <div v-if="sportsByGroup">
            <div v-for="(sport, index) in sportsByGroup" :key="index">
                <h2>{{index}}</h2>

                <div v-for="(s, index) in sport" :key="index">
                    <h3>{{s.title}}</h3>
                    <router-link :to="{ name: 'Sport', params: { sport_name: s.key }}">Voir les paris</router-link>
                </div>
                <br>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
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
