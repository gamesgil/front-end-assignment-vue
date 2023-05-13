<template>
    <div class="activity" :class="{ 'has-zoom': hasZoom }" @click="$emit('showActivity', data)">
        <div class="container">
            <div>
                <img class="icon" src="../assets/topics/adalovelace.png" width="32">
                <div class="jr">Jr.</div>
            </div>
            <div class="info">
                <p>title</p>
                <p>subtitle</p>
            </div>
            <span>Score: <strong>3/10</strong></span>
            <div class="view-work">
                <img src="../assets/eye.svg" width="16">
                <span><strong>View work</strong></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Activity',
    props: {
        title: String,
        hasZoom: Boolean
    },
    data() {
        return {
            data: {
                title: 'Gil',
                date: '12345678',
                comment: 'ok',
                score: 1,
                maxScore: 10
            }
        }
    },
    methods: {
        log(a) {
            console.log(a)
        }
        }
}
</script>

<style scoped>
div.activity {
    border: 1px solid lightgray;
    width: 100%;
}

div.has-zoom {
    cursor: pointer;
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

div.container img.icon {
    display: block;
    background: rgb(246, 183, 13);
    border-radius: 50%;
    padding: 0.25rem;
}

div.view-work>img {
    margin-right: 0.5rem;
}

div.jr {
    position: relative;
    width: 15px;
    height: 15px;
    left: 20px;
    top: -10px;
    border-radius: 50%;
    background-color: rgb(246, 183, 13);
    ;
    font-size: 0.75rem;
}
</style>