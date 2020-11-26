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
            <ButtonOdd v-on:click="updateBetPanel(odd.sites[0].odds.h2h[1])" :h2h="odd.sites[0].odds.h2h[1].toString()">
            </ButtonOdd>
            <ButtonOdd v-on:click="updateBetPanel(odd.sites[0].odds.h2h[2])" :h2h="odd.sites[0].odds.h2h[2].toString()" v-if="odd.sites[0].odds.h2h[2]">
            </ButtonOdd>
            <ButtonOdd v-on:click="updateBetPanel(odd.sites[0].odds.h2h[0])" :h2h="odd.sites[0].odds.h2h[0].toString()">
            </ButtonOdd>
        </div>
        <div class="flex justify-center" v-else>
            <p>Aucune côte disponible pour ce match</p>
        </div>
        <div v-if="betOpen">
            <div class="flex p-6">
                <form class="flex-auto justify-center items-center">
                    <div class="flex flex-wrap justify-center items-center mb-5">
                        <button v-on:click="substractToAmount" class="mr-8 flex-none flex items-center justify-center w-9 h-9 rounded-full bg-yellow-400 text-white m" type="button" aria-label="less">
                            <svg class="svg-icon" fill="currentColor" width="20" height="20">
                                <path fill="none" d="M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z M13.388,9.624H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h6.775c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z"></path>
                            </svg>
                        </button>
                        <div class="text-4xl leading-7 font-bold text-yellow-400">${{ amount }}</div>

                        
                        <button v-on:click="addToAmount" class="ml-8 flex-none flex items-center justify-center w-9 h-9 rounded-full bg-yellow-400 text-white" type="button" aria-label="more">
                            <svg class="svg-icon" fill="currentColor" width="20" height="20">
                                <path fill="none" d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="stext-center text-2xl leading-7 font-bold text-white mb-5"> x {{ selectedOdd }}</div>
                    <div class="flex space-x-3 mb-4 text-sm font-semibold">
                    <div class="flex-auto flex space-x-3">
                        <button class="h-12 w-1/2 flex items-center justify-center rounded-full bg-yellow-400 text-white" type="submit">Bet and win {{ potentialWin }}</button>
                        <button class="h-12 w-1/2 flex items-center justify-center rounded-full bg-white text-yellow-400" type="button">Cancel</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import ButtonOdd from "./ButtonOdd";

    export default {
        name: 'CardBet',
        props: {
            odd: Object
        },
        data: () => ({
            betOpen: false,
            amount: 40,
            selectedOdd: null,
            potentialWin: 40
            // odd: null
        }),
        components: {
            ButtonOdd
        },
        mounted() {
            console.log(this.odd)
        },
        methods: {
            updateBetPanel: function (multiplier) {
                if(this.selectedOdd == multiplier) {
                    this.betOpen = !this.betOpen
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
                this.amount -= 5
                this.potentialWin = (this.amount * this.selectedOdd).toFixed(2)
            },
        }
    }
</script>

<style>
</style>
