<template>
  <div>
    <b-card show-header show-footer>
      <div slot="header" class="">
        <metadata-manager-header></metadata-manager-header>
      </div>
      <metadata-manager-entity-edit-form v-if="editorEntityType.attributes !== undefined"></metadata-manager-entity-edit-form>
      <div slot="footer">
        <metadata-manager-attribute-edit-form></metadata-manager-attribute-edit-form>
      </div>
    </b-card>
  </div>
</template>

<script>
  import MetadataManagerHeader from './MetadataManagerHeader'
  import MetadataManagerEntityEditForm from './MetadataManagerEntityEditForm'
  import MetadataManagerAttributeEditForm from './MetadataManagerAttributeEditForm'

  import { GET_ENTITY_TYPES, GET_ENTITY_TYPE_BY_ID, GET_PACKAGES } from '../store/actions'
  import { mapGetters } from 'vuex'

  export default {
    name: 'metadata-manager',
    computed: {
      ...mapGetters({
        editorEntityType: 'getEditorEntityType'
      })
    },
    components: {
      MetadataManagerHeader,
      MetadataManagerEntityEditForm,
      MetadataManagerAttributeEditForm
    },
    created: function () {
      // Retrieve entities for dropdown
      this.$store.dispatch(GET_ENTITY_TYPES)

      // Retrieve packages for package select
      this.$store.dispatch(GET_PACKAGES)

      // Retrieve editorEntityType for selected entityTypeID
      const entityTypeID = this.$route.params.entityTypeID
      if (entityTypeID !== undefined) {
        this.$store.dispatch(GET_ENTITY_TYPE_BY_ID, entityTypeID)
      }
    }
  }
</script>
