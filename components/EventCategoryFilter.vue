<template>
    <div class="py-4 flex flex-wrap gap-4">
        <category-link-pill 
            :to="{query: {}}"
            title="Any"
        />
        <category-link-pill 
            v-for="category in categories" 
            :key="category.id"
            :to="{query: {category: category.id}}"
            :title="category.title"
        />
        </div>
</template>

<script>
import CategoryLinkPill from './CategoryLinkPill.vue'
export default {
  components: { CategoryLinkPill },
    data: function(){
        return {
            categories: null
        }
    },
    activated() {
        // Call fetch again if last fetch more than 120 sec ago
        if (this.$fetchState.timestamp <= Date.now() - 120000) {
            this.$fetch()
        }
    },
    async fetch(){
        this.categories=await this.$nuxt.context.$http.$get('http://localhost:1337/categories');
    }
}
</script>

<style>

</style>