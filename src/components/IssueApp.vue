<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h1>
                {{ title }}
                <small>({{ issueCount }})</small>
            </h1>
            <issue-filter
                    :issues="issues"
                    v-model="filteredIssues"
                    class="mt-3"
            ></issue-filter>
            <span>
                <b-btn @click="createIssue({})" variant="success">+</b-btn>
            </span>
        </div>
        <hr>

        <b-alert v-if="!issueCount" show variant="info">
            No issues. You can
            <b-link @click="createIssue({})">add new issue</b-link>
            .
        </b-alert>
        <b-alert v-if="!filteredIssues.length" show variant="warning">
            No issues found.
        </b-alert>
        <b-row>
            <b-col v-for="issue in filteredIssues" :key="issue.id" cols="4">
                <issue :issue="issue"></issue>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import Issue from './Issue'
    import IssueFilter from './IssueFilter'

    export default {
        name: "IssueApp",
        props: ['title'],
        components: {
            Issue,
            IssueFilter,
        },
        data() {
            return {
                filteredIssues: []
            }
        },
        methods: mapActions(['createIssue']),
        computed: {
            ...mapState(['issues']),
            issueCount() {
                return this.issues.length;
            }
        },
    }
</script>

<style scoped>

</style>