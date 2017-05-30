<template>
  <div>
    <div class="row">
      <div class="col-4">
        <h2>Metadata manager</h2>
      </div>
      <div class="col-4">
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
        let id
        if (selectedEntity.id !== undefined) {
          // If id is defined, we have an object from selection
          id = selectedEntity.id
          this.$router.push({name: 'metadata-manager-with-id', params: {entityTypeID: id}})
          this.$store.dispatch(GET_ENTITY_TYPE_BY_ID, id)
        } else {
          // If id is undefined, we were sent here on page load
          id = selectedEntity
          this.$store.dispatch(GET_ENTITY_TYPE_BY_ID, id)
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
