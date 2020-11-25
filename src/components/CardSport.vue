<template>
    <router-link :to="{ name: 'Sport', params: { sport_name: sport.key }}">
        <div class="w-2/4 m-auto mb-14 shadow p-6 text-left bg-gray-700 text-white rounded-lg hover-scale">
            <h2 class="text-1xl mb-5 ">
                {{ sport.details }}
            </h2>
            <h2 class="text-3xl">
                {{ sport.title }}
            </h2>
        </div>
    </router-link>

</template>

<script>
    export default {
        name: 'CardBet',
        props: {
            sport: Object
        },
    }
</script>

<style>
    .hover-scale:hover{
        transform: scale(1.02);
        transition: transform 300ms ease-in-out;
    }

</style>
