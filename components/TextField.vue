<template>
  <div class="border-2 border-black rounded relative" :class="customClasses">
      <label v-if="label" :for="id">{{label}}</label>

      <div class="absolute h-full flex items-center px-1" v-if="!!$slots.startIcon">
        <slot name="startIcon"/>
      </div>

      <input
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value)"
        :id="id"
        class="w-full py-0.5 px-1"
        :class="{'pl-4': !!$slots.startIcon}"
      >

      <div v-if="!!$slots.endIcon">
        <slot name="endIcon"/>
      </div>

  </div>
</template>

<script>
export default {
  // can you force styles on slots without wrapping them
  props: {
    value: String,
    type: {type: String, default: 'text'},
    id: {type: String, default: function(){return`text_field_${this._uid}`}},
    label: {type: String, required: false},
    customClasses: {type: String, required: false, default: ""}
  },
  created: function(){
    console.log(this._uid)
  }
}
</script>

<style>

</style>
