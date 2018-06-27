import _ from 'lodash'

export default {
    updateIssue({state, commit, getters}, issue) {
        const stored = getters.getIssueById(issue.id);

        if (stored === undefined)
            return;

        const index = getters.getIssueIndexById(issue.id);
        if (issue.content !== stored.content) {
            commit(
                'updateIssue', {
                    index,
                    issue: {content: issue.content}
                }
            );
        }

        if (issue.title !== stored.title) {
            commit(
                'updateIssue', {
                    index,
                    issue: {title: issue.title}
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
                    category_id: 1,
                },
                _.pick(issue, ['title', 'content', 'category_id']),
            )
        )
    },

    removeIssue({commit, getters}, issue) {
        if (issue.content && !confirm(`Are you sure to delete issue #${issue.id}: '${issue.title}'?`))
            return;

        const index = getters.getIssueIndexById(issue.id);

        commit('removeIssue', index);
    },

    categoryChange({commit, getters}, {issue, category}) {
        const actual = getters.getIssueById(issue.id);

        const index = getters.getIssueIndexById(issue.id);

        commit(
            'updateIssue', {
                index,
                issue: {category_id: category.id}
            }
        )
    }
}