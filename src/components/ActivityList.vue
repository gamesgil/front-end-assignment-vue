<template>
    <div>
        <div v-if=!isFirst class="separator"></div>
        <Month title="October"></Month>
        <div class="separator"></div>
        <Activity title="aaa" hasZoom @showActivity="(data) => $emit('showActivity', data)"></Activity>
        <div class="separator"></div>
        <Activity title="aaa"></Activity>
    </div>
</template>


<script>

import Month from '@/components/Month.vue';
import Activity from '@/components/Activity.vue';

export default {
    name: 'ActivityList',
    props: {
        isFirst: Boolean
    },
    components: {Month, Activity}
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