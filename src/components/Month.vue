<template>
    <p>{{ title }}</p>
</template>

<script>
export default {
    name: 'Month',
    props: {
        title: String,
    }
}
</script>

<style scoped>
    p {
        display: block;
        width: 10ch;
        padding: 0.25rem 0.5rem;
        color: rgb(75,79,82);
        background: rgb(252,249,228);
        border: 1px;
        border-radius: 25%;
        font-size: 0.75rem;
        margin: 0;
    }
</style>