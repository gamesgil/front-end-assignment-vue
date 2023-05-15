<template>
    <div class="input">
        <label for="activity"></label>
        <input v-model="text" type="text" name="activity" placeholder="Search Timeline" @focus="isTyping = true" />
        <button type="submit" @click="submit()">Search</button>
        <ul v-if=isTyping>
            <li v-for="item in list" @click="text=item" v-bind:key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Search',
    props: {
        list: Array
    },
    methods: {
        submit() {
            this.isTyping=false;
            this.$emit('submit', this.text);
            console.log(this.text)
        }
    },
    data() {
        return {
            text: '',
            isTyping: false
        }
    }
}
</script>

<style>
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

ul {
    list-style-type: none;
    padding: 0;
    height: 4rem;
    overflow-y: scroll;
}

li {
    display: block;
    margin: 0 10px;
    text-align: left;
}
</style>