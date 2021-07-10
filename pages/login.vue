<template>
  <div class="m-auto w-96 max-w-full py-4 px-2 bg-white shadow-lg rounded-lg overflow-hidden" >
    Sign In
    <form class="form-with-spacing" @submit.prevent="submitForm">
      <text-field v-model="userName">

      </text-field>
      <text-field type="password" v-model="password">

      </text-field>
      <input type="submit" value="Sign In">
    </form>
  </div>

</template>

<script>
export default {
  data: function(){
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    submitForm: function(event){
      console.log("form submitted");
      console.log(event)
    }
  }
}
</script>

<style scoped>
  .form-with-spacing>*{
    margin-top: 16px;
  }
</style>
