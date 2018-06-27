import Vue from 'vue'
import _ from 'lodash'

export default {
    updateIssue(state, {index, issue}) {
        // see https://vuejs.org/v2/guide/list.html#Array-Change-Detection
        Vue.set(state.issues, index, _.merge(
            {},
            state.issues[index],
            issue,
        ))
    },

    addIssue(state, issue) {
        state.issues.push(issue);
    },

    removeIssue(state, index) {
        state.issues.splice(index, 1);
    },

    issuesSorted(state, issues) {
        state.issues = issues;
    },


    setCategories(state, categories) {
        state.categories = categories;
    },
}