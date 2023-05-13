<template>
    <div class="modal">
        <button class="close">
            <img src="../assets/close.svg" alt="">
        </button>
        <img src="../assets/topics/adalovelace.png" width="64">
        <h2>Title</h2>
        <p>Date</p>
        <p class="left comment"><strong>Great job!</strong></p>
        <p class="left score">Score: <strong>3/10</strong></p>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {}
}
</script>

<style>
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
