<template>
    <div id="app">
        <headPart></headPart>
        <router-view/>
        <footPart></footPart>
    </div>
</template>

<script>
    import headPart from "./components/hdft/headPart"
    import footPart from './components/hdft/footPart'

    export default {
        components: {headPart:headPart,footPart:footPart},
        name: 'App'
    }
</script>

<style>

</style>
