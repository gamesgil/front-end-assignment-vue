<template>
    <div class="tag" :class="{ active }"><img v-if="active" src="../assets/checkmark.svg" width="16">{{title}}</div>
</template>

<style>
div.tag {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    border: 2px solid rgb(0, 128, 129);
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    color: rgb(0, 128, 129);
}

div.tag.active {
    background-color: rgb(237, 253, 253);
}

img {
    stroke: yellow;
}
</style>

<script>
export default {
    name: 'Tag',
    props: {
        active: Boolean,
        title: String
    },
};
</script>