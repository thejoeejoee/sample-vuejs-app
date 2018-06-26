<template>
    <b-card class="mb-4">

        <template slot="header">
            <span class="row no-gutters justify-content-between">
                <span class="col-8 issue-name" @dblclick="editingTitle = true">

                    <input
                            v-show="editingTitle"
                            v-model="title"
                            @keyup.enter="titleEdited"
                            @change="titleEdited"
                            ref="title"
                            class="form-control form-control-sm"
                    >
                    <template v-if="!editingTitle">
                        {{ issue.title }}
                    </template>

                </span>
                <span class="col-4 text-right">
                    <span
                            @mouseenter="mouseOver = true"
                            @mouseleave="mouseOver = false"
                    >
                        <b-btn
                                v-if="mouseOver"
                                @click="removeIssue(issue)"
                                variant="danger"
                                size="sm"
                        >&cross;</b-btn>
                        <b-btn
                                v-else
                                size="sm"
                                variant="outline-primary"
                        >{{ issue.id | formatId }}</b-btn>
                    </span>
                    <slot name="handle"></slot>
                </span>
            </span>
        </template>

        <p ref="content" contenteditable="true" @focusout="contentEdited" v-html="issue.content"></p>
    </b-card>
</template>

<script>
    import _ from 'lodash'
    import {mapActions} from 'vuex'

    export default {
        name: "Issue",
        props: {
            issue: {
                type: Object,
                required: true,
            }
        },
        data() {
            return {
                mouseOver: false,
                editingTitle: false,
                title: this.issue.title,
            }
        },
        methods: {
            ...mapActions(['updateIssue', 'removeIssue']),
            contentEdited() {
                this.updateIssue(_.extend(
                    // merge to empty object, overwrite content
                    {},
                    this.issue,
                    {
                        content: this.$refs.content.innerHTML,
                    }
                ));
            },
            titleEdited() {
                this.updateIssue(_.extend(
                    // merge to empty object, overwrite title
                    {},
                    this.issue,
                    {
                        title: this.title,
                    }
                ));
                this.editingTitle = false;
            },
        },
        filters: {
            formatId(id) {
                return `#${id}`;
            }
        },
        watch: {
            editingTitle(val) {
                val && this.$nextTick(() => {
                    this.$refs.title.focus()
                })
            }
        }
    }
</script>

<style scoped>
    .issue-name {
        width: 100%;
    }
</style>