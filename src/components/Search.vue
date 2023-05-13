<template>
    <div class="input">
        <label for="activity"></label>
        <input type="text" name="activity" placeholder="Search Timeline" @keydown="isTyping=true" />
        <button type="submit" @click="isTyping=false">Search</button>
        <ul v-if=isTyping>
            <li>one</li>
            <li>two</li>
            <li>two</li>
            <li>two</li>
            <li>two</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Search',
    props: {
    },
    methods: {
        alert(x) {
            console.log('xxx')
        }
    },
    data() {
        return {
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