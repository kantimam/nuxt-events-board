<template>
    <div >
        <input 
            class="ring-2 rounded overflow-hidden ring-purple-400 inline-block px-2 py-1" 
            @change="handleInputChange" 
            type="text" 
            name="query"
        >
    </div>
</template>

<script>

export default {
    /* data: function(){
        return {
            inputVal: ''
        }
    }, */
    methods: {
        handleInputChange: function(event){
            console.log(event.target.value)
        }
    }
}
</script>

<style>

</style>