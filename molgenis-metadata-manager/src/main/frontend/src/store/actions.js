import { get, post } from './rest-client/molgenisAPI'
import { CREATE_ALERT, SET_EDITOR_ENTITY_TYPE, SET_ENTITY_TYPES, SET_PACKAGES } from './mutations'

export const GET_PACKAGES = '__GET_PACKAGES__'
export const GET_ENTITY_TYPES = '__GET_ENTITY_TYPES__'
export const GET_ENTITY_TYPE_BY_ID = '__GET_ENTITY_TYPE_BY_ID__'
export const SAVE_EDITOR_ENTITY_TYPE = '__SAVE_EDITOR_ENTITY_TYPE__'

export default {
  /**
   * Retrieve all Packages and filter on non-system Packages
   * @param commit
   */
  [GET_PACKAGES] ({commit}) {
    // TODO filter system packages
    get({apiUrl: '/plugin/metadata-manager'}, '/editorPackages')
      .then(response => {
        commit(SET_PACKAGES, response)
      }, error => {
        console.log('error', error)
      })
  },
  /**
   * Retrieve all EntityTypes and filter on non-system EntityTypes
   */
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
  /**
   * Retrieve EditorEntityType based on EntityType ID
   *
   * @param entityTypeID The selected EntityType identifier
   */
  [GET_ENTITY_TYPE_BY_ID] ({commit}, entityTypeID) {
    get({apiUrl: '/plugin/metadata-manager'}, '/entityType/' + entityTypeID)
      .then(response => {
        commit(SET_EDITOR_ENTITY_TYPE, response.entityType)
      }, error => {
        console.log('error', error)
      })
  },
  /**
   * Persist metadata changes to the database
   * @param updatedEditorEntityType the updated EditorEntityType
   */
  [SAVE_EDITOR_ENTITY_TYPE] ({commit}, updatedEditorEntityType) {
    post({apiUrl: '/plugin/metadata-manager'}, '/entityType', updatedEditorEntityType)
      .then(response => {
        if (response.ok) {
          commit(CREATE_ALERT, {
            type: 'success',
            message: 'Successfully updated metadata for EntityType: ' + updatedEditorEntityType.label
          })
        } else {
          console.log('FAIL', response)
        }
      })
  }
}
