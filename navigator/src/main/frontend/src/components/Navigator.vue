<template>
  <div class="container">

    <div v-if="error != undefined" class="alert alert-danger" role="alert">
      <button @click="error=null" type="button" class="close"><span aria-hidden="true">&times;</span></button> {{error}}
    </div>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a>
          <i class="fa fa-home" aria-hidden="true" @click="selectPackage(null);"></i>
        </a>
      </li>
      <li class="breadcrumb-item" v-for="package in path">
        <b v-if="isLast(path, package)" >{{package.label}}</b>
        <a v-else @click="selectPackage(package.id)">{{package.label}}</a>
      </li>
    </ol>

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

    <!-- Main table element -->
    <b-table bordered :items="items" :fields="fields" :filter="filter" class="text-left">
      <template slot="label" scope="item" >
        <span v-if="item.item.type === 'entity'">
            <button
              type="button"
              class="btn btn-sm btn-block btn-secondary"
              style="text-align: left">
              <i class="fa fa-list" aria-hidden="true" @click="openDataSet(item.item.id)"> {{item.item.label}}</i>
            </button>
          </span>
        <span v-else>
          <button
            type="button"
            class="btn btn-sm btn-block"
            v-bind:class="[item.item.id === selectedPackageId ? 'btn-primary' : 'btn-secondary']"
            @click="selectPackage(item.item.id)"
            style="text-align: left">
            <i class="fa fa-folder-open-o" aria-hidden="true" > {{item.item.label}}</i>
          </button>
        </span>
      </template>
    </b-table>
  </div>
</template>

<script>
  import {GET_PACKAGES, GET_ENTITIES, RESET_STATE, GET_STATE_FOR_PACKAGE, LOGIN} from '../store/actions'
  import {SET_QUERY} from '../store/mutations'

  export default {
    name: 'Navigator',
    data () {
      return {
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
        this.$store.dispatch(RESET_STATE)
        this.$store.dispatch(GET_PACKAGES, this.$store.state.query)
        this.$store.dispatch(GET_ENTITIES, this.$store.state.query)
      },
      clearQuery: function () {
        this.$store.commit(SET_QUERY, undefined)
        this.$store.dispatch(GET_PACKAGES)
      },
      selectPackage: function (packageId) {
        if (this.selectedPackageId === packageId) {
          // No-op as its the currently selected package
          return
        }
        this.$store.commit(SET_QUERY, undefined)
        this.$store.dispatch(GET_STATE_FOR_PACKAGE, packageId)
      },
      openDataSet: function (datasetId) {
        window.open('/menu/main/dataexplorer?entity=' + datasetId)
      },
      isLast: function (list, item) {
        const tail = list[list.length - 1]
        return !!tail && !!item && tail.id === item.id
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
      path: {
        get () {
          return this.$store.state.path
        }
      },
      items () {
        return [].concat(this.packages).concat(this.entities)
      },
      error () {
        return this.$store.state.error
      },
      selectedPackage: {
        get () {
          return this.$store.state.selectedPackage
        }
      },
      selectedPackageLabel: {
        get () {
          return this.selectedPackage ? this.selectedPackage.label : ''
        }
      },
      selectedPackageId: {
        get () {
          return this.selectedPackage ? this.selectedPackage.id : undefined
        }
      }
    },
    mounted: function () {
      this.$store.state.token ? this.$store.dispatch(GET_PACKAGES) : this.$store.dispatch(LOGIN)
    }
  }
</script>
