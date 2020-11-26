<template>
    <div class="bets">
        <div class="w-2/4 m-auto mb-14 shadow p-6 text-left bg-gray-700 text-white rounded-lg" v-for="(bet, index) in bets" :key="index">
            <div class="mb-1">
                <span class="block text-xs mb-2">
                    {{ bet[1][1] }} - {{ bet[1][0] }}
                </span>
                <h2 class="text-3xl text-yellow-400">
                    {{ bet[2]}}
                </h2>
            </div>
            <div class="text-xl mb-4">
                    <span class="">
                        Cote :
                    </span>
                <span>
                        {{ bet[0]}}
                    </span>
            </div>
            <div class="flex justify-between mb-2">
                <div class="text-xl">
                    <span class="">
                        Mise :
                    </span>
                    <span>
                        {{ bet[3]}} $
                    </span>
                </div>
                <div class="text-2xl">
                    <span class="">
                        Potentiel win :
                    </span>
                        <span class="text-yellow-400">
                        {{ bet[4]}} $
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

    export default {
        name: 'Bets',
        data: () => ({
            bets: [],

        }),
        created() {
            let existing = localStorage.getItem('bets');
            let parse = JSON.parse(existing);
            this.bets = parse;
        }
    }
</script>
