<template>
    <div class="container">
        <h1>Timeline</h1>
        <Search :list="filterOptions" @submit="(text) => filter = text"></Search>
        <template>
            <p>Filter by:</p>
            <div class="tags">
                <Tag :active="selectedTags.length===tags.length" title="All Work" @selectTag="selectAll()"></Tag>
                <Tag :active=isTagSelected(title) :title=title v-for="{ title } in tags" v-bind:key="title"
                    @selectTag="(title) => selectTag(title)"></Tag>
            </div>
        </template>

        <template>
            <div class="activities" v-for="(activities, index) in showActivities" v-bind:key="index">
                <ActivityList v-if="activities.length" :isFirst="index === 0" :month=getMonth(activities[0])
                    :activities="activities" :tags="selectedTags" :filter="filter"
                    @showActivity="(data) => showModal(data)" >
                </ActivityList>
            </div>
            <div class="row" v-if="isMore" @click="loadMore()">
                <img src="../assets/more.svg" width="16">
                <span class="secondary-dark"><strong>Load more</strong></span>
            </div>
        </template>

        <Modal v-if=selectedActivity @close="selectedActivity = null" :title="selectedActivity.topic_data.name"
            :time="selectedActivity.d_created" :comment="selectedActivity.comment" :score="selectedActivity.score"
            :maxScore="selectedActivity.possible_score" :product="selectedActivity.product"
            :icon=getIcon(selectedActivity.topic_data.icon_path)>
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
import { getIconUrl } from '../util/file.util';

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
            tags: [
                {
                    title: 'Movie',
                    resourceType: 'movie'
                },
                {
                    title: 'Quiz',
                    resourceType: 'quiz'
                },
                {
                    title: 'Easy Quiz',
                    resourceType: 'easy_quiz'
                },
                {
                    title: 'Challenge',
                    resourceType: 'challenge'
                },
                {
                    title: 'Make a Map',
                    resourceType: 'make_a_map'
                },
                {
                    title: 'Make a Movie',
                    resourceType: 'make_a_movie'
                },
                {
                    title: 'Wordplay',
                    resourceType: 'wordplay'
                },
                {
                    title: 'Related reading',
                    resourceType: 'related_reading'
                },
                {
                    title: 'Draw about it',
                    resourceType: 'draw_about_it'
                }
            ],
            selectedActivity: null,
            activities: [],
            showActivities: [],
            curPage: 0,
            pageSize: 10,
            isMore: true,
            selectedTags: [],
            filter: '',
            filterOptions: []
        }
    },
    mounted() {
        this.getData();
        this.selectAll();
    },
    methods: {
        isTagSelected(title) {
            const resourceType = this.tags.find(tag => tag.title === title).resourceType;
            return this.selectedTags.includes(resourceType)
        },
        selectAll() {
            this.selectedTags = [...this.tags.map(tag => tag.resourceType)];
        },
        selectTag(tagName) {
            const resourceType = this.tags.find(tag => tag.title === tagName).resourceType;
            const idx = this.selectedTags.indexOf(resourceType);

            if (idx === -1) {
                this.selectedTags.push(resourceType);
            } else {
                this.selectedTags.splice(idx, 1);
            }
        },
        getIcon(icon) {
            return getIconUrl(icon)
        },
        getMonth(entry) {
            return getMonth(entry.d_created)
        },
        showModal(data) {
            this.isModal = true;
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

            if (data.length) {
                this.activities = [...this.activities, ...data];

                data.forEach(activity => {
                    if(!this.filterOptions.includes(activity.topic_data.name)) {
                        this.filterOptions.push(activity.topic_data.name)
                    }
                });

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
    width: 75%;
}

div.activities {
    width: 100%;
}

div.tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
}

div.row {
    display: flex;
}
</style>