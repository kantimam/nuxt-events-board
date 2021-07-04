<template>
  <div class="py-4 flex flex-wrap gap-4">
    <nuxt-link 
        :to="{query: {}}"
    >
        <category-pill categoryLable="Any"/>
    </nuxt-link>
    <nuxt-link 
        v-for="category in placeholderCategories" 
        :key="category" 
        :to="{query: {category: category}}"
    >
        <category-pill :categoryLable="category"/>
    </nuxt-link>
  </div>
</template>

<script>
import CategoryPill from './CategoryPill.vue'
export default {
  components: { CategoryPill },
    data: function(){
        return {
            placeholderCategories: [
                "badminton", "volleyball", "asdasd", "tgagtfasfa", "tzwztetsfdsf"
            ]
        }
    }
}
</script>

<style>

</style>