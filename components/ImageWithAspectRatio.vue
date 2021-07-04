<template>
    <div 
        class="relative w-full" 
        :style="{paddingBottom: `${ratio * 100}%`}"
    >
        <img :src="imgSrc" class="absolute w-full h-full object-cover">
    </div>
</template>

<script>
export default {
    props: {
        ratio: {
            type: Number,
            default: 0.5625
        },
        imgSrc: String
    }
}
</script>

