import { get, post } from './rest-client/molgenisAPI'
import { SET_PACKAGES, SET_ENTITY_TYPES, SET_EDITOR_ENTITY_TYPE } from './mutations'

export const GET_PACKAGES = '__GET_PACKAGES__'
export const GET_ENTITY_TYPES = '__GET_ENTITY_TYPES__'
export const GET_ENTITY_TYPE_BY_ID = '__GET_ENTITY_TYPE_BY_ID__'
export const UPDATE_EDITOR_ENTITY_TYPE = '__UPDATE_EDITOR_ENTITY_TYPE__'

export default {
  [GET_PACKAGES] ({commit}) {
    get({apiUrl: '/plugin/metadata-manager'}, '/editorPackages')
      .then(response => {
        commit(SET_PACKAGES, response)
      }, error => {
        console.log('error', error)
      })
  },
  [GET_ENTITY_TYPES] ({commit}) {
    get({apiUrl: '/api'}, '/v2/sys_md_EntityType?num=10000')
      .then(response => {
        commit(SET_ENTITY_TYPES, response.items)
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
  [UPDATE_EDITOR_ENTITY_TYPE] ({dispatch}, updatedEditorEntityType) {
    const id = updatedEditorEntityType.id
    post({apiUrl: '/plugin/metadata-manager'}, '/entityType', {editorEntityType: updatedEditorEntityType})
      .then(response => {
        console.log(response, id)
      }, error => {
        console.log('error', error)
      })
  }
}
