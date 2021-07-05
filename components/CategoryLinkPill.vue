<template>
    <nuxt-link 
        :to="to"
        class="bg-green-400 py-1 px-3 rounded-full ring-2 ring-black"
    >
        {{title}}
    </nuxt-link>
</template>

<script>
export default {
    props: {
        to: Object,
        title: String
    }
    /* TODO: add custom isActive handeler that looks for category == category.id */
}
</script>

<style>
    .nuxt-link-exact-active{
        color: white;
        font-weight: bold;
    }
</style>