<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h1>
                {{ title }}
                <small>({{ issueCount }})</small>
            </h1>
            <span>
                <b-btn @click="createIssue({})" variant="success">+</b-btn>
            </span>
        </div>

        <b-alert v-if="!issueCount" show variant="info">
            No issues. You can <b-link @click="createIssue({})">add new issue</b-link>.
        </b-alert>
        <b-row>
            <b-col v-for="issue in issues" :key="issue.id" cols="4">
                <issue :issue="issue"></issue>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import Issue from './Issue'

    export default {
        name: "IssueApp",
        props: ['title'],
        components: {
            Issue,
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