<template>
    <div class="container">

        <h1>Timeline</h1>
        <Search></Search>
        <template>
            <p>Filter by:</p>
            <div class="filters">
                <Tag :active=active :title=title v-for="{ title, active } in tags" v-bind:key="title"></Tag>
            </div>
        </template>

        <template>
            <div>
                <ActivityList isFirst @showActivity="(data) => showModal(data)"></ActivityList>
                <ActivityList></ActivityList>
                <ActivityList></ActivityList>
            </div>
            <div class="row">
                <img src="../assets/more.svg" width="16">
                <span><strong>Load more</strong></span>
            </div>
        </template>

        <Modal v-if=selectedActivity @close="selectedActivity = null" :title="selectedActivity.title"
            :data="selectedActivity.date" :comment="selectedActivity.comment" :score="selectedActivity.score"
            :maxScore="selectedActivity.maxScore"></Modal>
    </div>
</template>

<script>

import Tag from '@/components/Tag.vue';
import ActivityList from '@/components/ActivityList.vue';
import Modal from '@/components/Modal.vue';
import Search from '@/components/Search.vue';

export default {
    name: 'Activities',
    props: {
        msg: String,
    },
    components: {
        Search,
        Tag,
        ActivityList,
        Modal
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
            }],
            selectedActivity: null
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        showModal(data) {
            this.isModal = true;
            console.log(data)
            this.selectedActivity = data;
        },
        async getData() {
            const response = await fetch("http://localhost:3000/activities/v1");
            console.log(await response.json());
        }
    }
};
</script>

<style>
div.container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 50%;
}

div.filters {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

div.row {
    display: flex;
}
</style>