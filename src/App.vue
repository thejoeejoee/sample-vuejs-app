<template>
    <b-container>
        <issue-app title="Issues"></issue-app>
    </b-container>
</template>

<script>
    import issuesFixture from './fixtures/issues'
    import IssueApp from './components/IssueApp'

    export default {
        name: "App",
        components:{
            IssueApp,
        },
        created() {
            this.$store.commit(
                'setIssues',
                issuesFixture.issues
            )
        },
    }
</script>

<style scoped>

</style>