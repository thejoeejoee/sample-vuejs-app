<template>
    <b-container>
        <issue-app title="Issues"></issue-app>
    </b-container>
</template>

<script>
    import {mapMutations, mapState} from 'vuex'
    import issuesFixture from './fixtures/issues'
    import IssueApp from './components/IssueApp'

    export default {
        name: "App",
        components: {
            IssueApp,
        },
        computed: mapState(['issues']),
        methods: mapMutations(['setIssues']),
        created() {
            if (!this.issues.length)
                this.setIssues(issuesFixture.issues)
        },
    }
</script>

<style scoped>

</style>