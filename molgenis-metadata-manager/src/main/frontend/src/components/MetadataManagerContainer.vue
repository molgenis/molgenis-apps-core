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

  export default {
    name: 'metadata-manager',
    components: {
      MetadataManagerHeader,
      MetadataManagerEntityEditForm
    }
  }
</script>
