<template>
  <li>
    <span v-bind:class="{ 'selected-attribute-node': attribute.selected }" @click="onAttributeSelect(attribute)"><i v-bind:class="['fa', attribute.type === 'COMPOUND' ? 'fa-folder-o' : 'fa-columns']"></i> {{attribute.label}}</span>
    <ul v-if="attribute.type === 'COMPOUND'">
      <attribute-tree-node v-for="child in attribute.children" :attribute="child" :onAttributeSelect="onAttributeSelect"></attribute-tree-node>
    </ul>
  </li>
</template>

<style scoped>
  li {
    list-style-type: none;
  }
  .selected-attribute-node {
    background-color: #31b0d5;
  }
</style>

<script>
  export default {
    name: 'attribute-tree-node',
    props: {
      attribute: {
        type: Object,
        required: true
      },
      onAttributeSelect: {
        type: Function,
        required: false
      }
    }
  }
</script>
