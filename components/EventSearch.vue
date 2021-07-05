<template>
    <div class="py-4">
        <event-searchbar/>
        <event-category-filter/>
    </div>
</template>

<script>
import EventCategoryFilter from './EventCategoryFilter.vue'
import EventSearchbar from './EventSearchbar.vue'
export default {
  components: {  EventCategoryFilter, EventSearchbar }
}
</script>

<style>

</style>