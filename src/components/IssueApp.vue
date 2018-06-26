<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h1>
                {{ title }}
                <small>({{ filteredIssues.length }})</small>
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

        <b-alert v-if="!issues.length" show variant="info">
            No issues. You can
            <b-link @click="createIssue({})">add new issue</b-link>
            .
        </b-alert>
        <b-alert v-if="!filteredIssues.length" show variant="warning">
            No issues found.
        </b-alert>

        <v-draggable class="row" v-model="sortedIssues" :move="canMove" :options="{handle:'.handle'}">
            <b-col v-for="issue in sortedIssues" :key="issue.id" cols="4">

                <issue :issue="issue">
                    <template slot="handle">
                        <b-btn v-if="!isFiltered" variant="outline-default" size="sm" class="handle">
                            <img src="../assets/arrows-handle.svg" alt="Handle">
                        </b-btn>
                    </template>
                </issue>

            </b-col>
        </v-draggable>
    </div>
</template>

<script>
    import {mapActions, mapState, mapMutations} from 'vuex';
    import Issue from './Issue'
    import IssueFilter from './IssueFilter'

    import VDraggable from 'vuedraggable'

    export default {
        name: "IssueApp",
        props: ['title'],
        components: {
            Issue,
            IssueFilter,
            VDraggable,
        },
        data() {
            return {
                filteredIssues: []
            }
        },
        methods: {
            ...mapActions(['createIssue']),
            ...mapMutations(['issuesSorted']),
            canMove(e) {
                return !this.isFiltered;
            }
        },
        computed: {
            ...mapState(['issues']),
            sortedIssues: {
                get() {
                    return this.filteredIssues;
                },
                set(issues) {
                    this.issuesSorted(issues);
                }
            },
            isFiltered() {
                return this.filteredIssues.length !== this.issues.length;
            }
        },
    }
</script>

<style scoped lang="scss">
    .handle img {
        width: 1em;
    }
</style>