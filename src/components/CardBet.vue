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
        <div class="flex justify-center">
            <ButtonOdd :h2h="odd.sites[0].odds.h2h[1]">
            </ButtonOdd>
            <ButtonOdd :h2h="odd.sites[0].odds.h2h[2]" v-if="odd.sites[0].odds.h2h[2]">
            </ButtonOdd>
            <ButtonOdd :h2h="odd.sites[0].odds.h2h[0]">
            </ButtonOdd>
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
        components: {
            ButtonOdd
        },
    }
</script>

<style>
</style>
