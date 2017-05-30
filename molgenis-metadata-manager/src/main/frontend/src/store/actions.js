import Vue from 'vue'
import VueResource from 'vue-resource'

export const GET_ENTITY_TYPES = '__GET_ENTITY_TYPES__'
export const GET_ENTITY_TYPE_BY_ID = '__GET_ENTITY_TYPE_BY_ID__'

Vue.use(VueResource)
export default {
  [GET_ENTITY_TYPES] ({commit, state}) {
    console.log('placeholder action to get entity types')
  },
  [GET_ENTITY_TYPE_BY_ID] ({commit, state}, entityTypeID) {
    Vue.http.headers.common['x-molgenis-token'] = 'test'
    Vue.http.get('metadata-manager/entityType/' + entityTypeID)
      .then(response => {
        console.log('success', response)
      }, response => {
        console.log('error', response)
      })
  }
}
