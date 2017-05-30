<template>
  <div class="row">
    <div class="col inner-column">
      <strong>Entity:</strong> {{editorEntityType.id}}<br>

      <strong>Extends:</strong> <span v-if="editorEntityType.parent">{{editorEntityType.parent.label}}</span><span
      v-else>N/A</span><br>

      <strong>Extended by:</strong> N/A<br>

      <strong>Abstract:</strong> <span v-if="editorEntityType.abstract0">Yes</span><span v-else>No</span>
    </div>
    <div class="col inner-column">
      <strong>Label:</strong> {{editorEntityType.label}}<br>
      <strong>Package:</strong> <span v-if="editorEntityType.package0">{{editorEntityType.package0.label}}</span><span
      v-else>N/A</span><br>
      <strong>Description:</strong> {{editorEntityType.description}}
    </div>
    <div class="col outer-column">
      <strong>Id attribute:</strong> <span
      v-if="editorEntityType.idAttribute">{{editorEntityType.idAttribute.label}}</span><span v-else>N/A</span><br>
      <strong>Label attribute:</strong> <span
      v-if="editorEntityType.labelAttribute">{{editorEntityType.labelAttribute.label}}</span><span v-else>N/A</span><br>
      <strong>Lookup attributes:</strong>
      <span v-if="editorEntityType.lookupAttributes && editorEntityType.lookupAttributes.length > 0">
        <span v-for="(lookupAttribute, index) in editorEntityType.lookupAttributes">
          <span>{{lookupAttribute.label}}</span><span
          v-if="index+1 < editorEntityType.lookupAttributes.length">, </span>
        </span>
      </span><span v-else>N/A</span><br>
    </div>
    <div class="col">
      <b-button @click="persistChanges" variant="success" class="entity-save-btn" disabled>Save</b-button>
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
      persistChanges: function () {
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
      ...mapGetters({
        editorEntityType: 'getEditorEntityType'
      })
    }
  }
</script>
