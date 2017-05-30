<template>
  <div>
    <b-card show-header show-footer>
      <div slot="header" class="">
        <metadata-manager-header></metadata-manager-header>
      </div>

      <metadata-manager-entity-edit-form></metadata-manager-entity-edit-form>

      <div slot="footer">
        Attribute edit stuff
      </div>
    </b-card>
  </div>
</template>

<script>
  import MetadataManagerHeader from './MetadataManagerHeader'
  import MetadataManagerEntityEditForm from './MetadataManagerEntityEditForm'

  import { GET_ENTITY_TYPES, GET_ENTITY_TYPE_BY_ID } from '../store/actions'

  export default {
    name: 'metadata-manager',
    components: {
      MetadataManagerHeader,
      MetadataManagerEntityEditForm
    },
    created: function () {
      this.$store.dispatch(GET_ENTITY_TYPES)
      const entityTypeID = this.$route.params.entityTypeID
      if (entityTypeID !== undefined) {
        this.$store.dispatch(GET_ENTITY_TYPE_BY_ID, entityTypeID)
      }
    }
  }
</script>
