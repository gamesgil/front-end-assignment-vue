<template>
    <div class="activity" :class="{ 'has-zoom': hasZoom }">
        <button @click="$emit('changeVisibility')">
            <img class="view" src="../assets/eye.svg" width="16">
            <p>{{ isVisible }}</p>
        </button>
        <div class="container" :class="{ hidden: !isVisible }">
            <div>
                <img class="icon" :class="{ orange: activity.product === 'bpjr', turquoise: activity.product !== 'bpjr' }"
                    :src=getIcon(activity.topic_data.icon_path) width="32">
                <div class="jr" v-if="activity.product === 'bpjr'">Jr.</div>
            </div>
            <div class="info">
                <p><strong>{{ activity.topic_data.name }}</strong></p>
                <p>{{ getFormattedDateTime(activity.d_created) }}</p>
            </div>
            <span v-if="activity.score">Score: <strong>{{ activity.score }}/{{ activity.possible_score }}</strong></span>
            <div class="view-work" v-if="isZoom()" @click="$emit('showActivity', activity)">
                <img src="../assets/eye.svg" width="16">
                <span><strong>View work</strong></span>
            </div>
        </div>
    </div>
</template>

<script>
import { getFormattedDateTime } from '../util/date.util';
import { getIconUrl } from '../util/file.util';
import { isZoom } from '../util/parse.util';

export default {
    name: 'Activity',
    props: {
        hasZoom: Boolean,
        activity: Object,
        isVisible: Boolean
    },
    methods: {
        getIcon(icon) {
            return getIconUrl(icon)
        },
        isZoom() {
            return isZoom(this.activity.resource_type)
        },
        getFormattedDateTime(time) {
            return getFormattedDateTime(time);
        }
    }
}
</script>

<style scoped>
div.activity {
    border: 1px solid lightgray;
    width: 100%;
}

div.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 0.5rem;
}

div.container>*:nth-child(2) {
    margin-right: auto;
}

p {
    margin-top: 0;
    margin-bottom: 0;
    text-align: left;
}

div.view-work {
    cursor: pointer;

}

div.view-work>img {
    margin-right: 0.5rem;
}

div.hidden {
    visibility: hidden;
}

button {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
}
</style>