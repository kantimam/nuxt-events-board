<template>
  <div>
      <h1>hello</h1>
      <div class="py-8 grid-auto-fill-columns gap-4">
          <event-item v-for="event in events" v-bind:key="event.id" :event="event"/>
      </div>

  </div>
</template>

<script>
import EventItem from './EventItem.vue'
export default {
  components: { EventItem },
    props: {
        events: {
            type: Array,
            default: ()=>[]
        }
    }
}
</script>

<style scoped>
    .grid-auto-fill-columns{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    }
</style>