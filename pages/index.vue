<template>
  <EventFeed :events="events"/>
</template>


<script>
export default {
  async asyncData({ $http }) {
    const events=await $http.$get('http://localhost:1337/events');
    return  {events};
  },
}
</script>
