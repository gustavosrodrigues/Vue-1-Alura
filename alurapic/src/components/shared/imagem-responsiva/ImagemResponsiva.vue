<template>
    <img v-bind:src="url" v-bind:alt="alt">
</template>

<script>
    export default {
        props: ['url', 'alt']
    }
</script>

<style scoped>

    img {
        max-width: 100%;    
    }
</style>
