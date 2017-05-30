<template>
  <div>
    <div class="row">
      <div class="col-4">
        <h2>Metadata manager</h2>
      </div>
      <div class="col-8">
        <entity-select-box :value="entityTypeID" :options="entityTypes" :onChange="onChange"></entity-select-box>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import EntitySelectBox from './generic-components/EntitySelectBox'
  import { GET_ENTITY_TYPES, GET_ENTITY_TYPE_BY_ID } from '../store/actions'

  export default {
    name: 'metadata-manager-header',
    computed: {
      ...mapGetters([
        'entityTypeID',
        'entityTypes'
      ])
    },
    methods: {
      onChange: function (selectedEntity) {
        // If id is defined, we have an object from selection
        // If id is undefined, we were sent here on page load
        if (selectedEntity.id !== undefined) {
          // Push will 'reload' the page, triggering the else, and dispatching action
          this.$router.push({name: 'metadata-manager-with-id', params: {entityTypeID: selectedEntity.id}})
        } else {
          this.$store.dispatch(GET_ENTITY_TYPE_BY_ID, selectedEntity)
        }
      }
    },
    components: {
      EntitySelectBox
    },
    created: function () {
      this.$store.dispatch(GET_ENTITY_TYPES)
    }
  }
</script>
