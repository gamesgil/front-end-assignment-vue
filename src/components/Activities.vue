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
            <p>{{ showActivities.length }}</p>
            <div class="activities" v-for="(activities, index) in showActivities" v-bind:key="index">
                <ActivityList v-if="activities.length" 
                :isFirst="index===0" :month=getMonth(activities[0]) :activities="activities"
                @showActivity="(data) => showModal(data)">
            </ActivityList>
            </div>
            <div class="row" v-if="isMore" @click="loadMore()">
                <img src="../assets/more.svg" width="16">
                <span class="secondary-dark"><strong>Load more</strong></span>
            </div>
        </template>

        <Modal v-if=selectedActivity @close="selectedActivity = null" :title="selectedActivity.topic_data.name"
            :time="selectedActivity.d_created" :comment="selectedActivity.comment" :score="selectedActivity.score"
            :maxScore="selectedActivity.possible_score" :product="selectedActivity.product" :icon=getIcon(selectedActivity.topic_data.icon_path)>
        </Modal>
    </div>
</template>

<script>

import Tag from '@/components/Tag.vue';
import ActivityList from '@/components/ActivityList.vue';
import Modal from '@/components/Modal.vue';
import Search from '@/components/Search.vue';
import { fetchData } from '../util/parse.util';
import { getMonth } from '../util/date.util';
import {getIconUrl} from '../util/file.util';

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
            selectedActivity: null,
            activities: [],
            showActivities: [],
            curPage: 0,
            pageSize: 10,
            isMore: true
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getIcon(icon) {
            return getIconUrl(icon)
        },
        getMonth(entry) {
            return getMonth(entry.d_created)
        },
        showModal(data) {
            this.isModal = true;
            console.log(data)
            this.selectedActivity = data;
        },
        mergeByMonth() {
            this.showActivities =
                [...this.activities]
                    .reduce((acc, item, idx) => {
                        const month = new Date(parseInt(item.d_created)).getMonth()

                        if (!acc[month]) {
                            acc[month] = [];
                        }

                        acc[month].push(item);

                        return acc
                    }, [])
                    .map(byMonth => !byMonth ? [] : byMonth)
                    

                console.log(this.showActivities)
        },
        async getData() {
            const data = await fetchData("http://localhost:3000/activities/v1", this.curPage, this.pageSize);
            console.log(data.length, this.pageSize)
            if (data.length) {
                this.activities = [...this.activities, ...data];
                
                this.mergeByMonth();

                this.isMore = (data.length === this.pageSize);
            } else {
                this.isMore = false;
            }
        },
        async loadMore() {
            this.curPage++;
            await this.getData();
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

div.activities {
    width: 100%;
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