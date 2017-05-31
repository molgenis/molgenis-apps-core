<template>
  <div class="row">
    <!-- Column containing  Entity ID, Extends, Extended by, Abstract-->
    <div class="col-md-3 col-sm-1 inner-column">
      <strong>Entity:</strong> {{editorEntityType.id}}<br>
      <strong>Extends:</strong> <span v-if="editorEntityType.parent">{{editorEntityType.parent.label}}</span><span
      v-else>N/A</span><br>
      <strong>Extended by:</strong> N/A<br>
      <strong>Abstract:</strong> <span v-if="editorEntityType.abstract0">Yes</span><span v-else>No</span>
    </div>

    <!-- Column containing: Label, Description and Package -->
    <div class="col-md-4 col-sm-5 inner-column">
      <div class="form-group row">
        <label for="editory-entity-type-label" class="col-4 col-form-label">Label</label>
        <div class="col">
          <input v-model="editorEntityType.label" class="form-control" type="text" id="editory-entity-type-label">
        </div>
      </div>

      <div class="form-group row">
        <label for="editory-entity-type-description" class="col-4 col-form-label">Description</label>
        <div class="col">
          <input v-model="editorEntityType.description" class="form-control" type="text"
                 id="editory-entity-type-description">
        </div>
      </div>

      <div class="form-group row">
        <label class="col-4 col-form-label">Package</label>
        <div class="col">
          <entity-select-box id="package-select" :value="editorEntityType.package0" :options="packages"
                             :onChange="updatePackage"></entity-select-box>
        </div>
      </div>
    </div>

    <!-- Column containing ID attribute, Label attribute and LookupAttributes -->
    <div class="col-md-4 col-sm-5 outer-column">
      <div class="form-group row">
        <label class="col-4 col-form-label">ID attribute</label>
        <div class="col">
          <entity-select-box id="id-attribute-select" :value="editorEntityType.idAttribute" :options="editorEntityType.attributes"
                             :onChange="updateIdAttribute"></entity-select-box>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-4 col-form-label">Label attribute</label>
        <div class="col">
          <entity-select-box id="label-attribute-select" :value="editorEntityType.labelAttribute" :options="editorEntityType.attributes"
                             :onChange="updateLabelAttribute"></entity-select-box>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-4 col-form-label">Lookup attributes</label>
        <div class="col">
          <entity-select-box id="lookup-attribute-select" :value="editorEntityType.lookupAttributes" :options="editorEntityType.attributes"
                             :onChange="updateLookupAttributes" multiple></entity-select-box>
        </div>
      </div>
    </div>

    <!-- Column containing Save button -->
    <div class="col-md-1 col-sm-1">
      <b-button @click="save" variant="success" class="entity-save-btn">Save</b-button>
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
  import { UPDATE_EDITOR_ENTITY_TYPE } from '../store/actions'

  import EntitySelectBox from './generic-components/EntitySelectBox'

  export default {
    name: 'metadata-manager-entity-edit-form',
    methods: {
      save: function () {
        this.$store.dispatch(UPDATE_EDITOR_ENTITY_TYPE, this.editorEntityType)
      },
      updatePackage: function (selected) {
        this.editorEntityType.package0 = selected
      },
      updateIdAttribute: function (selected) {
        this.editorEntityType.idAttribute = selected
      },
      updateLabelAttribute: function (selected) {
        this.editorEntityType.labelAttribute = selected
      },
      updateLookupAttributes: function (selected) {
        this.editorEntityType.lookupAttributes = selected
      }
    },
    computed: {
      packages: [{label: 'test'}],
      ...mapGetters({
        packages: 'getPackages',
        editorEntityType: 'getEditorEntityType'
      })
    },
    components: {
      EntitySelectBox
    }
  }
</script>
