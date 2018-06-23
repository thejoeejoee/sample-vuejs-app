<template>
    <div>
        <h1>
            {{ title }}
            <small>({{ issueCount }})</small>
        </h1>
        <b-row>
            <b-col v-for="issue in issues" :key="issue.id" cols="4">
                <b-card :title="issue.title" :sub-title="issue.id | formatId">
                    <p>
                        {{ issue.content }}
                    </p>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "IssueApp",
        props: ['title'],
        filters: {
            formatId(id) {
                return `#${id}`;
            }
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