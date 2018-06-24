import _ from 'lodash'

export default {
    getIssueById: (state) => (id) => {
        return _.find(state.issues, {id})
    },
    getIssueIndexById: (state) => (id) => {
        return _.findIndex(state.issues, {id})
    },

    generateId: (state) => {
        return (_.max(_.map(state.issues, 'id')) || 0) + 1;
    }
}