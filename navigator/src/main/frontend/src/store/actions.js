import Vue from 'vue'
import VueResource from 'vue-resource'
import {SET_PACKAGES, SET_ENTITIES, SET_TOKEN, SET_ERROR} from './mutations'

export const GET_PACKAGES = 'GET_PACKAGES'
export const GET_ENTITIES = 'GET_ENTITIES'
export const LOGIN = 'LOGIN'

Vue.use(VueResource)

// Server URL can be found in webpack.config.js ->  devServer: { proxy: [] }
// Run MOLGENIS docker on 8081 for great success
export default {
  [GET_PACKAGES] ({commit, state}, query) {
    query = query || ''
    const uri = query ? '/api/v2/sys_md_Package?sort=label&q=id=q=' + query + ',description=q=' + query + ',label=q=' + query
      : '/api/v2/sys_md_Package?sort=label'

    Vue.http.headers.common['x-molgenis-token'] = state.token
    Vue.http.get(uri).then(
      (response) => commit(SET_PACKAGES, response.body.items),
      (error) => commit(SET_ERROR, error.body.errors[0].message)
    )
  },
  [GET_ENTITIES] ({commit, state}, query) {
    if (!query) {
      return
    }
    Vue.http.headers.common['x-molgenis-token'] = state.token
    Vue.http.get('/api/v2/sys_md_EntityType?sort=label&q=label=q=' + query + ',description=q=' + query).then((response) => {
      const entities = response.data.items.map(function (item) {
        return {
          'id': item.id,
          'type': 'entity',
          'label': item.label,
          'description': item.description
        }
      })
      commit(SET_ENTITIES, entities)
    }, (error) => commit(SET_ERROR, error.body.errors[0].message))
  },
  [LOGIN] ({commit, dispatch}) {
    // Hack login credentials for now
    const login = {
      'username': 'admin',
      'password': 'admin'
    }
    Vue.http.post('/api/v1/login', login).then((response) => {
      commit(SET_TOKEN, response.body.token)
      dispatch(GET_PACKAGES)
    }, (error) => commit(SET_ERROR, error.body.errors[0].message))
  }
}
