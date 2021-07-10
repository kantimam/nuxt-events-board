<template>
  <div class="border-2 border-black m-2 rounded relative" :class="customClasses">
    <label v-if="label" :for="id">{{label}}</label>
    <input
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :id="id"
      class="w-full py-0.5 px-1"
    >
  </div>
</template>

<script>
export default {
  // can you force styles on slots without wrapping them
  props: {
    value: String,
    type: {type: String, default: 'text'},
    id: {type: String},
    label: {type: String, required: false},
    customClasses: {type: String, required: false, default: ""}
  }
}
</script>

<style>

</style>
