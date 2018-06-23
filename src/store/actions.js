export default {
    updateIssue({state, commit, getters}, issue) {
        const stored = getters.getIssueById(issue.id);

        if (stored === undefined)
            return;

        const index = getters.getIssueIndexById(issue.id);
        console.log(issue.content, stored.content);
        if (issue.content !== stored.content)
            commit(
                'updateContent', {
                    index,
                    content: issue.content
                }
            )


    }
}