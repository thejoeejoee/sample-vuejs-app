<template>
    <b-card class="mb-4">

        <template slot="header">
            <span
                    class="d-flex justify-content-between"
            >
                <span>{{ issue.title }}</span>
                <span>
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
        },
        filters: {
            formatId(id) {
                return `#${id}`;
            }
        },
    }
</script>

<style scoped>

</style>