<template>
    <div class="modal" >
        <button class="close" @click="$emit('close')">
            <img src="../assets/close.svg" alt="">
        </button>
        <div>
            <img class="icon" :src="icon" width="64" :class="{orange: product==='bpjr', turquoise: product!=='bpjr'}">
            <div class="jr" v-if="product==='bpjr'">Jr.</div>
        </div>
        
        <h2>{{ title }}</h2>
        <p>{{ getFormattedDateTime(time) }}</p>
        <p class="left comment"><strong>{{ comment }}</strong></p>
        <p class="left score" v-if="score">Score: <strong>{{score}}/{{maxScore}}</strong></p>
    </div>
</template>

<script>
import {getFormattedDateTime} from '../util/date.util';

export default {
    name: 'Modal',
    props: {
        title: String,
        time: String,
        comment: String,
        score: String,
        maxScore: String,
        product: String,
        icon: String
    },
    methods: {
        getFormattedDateTime(time) {
            return getFormattedDateTime(time);
        }
    }
}
</script>

<style scoped>
.modal {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 640px;
    height: 320px;
    background-color: white;
    border: 5px solid darkgray;
    border-radius: 10px;
}

button.close {
    border: none;
    background: white;
    cursor: pointer;
}

button>img {
    position: fixed;
    right: 1rem;
    opacity: 0.5;
}

img {
    margin: 0 auto;
}

p {
    margin: 0;
}

p.left {
    text-align: left;
}

p.comment {
    font-size: 1.5rem;
}

p.score {
    margin-top: auto;
    color: var(--secondaryDark);
}
</style>
