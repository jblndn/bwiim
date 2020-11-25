<template>
    <div>
        <div>
            <h2>
                {{ bet.teams[1] }}
            </h2>
            <h2>
                {{ bet.teams[0] }}
            </h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardBet',
        props: {
            bet: Object
        },
    }
</script>

<style>
</style>
