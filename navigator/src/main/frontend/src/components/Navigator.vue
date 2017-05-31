<template>
  <div class="container">

    <!-- Put this in a separate component -->
    <div v-if="error != undefined" class="alert alert-danger" role="alert">
      <button @click="error=null" type="button" class="close"><span aria-hidden="true">&times;</span></button> {{error}}
    </div>

    <!-- Put this in a separate component -->
    <ol v-if="query != undefined" class="breadcrumb">
      <li><i class="fa fa-home" aria-hidden="true" @click="selectPackage(null);"></i></li>
      <li><a><b>Showing result matching "{{query}}"</b></a></li>
    </ol>

    <ol v-else class="breadcrumb">
      <li><i class="fa fa-home" aria-hidden="true" @click="selectPackage(null);"></i></li>
      <li v-for="package in path"><a @click="selectPackage(package.id)">{{package.label}}</a></li>
      <li><a><b>{{currentLabel}}</b></a></li>
    </ol>

    <!-- Put this in a separate component -->
    <div class="row" style="margin: 2rem 0rem">
      <div class="col input-group">
        <input v-model="query" v-on:keyup="submitQuery()" type="text" class="form-control" placeholder="Search packages and data ...">
        <span class="input-group-btn">
          <button @click="submitQuery()"  class="btn btn-secondary" :disabled="!query" type="button">Search</button>
        </span>
        <span class="input-group-btn">
          <button @click="clearQuery()" class="btn btn-secondary" :disabled="!query" type="button">Clear</button>
        </span>
      </div>
    </div>

    <div class="pull-left">Selected package:<span>{{selected}}</span></div>

    <!-- Main table element -->
    <b-table bordered :items="items" :fields="fields" :filter="filter" class="text-left">
      <template slot="label" scope="item" >
        <span v-if="item.item.type === 'entity'">
            <button
              type="button"
              class="btn btn-sm btn-block btn-secondary"
              style="text-align: left">
              <i class="fa fa-list" aria-hidden="true" @click="openDataset(item.item.id)"> {{item.item.label}}</i>
            </button>
          </span>
        <span v-else>
          <button
            type="button"
            class="btn btn-sm btn-block"
            v-bind:class="[item.item.id === selected ? 'btn-primary' : 'btn-secondary']"
            @click="selected = item.item.id"
            style="text-align: left">
            <i class="fa fa-folder-open-o" aria-hidden="true" > {{item.item.label}}</i>
          </button>
        </span>
      </template>
    </b-table>

    <!--&lt;!&ndash; Put this in a separate component &ndash;&gt;-->
    <!--<table class="table">-->
      <!--<thead>-->
      <!--<tr>-->
        <!--<th>name</th>-->
        <!--<th class="hidden-xs">description</th>-->
      <!--</tr>-->
      <!--</thead>-->
      <!--<tbody>-->
      <!--<tr v-for="package in packages">-->
        <!--<td @dblclick="setSelectedPackage(package.id)" @click="selected = package.id"-->
            <!--:class="{active: package.id == selected}">-->
          <!--<span>-->
            <!--<i class="fa fa-folder-open-o" aria-hidden="true"></i>-->
          <!--</span>&nbsp; {{package.label}}-->
        <!--</td>-->
        <!--<td @dblclick="selectPackage(package.id)" @click="selected = package.id"-->
            <!--:class="{active: package.id == selected}" class="hidden-xs">-->
          <!--<i>{{package.description}}</i>-->
        <!--</td>-->
      <!--</tr>-->
      <!--<tr v-for="entity in entities">-->
        <!--<td @dblclick="openDataset(entity.id)" @click="selected = entity.id" :class="{active: entity.id == selected}">-->
            <!--<i class="fa fa-list" aria-hidden="true"></i>-->
          <!--</span>&nbsp; {{entity.label}}-->
        <!--</td>-->
        <!--<td @dblclick="openDataset(entity.id)" @click="selected = entity.id" :class="{active: entity.id == selected}" class="hidden-xs">-->
          <!--<i>{{entity.description}}</i>-->
        <!--</td>-->
      <!--</tr>-->
      <!--</tbody>-->
    <!--</table>-->

  </div>
</template>

<script>
  import {GET_PACKAGES, GET_ENTITIES, LOGIN} from '../store/actions'
  import {SET_QUERY, SET_SELECTED_PACKAGE} from '../store/mutations'

  export default {
    name: 'Navigator',
    data () {
      return {
        path: [],
        currentLabel: '',
        fields: {
          label: {
            label: 'Name',
            sortable: true
          },
          description: {
            label: 'Description',
            sortable: true
          }
        },
        filter: null
      }
    },
    methods: {
      submitQuery: function () {
        this.$store.dispatch(GET_PACKAGES, this.$store.state.query)
        this.$store.dispatch(GET_ENTITIES, this.$store.state.query)
      },
      clearQuery: function () {
        this.$store.commit(SET_QUERY, undefined)
        this.$store.dispatch(GET_PACKAGES)
      },
      selectPackage: function (packageId) {
       // getStateForPackage(this, packageId)
      },
      openDataset: function (datasetId) {
        console.log(datasetId)
        window.open('/menu/main/dataexplorer?entity=' + datasetId)
      }
    },
    computed: {
      query: {
        get () {
          return this.$store.state.query
        },
        set (query) {
          this.$store.commit(SET_QUERY, query)
        }
      },
      packages () {
        return this.$store.state.packages
      },
      entities () {
        return this.$store.state.entities
      },
      items () {
        return [].concat(this.packages).concat(this.entities)
      },
      error () {
        return this.$store.state.error
      },
      selected: {
        get () {
          return this.$store.state.selectedPackage
        },
        set (packageID) {
          this.$store.commit(SET_SELECTED_PACKAGE, packageID)
        }
      }
    },
    mounted: function () {
      this.$store.state.token ? this.$store.dispatch(GET_PACKAGES) : this.$store.dispatch(LOGIN)
    }
  }
</script>
