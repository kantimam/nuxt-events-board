<template>
  <article class="bg-white shadow-lg rounded-lg overflow-hidden">
    <!-- <nuxt-img 
      v-if="event.primary_image" 
      
      class="w-full h-48 object-cover"
    /> -->
    <image-with-aspect-ratio :imgSrc="`http://localhost:1337${event.primary_image.url}`"/>
    <div class="p-4">
      <NuxtLink :to="{name: 'events-id', params: {id: event.id}}">
        <h1 class="text-xl font-bold two-line-min-h">{{event.title}}</h1>
      </NuxtLink>
      <p class="pt-6">
        {{event.description.substring(0, 200)}}
      </p>
    </div>
    
  </article>
</template>

<script>
import ImageWithAspectRatio from './ImageWithAspectRatio.vue'
export default {
  components: { ImageWithAspectRatio },
    props: {event: Object}
}
</script>

<style scoped>
    .two-line-min-h{
      min-height: 66px;
    }
</style>