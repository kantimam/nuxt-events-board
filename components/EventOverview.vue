<template>
  <div class="py-10">
    <p v-if="$fetchState.pending">Fetching events...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <event-grid v-else :events="events"/> 
  </div>
</template>


<script>
    import EventGrid from './EventGrid.vue';
    export default {
        component: {EventGrid},
        data(){
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
            console.log(this.events)
            //this.events=await fetch(`http://localhost:1337/events`).then(res=>res.json());
        }
    }
</script>
