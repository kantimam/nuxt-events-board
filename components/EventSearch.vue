<template>
  <div class="py-4 flex flex-wrap gap-4">
    <nuxt-link 
        :to="{query: {}}"
    >
        <category-pill categoryLable="Any"/>
    </nuxt-link>
    <nuxt-link 
        v-for="category in categories" 
        :key="category.id" 
        :to="{query: {category: category.id}}"
    >
        <category-pill :categoryLable="category.title"/>
    </nuxt-link>
  </div>
</template>

<script>
import CategoryPill from './CategoryPill.vue'
export default {
  components: { CategoryPill },
    data: function(){
        return {
            categories: null
        }
    },
    async fetch(){
        this.categories=await this.$nuxt.context.$http.$get('http://localhost:1337/categories');
    }
}
</script>

<style>

</style>