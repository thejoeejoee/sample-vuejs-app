import _ from 'lodash'

export default {
    updateIssue({state, commit, getters}, issue) {
        const stored = getters.getIssueById(issue.id);

        if (stored === undefined)
            return;

        const index = getters.getIssueIndexById(issue.id);
        if (issue.content !== stored.content) {
            commit(
                'updateContent', {
                    index,
                    content: issue.content
                }
            );
        }

        if (issue.title !== stored.title) {
            commit(
                'updateTitle', {
                    index,
                    title: issue.title
                }
            )
        }
    },

    createIssue({state, commit, getters}, issue) {
        commit(
            'addIssue',
            _.merge(
                {},
                {
                    id: getters.generateId,
                    content: '',
                    title: '',
                },
                _.pick(issue, ['title', 'content']),
            )
        )
    },

    removeIssue({commit, getters}, issue) {
        if (issue.content && !confirm(`Are you sure to delete issue #${issue.id}: '${issue.title}'?`))
            return;

        const index = getters.getIssueIndexById(issue.id);

        commit('removeIssue', index);
    },
}