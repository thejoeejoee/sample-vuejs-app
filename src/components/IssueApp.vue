<template>
    <div>
        <b-container>
            <div class="d-flex justify-content-between align-items-center">
                <h1>
                    {{ title }}
                    <small>({{ filteredIssues.length }})</small>
                </h1>

                <issue-filter
                        :issues="issues"
                        :has-filter="hasFilter"
                        v-model="filteredIssues"
                        class="mt-3"
                ></issue-filter>

                <span>
                <b-btn @click="createIssue({})" variant="success">+</b-btn>
            </span>
            </div>
        </b-container>

        <hr>

        <b-alert v-if="!categories.length" show variant="info">
            No issues. You can
            <b-link @click="createIssue({})">add new issue</b-link>
            .
        </b-alert>
        <b-alert v-if="!categories.length" show variant="warning">
            No issues found.
        </b-alert>

        <b-row>
            <b-col v-for="category in categories" :key="category.id" cols="4">
                <issue-category :category="category">
                    <v-draggable v-model="category.issues" v-bind="issuesDraggableOptions" @change="issueCategoryChange(category, $event)" @add="log">
                        <issue
                                v-for="issue in category.issues"
                                :key="issue.id"
                                :issue="issue"
                                :variant="category.variant"
                        >
                            <template slot="handle">
                                <b-btn v-if="!hasFilter" variant="outline-default" size="sm" class="handle">
                                    <img src="../assets/arrows-handle.svg" alt="Handle">
                                </b-btn>
                            </template>
                        </issue>
                        <div slot="footer" v-if="!category.issues.length" class="draggable-footer"></div>
                    </v-draggable>
                </issue-category>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import {mapActions, mapMutations, mapState} from 'vuex';
    import Issue from './Issue'
    import IssueFilter from './IssueFilter'
    import IssueCategory from './IssueCategory'

    import VDraggable from 'vuedraggable'

    export default {
        name: "IssueApp",
        props: ['title'],
        components: {
            Issue,
            IssueFilter,
            IssueCategory,
            VDraggable,
        },
        data() {
            return {
                filteredIssues: [],
                issuesDraggableOptions: {
                    options: {
                        handle: '.handle',
                        group: 'issues',
                    },
                    move: this.canMove,
                },
                hasFilter: false
            }
        },
        methods: {
            ...mapActions(['createIssue', 'categoryChange']),
            ...mapMutations(['issuesSorted']),
            canMove(e) {
                return !this.hasFilter;
            },
            issueCategoryChange(category, {added, removed}) {
                if (added)
                    this.categoryChange({
                        issue: added.element,
                        category
                    })
            },
            log() {
                // console.log(arguments)
            }
        },
        computed: {
            ...mapState(['issues', 'categories']),
            sortedIssues: {
                get() {
                    return this.filteredIssues;
                },
                set(issues) {
                    // console.log('length', issues.length);
                    // this.issuesSorted(issues);
                    this.$forceUpdate()
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    .handle img {
        width: 1em;
    }
    .draggable-footer {
        height: 2.5em;
    }
</style>