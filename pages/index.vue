<template>
  <div class="container mx-auto px-2">
    <event-search/>
    <event-overview/>
  </div>
</template>


<script>
import EventOverview from '../components/EventOverview.vue'
import EventSearch from '../components/EventSearch.vue'
export default {
  components: { EventOverview, EventSearch },
  
}
</script>
