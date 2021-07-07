<template>
    <main class="container mx-auto py-10">
        <event-item :event="event"/>
    </main>
</template>

<script>
import EventItem from '../../components/EventItem.vue';
export default {
  components: { EventItem },
    async asyncData({params, $http, env}) {
        console.log(env)
        const event=await $http.$get(`${env.baseUrl}/events/${params.id}`, );
        return  {event};
    },
}
</script>

<style>

</style>