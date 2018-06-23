<template>
    <b-card :title="issue.title" :sub-title="issue.id | formatId">
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
        methods: {
            ...mapActions(['updateIssue']),
            contentEdited() {
                this.updateIssue(_.extend(
                    // merge to empty object, overwrite content
                    {},
                    this.issue,
                    {
                        content: this.$refs.content.innerHTML,
                    }
                ));
            }
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