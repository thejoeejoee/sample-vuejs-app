<template>
    <span>
            <b-input-group>
                <b-input
                        v-model="input"
                        @input="onFilter"

                        name="filter"
                        id="filter"
                        type="text"
                        placeholder="Type to search..."
                ></b-input>
                <b-input-group-append v-if="input">
                    <b-btn variant="warning" @click="input = ''">&cross;</b-btn>
                </b-input-group-append>

            </b-input-group>
    </span>
</template>

<script>
    import _ from 'lodash'
    import striptags from 'striptags'

    export default {
        name: "IssueFilter",
        props: {
            issues: {
                type: Array,
            }
        },
        data() {
            return {
                input: ''
            }
        },
        methods: {
            onFilter() {
                const filterCallable = (issue) => {
                    const input = this.input.toLowerCase().trim();
                    return !input || issue.title.toLowerCase().includes(input) ||
                        striptags(issue.content).toLowerCase().includes(input);
                };
                this.$emit(
                    'input',
                    _.filter(
                        this.issues,
                        filterCallable
                    )
                );
            }
        },
        watch: {
            issues() {
                this.onFilter()
            }
        },
        created() {
            this.onFilter();
        }
    }
</script>

<style scoped>

</style>