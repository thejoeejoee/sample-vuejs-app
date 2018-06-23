<template>
    <div>
        <h1>Issues</h1>
        <ul v-for="issue in this.$store.state.issues">
            <li><strong>{{ issue.title }}</strong> {{ issue.content }}</li>
        </ul>
    </div>
</template>

<script>
    import issuesFixture from './fixtures/issues'

    export default {
        name: "App",
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