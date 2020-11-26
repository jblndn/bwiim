<template>
    <div class="bets">
        <div class="w-2/4 m-auto mb-14 shadow p-6 text-left bg-gray-700 text-white rounded-lg" v-for="(bet, index) in bets" :key="index">
            <div class="mb-1">
                <span class="block text-xs mb-2">
                    {{ bet.teams[1] }} - {{ bet.teams[0] }}
                </span>
                <h2 class="text-3xl text-yellow-400">
                    {{ bet.prediction}}
                </h2>
            </div>
            <div class="text-xl mb-4">
                    <span class="">
                        Cote :
                    </span>
                <span>
                        {{ bet.selectedOdd}}
                    </span>
            </div>
            <div class="flex justify-between mb-2">
                <div class="text-xl">
                    <span class="">
                        Mise :
                    </span>
                    <span>
                        {{ bet.amount}} $
                    </span>
                </div>
                <div class="text-2xl">
                    <span class="">
                        Potentiel win :
                    </span>
                        <span class="text-yellow-400">
                        {{ bet.potentialWin}} $
                    </span>
                </div>
            </div>
        </div>
        <div class="text-5xl mt-7" v-if="!this.bets">
            Aucun paris effectués
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Bets',
        computed: {
            ...mapState({bets: state => state.currentBets})
        }
    }
</script>
