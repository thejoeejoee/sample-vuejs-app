<template>
    <b-card
            :header-bg-variant="category.variant"
            header-text-variant="white"
    >
        <h6 slot="header" class="mb-0">{{ category.title }}</h6>

        <slot></slot>
    </b-card>
</template>

<script>
    export default {
        name: "IssueCategory",
        props: {
            category: Object,
        }
    }
</script>

<style scoped>

</style>