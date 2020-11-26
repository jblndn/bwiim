<template>
    <div class="bg-yellow-400 px-6 py-3 mr-2 rounded inline-block cursor-pointer hover:bg-yellow-300">
        <span class="block">{{ h2h }}</span>
    </div>
</template>

<script>
    export default {
        name: 'ButtonOdd',
        props: {
            h2h: String
        },
    }
</script>

<style>
</style>
