<template>
    <div>
        <h1>
            {{ title }}
            <small>({{ issueCount }})</small>
        </h1>
        <b-row>
            <b-col v-for="issue in issues" :key="issue.id" cols="4">
                <issue :issue="issue"></issue>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Issue from './Issue'

    export default {
        name: "IssueApp",
        props: ['title'],
        components: {
            Issue,
        },
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