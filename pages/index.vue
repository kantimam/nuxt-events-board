<template>
  <div class="container mx-auto px-2">
    <event-overview/>
  </div>
</template>


<script>
import EventOverview from '../components/EventOverview.vue'
export default {
  components: { EventOverview },
  /* data(){
    return {
      events: []
    }
  },
  watch: {
    '$route.query': '$fetch'
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  async fetch(){
    this.events=await this.$nuxt.context.$http.$get('http://localhost:1337/events');
  } */
}
</script>
