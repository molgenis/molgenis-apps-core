<template>
  <div class="row">
    <!-- Column containing  -->
    <div class="col-md-2 col-sm-1 inner-column">
      <strong>Entity:</strong> {{editorEntityType.id}}<br>
      <strong>Extends:</strong> <span v-if="editorEntityType.parent">{{editorEntityType.parent.label}}</span><span
      v-else>N/A</span><br>
      <strong>Extended by:</strong> N/A<br>
      <strong>Abstract:</strong> <span v-if="editorEntityType.abstract0">Yes</span><span v-else>No</span>
    </div>
    <!-- Column containing: Label, Description and Package -->
    <div class="col-md-4 col-sm-5 inner-column">
      <div class="form-group row">
        <label for="editory-entity-type-label" class="col-3 col-form-label">Label</label>
        <div class="col">
          <input v-model="editorEntityType.label" class="form-control" type="text" id="editory-entity-type-label">
        </div>
      </div>

      <div class="form-group row">
        <label for="editory-entity-type-description" class="col-3 col-form-label">Description</label>
        <div class="col">
          <input v-model="editorEntityType.description" class="form-control" type="text" id="editory-entity-type-description">
        </div>
      </div>

      <div class="form-group row">
        <label for="editory-entity-type-package" class="col-3 col-form-label">Package</label>
        <div class="col">
          <span v-if="editorEntityType.package0">
            <select class="form-control" id="editory-entity-type-package">
              <template v-for="package in packages" >
                <option selected v-if="package.id === editorEntityType.package0.id">{{package.label}}</option>
                <option v-else>{{package.label}}</option>
              </template>
            </select>
          </span><span v-else>N/A</span>
        </div>
      </div>
    </div>

    <div class="col-md-4 col-sm-5 outer-column">
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
    <div class="col-md-2 col-sm-1">
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
    methods: {
      persistChanges: function () {
        this.$store.commit(UPDATE_EDITOR_ENTITY_TYPE, this.editorEntityType)
      }
    },
    computed: {
      packages: [{label: 'test'}],
      ...mapGetters({
        editorEntityType: 'getEditorEntityType'
      })
    }
  }
</script>
