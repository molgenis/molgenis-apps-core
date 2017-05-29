<style>
  td {
    white-space: nowrap;
  }
</style>

<script>
  import getStateForPackage from '../getStateForPackage.js'
  import getStateForSearch from '../getStateForSearch.js'
  import state from '../exampledata.js'

  export default {
    data: function () {
      return state
    },
    methods: {
      selectPackage: function (packageId) {
        getStateForPackage(this, packageId)
      },
      openDataset: function (datasetId) {
        window.open('/menu/main/dataexplorer?entity=' + datasetId)
      },
      updateSearch: function () {
        if (this.search !== undefined) getStateForSearch(this, this.search)
      },
      clearSearch: function () {
        this.search = null
        getStateForPackage(this, null)
      }
    },
    // initialize to root (which is 'null' package)
    mounted: function () {
      getStateForPackage(this, null)
    }
  }
</script>

<template>
  <div class="container">
    <!-- search box; will match all packages/entities by name -->
    <div class="input-group">
      <input v-model="search" type="text" class="form-control" placeholder="Search packages and data ...">
      <span @click="updateSearch()" class="input-group-addon">search</span>
      <span @click="clearSearch()" class="input-group-addon">clear</span>
    </div>

    <!-- search based breadcrumb -->
    <ol v-if="search != null" class="breadcrumb">
      <li><a @click="selectPackage(null);">My MOLGENIS</a></li>
      <li><a><b>Showing result matching "{{search}}""</b></a></li>
    </ol>
    <!-- path based breadcrumb -->
    <ol v-else class="breadcrumb">
      <li><a @click="selectPackage(null);">My MOLGENIS</a></li>
      <li v-for="package in path"><a @click="selectPackage(package.id)">{{package.label}}</a></li>
      <li><a><b>{{currentLabel}}</b></a></li>
    </ol>

    <!-- status message -->
    <div v-if="message != null" class="alert alert-info" role="alert">
      <button @click="message=null" type="button" class="close"><span aria-hidden="true">&times;</span></button> {{message}}
    </div>

    <!-- error message -->
    <div v-if="error != null" class="alert alert-danger" role="alert">
      <button @click="error=null" type="button" class="close"><span aria-hidden="true">&times;</span></button> {{error}}
    </div>

    <!--<button class="btn btn-primary" type="submit">New</button>-->


    <!-- table showing the contents of curren package, no sorting now -->
    <!-- one click selects, right-click shows context menu, doubleclick goes into folder/view entity-->
    <table class="table">
      <thead>
      <tr>
        <th>name</th>
        <th class="hidden-xs">description</th>
      </tr>
      </thead>
      <tbody>
      <!-- render packages-->
      <tr v-for="package in packages">
        <td @dblclick="selectPackage(package.id)" @click="selected = package.id" :class="{active: package.id == selected}"><span class="glyphicon glyphicon-folder-open" aria-hidden="true"></span>&nbsp; {{package.label}}
        </td>
        <td @dblclick="selectPackage(package.id)" @click="selected = package.id" :class="{active: package.id == selected}" class="hidden-xs">
          <i>{{package.description}}</i>
        </td>
      </tr>
      <!-- render entities -->
      <tr v-for="entity in entities">
        <td @dblclick="openDataset(entity.id)" @click="selected = entity.id" :class="{active: entity.id == selected}">
          <span class="glyphicon glyphicon-list" aria-hidden="true"></span>&nbsp; {{entity.label}}
        </td>
        <td @dblclick="openDataset(entity.id)" @click="selected = entity.id" :class="{active: entity.id == selected}" class="hidden-xs">
          <i>{{entity.description}}</i>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
