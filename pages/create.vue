<template>
  <form @submit.prevent="console.log('form submitted')">
    <text-field v-model="value">
      <p slot="startIcon">x</p>
    </text-field>
  </form>
</template>

<script>
export default {
  data: function(){
    return {
      value: 'asdasd'
    }
  },
  watch: {
    value: ()=>{
      console.log("changed")
    }
  }
}
</script>

<style>

</style>
