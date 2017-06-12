<template>
  <div>
    <b-card show-header show-footer>
      <div slot="header">
        <metadata-manager-header></metadata-manager-header>
      </div>

      <alert v-if="alert.message !== null" :onDismiss="onDismiss" :alert="alert"></alert>

      <metadata-manager-entity-edit-form v-if="editorEntityType.attributes !== undefined"></metadata-manager-entity-edit-form>

      <div slot="footer">
        <metadata-manager-attribute-edit-form></metadata-manager-attribute-edit-form>
      </div>
    </b-card>
  </div>
</template>

<script>
  import Alert from './generic-components/Alert'
  import MetadataManagerHeader from './MetadataManagerHeader'
  import MetadataManagerEntityEditForm from './MetadataManagerEntityEditForm'
  import MetadataManagerAttributeEditForm from './MetadataManagerAttributeEditForm'

  import { GET_ENTITY_TYPES, GET_ENTITY_TYPE_BY_ID, GET_PACKAGES } from '../store/actions'
  import { REMOVE_ALERT } from '../store/mutations'
  import { mapGetters } from 'vuex'

  export default {
    name: 'metadata-manager',
    computed: {
      ...mapGetters({
        editorEntityType: 'getEditorEntityType',
        alert: 'getAlert'
      })
    },
    methods: {
      onDismiss: function () {
        this.$store.commit(REMOVE_ALERT)
      }
    },
    components: {
      Alert,
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
