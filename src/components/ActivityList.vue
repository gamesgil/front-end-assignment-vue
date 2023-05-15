<template>
    <div>
        <div v-if=!isFirst class="separator"></div>
        <Month :title=month></Month>
        <div v-for="(activity, index) in activities" v-bind:key="index">
            <div v-if="tags.includes(activity.resource_type) && (activity.topic_data.name.includes(filter) || !filter)">
                <div class="separator"></div>
                <Activity hasZoom :activity="activity" :isVisible="!isHidden(index)"
                @showActivity="(data) => $emit('showActivity', data)"
                @changeVisibility="() => changeVisibility(index)"
                >
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
    data() {
        return {
            hiddenList: []
        }
    },
    methods: {
        changeVisibility(idx) {
            const pos = this.hiddenList.indexOf(idx);

            if (pos === -1) {
                this.hiddenList = [...this.hiddenList, idx];
            } else {
                this.hiddenList.splice(pos, 1);
            }
        },
        isHidden(idx) {
            return this.hiddenList.indexOf(idx) > -1;
        }
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