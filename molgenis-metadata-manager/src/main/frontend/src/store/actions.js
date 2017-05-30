import { get } from './rest-client/molgenisAPI'

export const GET_ENTITY_TYPES = '__GET_ENTITY_TYPES__'
export const GET_ENTITY_TYPE_BY_ID = '__GET_ENTITY_TYPE_BY_ID__'

export default {
  [GET_ENTITY_TYPES] ({commit, state}) {
    console.log('placeholder action to get entity types')
  },
  [GET_ENTITY_TYPE_BY_ID] ({commit, state}, entityTypeID) {
    get({apiUrl: '/metadata-manager'}, '/entityType/' + entityTypeID)
      .then(response => {
        console.log('success', response)
      }, response => {
        console.log('error', response)
      })
  }
}
