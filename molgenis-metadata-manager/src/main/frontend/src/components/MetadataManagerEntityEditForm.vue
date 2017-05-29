<template>
  <div>
    Entity: {{entityTypeID}}
    <entity-type-form :entityTypeID="entityTypeID"></entity-type-form>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import EntityTypeForm from './generic-components/EntityTypeForm'

  export default {
    name: 'metadata-manager-entity-edit-form',
    computed: {
      ...mapGetters([
        'entityTypeID'
      ])
    },
    components: {
      EntityTypeForm
    }
  }
</script>
