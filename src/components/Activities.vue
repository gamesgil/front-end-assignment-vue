<template>
    <div class="container">
        <h1>Timeline</h1>
        <div class="input">
            <label for="activity"></label>
            <input type="text" name="activity" placeholder="Search Timeline" />
            <button type="submit">Search</button>
        </div>

        <p>Filter by:</p>
        <div class="filters">
            <Tag :active=active :title=title v-for="{ title, active } in tags" v-bind:key="title"></Tag>
        </div>
    </div>
</template>

<script>

import Tag from '@/components/Tag.vue';

export default {
    name: 'Activities',
    props: {
        msg: String,
    },
    components: {
        Tag
    },
    data() {
        return {
            tags: [{
                title: 'one',
                active: false
            },
            {
                title: 'two',
                active: true
            }]
        }
    }
};
</script>

<style>
div.container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

div.filters {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

div.input {
    width: 181px;
    border: 1px solid darkgray;
}

input {
    height: 30px;
    border: none;
}

button[type="submit"] {
    text-indent: -999px;
    overflow: hidden;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    border: 1px solid transparent;
    border-radius: inherit;
    background: darkgreen url(../assets/search.svg) no-repeat center;
    cursor: pointer;
    opacity: 0.7;
}

button[type="submit"]:hover {
    opacity: 1;
}
</style>