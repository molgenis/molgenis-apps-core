<template>
  <div>
    <div class="row">
      <div class="col-4">
        <h2>Metadata manager</h2>
      </div>
      <div class="col-2">
        <entity-select-box :value="selectedEntityType" :options="entityTypes" :onChange="onChange"></entity-select-box>
      </div>
      <div class="col-4">
        <b-button @click="createNewEntity" variant="primary">New</b-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import EntitySelectBox from './generic-components/EntitySelectBox'
  import { GET_ENTITY_TYPE_BY_ID } from '../store/actions'

  export default {
    name: 'metadata-manager-header',
    computed: {
      ...mapGetters({
        selectedEntityType: 'getSelectedEntityType',
        entityTypes: 'getEntityTypes'
      })
    },
    methods: {
      onChange: function (selectedEntity) {
        this.$router.push({name: 'metadata-manager-with-id', params: {entityTypeID: selectedEntity.id}})
        this.$store.dispatch(GET_ENTITY_TYPE_BY_ID, selectedEntity.id)
      },
      createNewEntity: function () {
        alert('Not yet implemented :)')
      }
    },
    components: {
      EntitySelectBox
    }
  }
</script>
