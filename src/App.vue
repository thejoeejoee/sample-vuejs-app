<template>
    <b-container fluid>
        <issue-app title="Issues"></issue-app>
    </b-container>
</template>

<script>
    import {mapMutations, mapState} from 'vuex'
    import fixture from './fixtures/01'
    import IssueApp from './components/IssueApp'

    export default {
        name: "App",
        components: {
            IssueApp,
        },
        computed: mapState(['categories']),
        methods: mapMutations(['setCategories']),
        created() {
            if (!this.categories.length)
                this.setCategories(fixture.categories);
        },
    }
</script>

<style scoped>

</style>