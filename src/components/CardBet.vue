<template>
    <div class="w-2/4 m-auto mb-14 shadow p-6 bg-gray-700 text-white rounded-lg">
        <div class="flex justify-center mb-3">
            <h2>
                {{ odd.teams[1] }}
            </h2>
            <span class="mr-2 ml-2">-</span>
            <h2>
                {{ odd.teams[0] }}
            </h2>
        </div>
        <div class="flex justify-center" v-if="odd.sites_count">
            <ButtonOdd :class="{ active: selectedOdd === odd.sites[0].odds.h2h[1] }"
                       v-on:click="updateBetPanel(odd.sites[0].odds.h2h[1]), this.prediction = odd.teams[1]"
                       :h2h="odd.sites[0].odds.h2h[1].toString()">
            </ButtonOdd>
            <ButtonOdd :class="{ active: selectedOdd === odd.sites[0].odds.h2h[2] }"
                       v-on:click="updateBetPanel(odd.sites[0].odds.h2h[2]), this.prediction = 'Nul'"
                       :h2h="odd.sites[0].odds.h2h[2].toString()" v-if="odd.sites[0].odds.h2h[2]">
            </ButtonOdd>
            <ButtonOdd :class="{ active: selectedOdd === odd.sites[0].odds.h2h[0] }"
                       v-on:click="updateBetPanel(odd.sites[0].odds.h2h[0]), this.prediction = odd.teams[0]"
                       :h2h="odd.sites[0].odds.h2h[0].toString()">
            </ButtonOdd>
        </div>
        <div class="flex justify-center" v-else>
            <p>Aucune côte disponible pour ce match</p>
        </div>
        <div v-if="betOpen">
            <div class="flex p-6">
                <form class="flex-auto justify-center items-center">
                    <div class="flex flex-wrap justify-center items-center mb-5">
                        <button v-on:click="substractToAmount"
                                class="mr-8 flex-none flex items-center justify-center w-9 h-9 rounded-full bg-yellow-400 text-white m"
                                type="button" aria-label="less">
                            -
                        </button>
                        <div class="text-4xl leading-7 font-bold text-yellow-400">${{ amount }}</div>


                        <button v-on:click="addToAmount"
                                class="ml-8 flex-none flex items-center justify-center w-9 h-9 rounded-full bg-yellow-400 text-white"
                                type="button" aria-label="more">
                            +
                        </button>
                    </div>
                    <div class="stext-center text-2xl leading-7 font-bold text-white mb-5"> x {{ selectedOdd }}</div>
                    <div class="flex space-x-3 mb-4 text-sm font-semibold">
                        <div class="flex-auto flex space-x-3">
                            <button :disabled="amount <= 0" class="h-12 w-1/2 flex items-center justify-center rounded-full bg-yellow-400 text-white"
                                    @click="[createBet({selectedOdd, teams, prediction, amount, potentialWin}), betOpen = false, selectedOdd = 0]"
                                    type="button">Bet and win {{ potentialWin }}
                            </button>
                            <button class="h-12 w-1/2 flex items-center justify-center rounded-full bg-white text-yellow-400"
                                    @click="betOpen = false, selectedOdd = 0" type="button">Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import ButtonOdd from "./ButtonOdd";

    export default {
        name: 'CardBet',
        props: {
            odd: Object
        },
        data: () => ({
            bets: [],
            newBet: {},
            betOpen: false,
            amount: 0,
            selectedOdd: null,
            prediction: '',
            potentialWin: 0
        }),
        components: {
            ButtonOdd
        },
        computed: {
            teams() {
                return this.odd.teams
            }
        },
        methods: {
            updateBetPanel: function (multiplier) {
                if (this.selectedOdd == multiplier) {
                    this.betOpen = !this.betOpen
                    this.selectedOdd = 0
                } else {
                    this.betOpen = true
                    this.selectedOdd = multiplier
                    this.potentialWin = (this.amount * this.selectedOdd).toFixed(2)
                }
            },
            addToAmount: function () {
                this.amount += 5
                this.potentialWin = (this.amount * this.selectedOdd).toFixed(2)
            },
            substractToAmount: function () {
                if (this.amount > 0) {
                    this.amount -= 5
                    this.potentialWin = (this.amount * this.selectedOdd).toFixed(2)
                }
            },
            ...mapActions(['createBet'])
        }
    }
</script>

<style scoped>
    .active {
        background-color: white;
        color: rgb(252, 211, 77);
    }

    button:disabled {
        background-color: grey;
        pointer-events: none;
    }
</style>
