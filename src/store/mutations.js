
import _ from 'lodash'
export default {
    setIssues(state, issues) {
        state.issues = issues;
    },

    updateContent(state, {index, content}) {
        state.issues[index].content = content;
    },

    addIssue(state, issue) {
        state.issues.push(issue);
    },

    removeIssue(state, index) {
        state.issues.splice(index, 1);
    },

    issuesSorted(state, issues) {
        state.issues = issues;
    }
}