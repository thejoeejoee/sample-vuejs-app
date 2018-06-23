<template>
    <b-container>
        <h1>Issues</h1>
        <b-row>
            <b-col v-for="issue in this.$store.state.issues" :key="issue.id" cols="4">
                <b-card :title="issue.title" :sub-title="'#' + issue.id">
                    <p>
                        {{ issue.content }}
                    </p>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
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