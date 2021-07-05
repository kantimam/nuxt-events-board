<template>
    <div class="pt-4 pb-1">
        <input 
            class="
                ring-2 
                rounded 
                overflow-hidden 
                ring-purple-400 
                inline-block 
                px-2 
                py-1 
                w-full
            " 
            v-model="inputValue"
            type="text" 
            name="_q"
            placeholder="search for event title or content"
        >
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                functionDelay: null,
                inputValue: ''
            }
        },
        watch: {
            inputValue: function(newValue/* , oldValue */){
                if(this.functionDelay) clearTimeout(this.functionDelay);
                this.functionDelay=setTimeout(()=>{
                    //console.log("query updated");
                    const currentQuery={...this.$route.query};
                    if(newValue!=='') currentQuery._q=newValue;
                    else delete currentQuery._q;
                    this.$router.push({path: '/', query: currentQuery})
                }, 600);
            }
        }
       
    }
</script>

<style>

</style>