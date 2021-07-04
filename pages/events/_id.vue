<template>
    <main class="container mx-auto py-10">
        <event-item :event="event"/>
    </main>
</template>

<script>
import EventItem from '../../components/EventItem.vue';
export default {
  components: { EventItem },
    async asyncData({params, $http}) {
        const event=await $http.$get(`http://localhost:1337/events/${params.id}`);
        return  {event};
    },
}
</script>

<style>

</style>