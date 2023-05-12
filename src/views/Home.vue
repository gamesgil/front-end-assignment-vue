<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Activities msg="x" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Activities from '@/components/Activities.vue'

export default {
  name: 'home',
  components: {
    Activities
  }
}
</script>
