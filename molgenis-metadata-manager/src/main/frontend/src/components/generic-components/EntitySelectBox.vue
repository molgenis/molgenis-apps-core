<template>
  <div>
    <multiselect :value="value"
                 :options="options"
                 :searchable="true"
                 :close-on-select="true"
                 :allow-empty="true"
                 @input="onChange"
                 label="label"
                 selectLabel=""
                 placeholder="Select an entity"
                 track-by="id"></multiselect>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'entity-select-box',
    data: function () {
      return {
        selectedValue: this.value
      }
    },
    props: {
      value: {
        type: Object,
        required: false
      },
      options: {
        type: Array,
        required: true
      },
      onChange: {
        type: Function,
        required: true
      }
    },
    components: {
      Multiselect
    }
  }
</script>
