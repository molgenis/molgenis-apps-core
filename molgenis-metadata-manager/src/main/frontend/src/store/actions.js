import { get, post } from './rest-client/molgenisAPI'
import { SET_EDITOR_ENTITY_TYPE, SET_ENTITY_TYPES, SET_PACKAGES } from './mutations'

export const GET_PACKAGES = '__GET_PACKAGES__'
export const GET_ENTITY_TYPES = '__GET_ENTITY_TYPES__'
export const GET_ENTITY_TYPE_BY_ID = '__GET_ENTITY_TYPE_BY_ID__'
export const SAVE_EDITOR_ENTITY_TYPE = '__SAVE_EDITOR_ENTITY_TYPE__'

export default {
  [GET_PACKAGES] ({commit}) {
    // TODO filter system packages
    get({apiUrl: '/plugin/metadata-manager'}, '/editorPackages')
      .then(response => {
        commit(SET_PACKAGES, response)
      }, error => {
        console.log('error', error)
      })
  },
  [GET_ENTITY_TYPES] ({commit}) {
    // TODO can we filter system entities with REST call??
    get({apiUrl: '/api'}, '/v2/sys_md_EntityType?num=10000')
      .then(response => {
        const nonSystemEntities = response.items.filter(function (item) {
          return !item.package.id.startsWith('sys')
        })
        commit(SET_ENTITY_TYPES, nonSystemEntities)
      }, error => {
        console.log('error', error)
      })
  },
  [GET_ENTITY_TYPE_BY_ID] ({commit}, entityTypeID) {
    get({apiUrl: '/plugin/metadata-manager'}, '/entityType/' + entityTypeID)
      .then(response => {
        commit(SET_EDITOR_ENTITY_TYPE, response.entityType)
      }, error => {
        console.log('error', error)
      })
  },
  [SAVE_EDITOR_ENTITY_TYPE] ({dispatch}, updatedEditorEntityType) {
    const id = updatedEditorEntityType.id
    post({apiUrl: '/plugin/metadata-manager'}, '/entityType', updatedEditorEntityType)
      .then(response => {
        console.log(response, id)
      }, error => {
        console.log('error', error)
      })
  }
}
