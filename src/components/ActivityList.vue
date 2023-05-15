<template>
    <div>
        <p>{{ filter }}</p>
        <div v-if=!isFirst class="separator"></div>
        <Month :title=month></Month>
        <div v-for="(activity, index) in activities" v-bind:key="index">
            <div v-if="tags.includes(activity.resource_type) && (activity.topic_data.name.includes(filter) || !filter)">
                <div class="separator"></div>
                <Activity hasZoom :activity="activity" @showActivity="(data) => $emit('showActivity', data)">
                </Activity>
            </div>
        </div>
    </div>
</template>


<script>

import Month from '@/components/Month.vue';
import Activity from '@/components/Activity.vue';

export default {
    name: 'ActivityList',
    props: {
        isFirst: Boolean,
        month: String,
        activities: Array,
        tags: Array,
        filter: String
    },
    components: { Month, Activity },
    methods: {

    }
}

</script>


<style>
div.separator {
    border-left: 2px solid lightgray;
    height: 10px;
    left: 30px;
    position: relative;
}
</style>