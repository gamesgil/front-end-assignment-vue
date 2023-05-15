<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Activities />
  </div>
</template>

<script>
// @ is an alias to /src
import Activities from '@/components/Activities.vue'

export default {
  name: 'home',
  components: {
    Activities
  }
}
</script>
