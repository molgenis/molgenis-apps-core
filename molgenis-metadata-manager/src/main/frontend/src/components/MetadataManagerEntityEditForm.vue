<template>
  <div class="row">
    <div class="col inner-column">
      <strong>Entity:</strong> {{editorEntityType.id}}<br>
      <strong>Extends:</strong> {{editorEntityType.extends}}<br>
      <strong>Extended by:</strong> {{editorEntityType.extendedBy}}<br>
      <strong>Abstract:</strong> {{editorEntityType.abstract0}}
    </div>
    <div class="col inner-column">
      <strong>Label:</strong> {{editorEntityType.label}}<br>
      <strong>Description:</strong> {{editorEntityType.description}}
    </div>
    <div class="col outer-column">
      <strong>Id attribute:</strong> {{editorEntityType.idAttribute.label}}<br>
      <strong>Label attribute:</strong> {{editorEntityType.labelAttribute.label}}<br>
      <strong>Lookup attributes:</strong>
      <span v-for="(lookupAttribute, index) in editorEntityType.lookupAttributes">
        <span>{{lookupAttribute.label}}</span><span v-if="index+1 < editorEntityType.lookupAttributes.length">, </span>
      </span>
    </div>
    <div class="col">
      <b-button class="entity-save-btn">Save</b-button>
    </div>
  </div>
</template>

<style>
  .entity-save-btn {
    float: right
  }

  .inner-column {
    border-right: solid black thin;
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  import { UPDATE_EDITOR_ENTITY_TYPE } from '../store/mutations'

  export default {
    name: 'metadata-manager-entity-edit-form',
    data: function () {
      return {
        label: '',
        description: '',
        idAttribute: {},
        labelAttribute: {},
        lookupAttributes: []
      }
    },
    methods: {
      saveChanges: function () {
        const updatedEditorEntityType = this.editorEntityType
        updatedEditorEntityType.label = this.label
        updatedEditorEntityType.description = this.description
        updatedEditorEntityType.idAttribute = this.idAttribute
        updatedEditorEntityType.labelAttribute = this.labelAttribute
        updatedEditorEntityType.lookupAttributes = this.lookupAttributes

        this.$store.commit(UPDATE_EDITOR_ENTITY_TYPE, updatedEditorEntityType)
      }
    },
    computed: {
      ...mapGetters([
        'entityTypeID',
        'editorEntityType'
      ])
    }
  }
</script>
