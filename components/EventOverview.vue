<template>
  <div class="py-10">
    <event-grid :events="events"/> 
    <p v-if="$fetchState.pending">Fetching events...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
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
        /* activated() {
            // Call fetch again if last fetch more than 30 sec ago
            if (this.$fetchState.timestamp <= Date.now() - 30000) {
                this.$fetch()
            }
        }, */
        async fetch(){
            const query=this.$nuxt.context.query;
            const search=new URLSearchParams(query);
            const searchString=search.toString();
            const conditionalSearchString=searchString? `?${searchString}` : ''
            this.events=await this.$nuxt.context.$http.$get(`${this.$nuxt.context.env.baseUrl}/events${conditionalSearchString}`);
        }
    }
</script>
