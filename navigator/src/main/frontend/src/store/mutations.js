export const SET_PACKAGES = 'SET_PACKAGES'
export const SET_ENTITIES = 'SET_ENTITIES'
export const SET_QUERY = 'SET_QUERY'
export const SET_TOKEN = 'SET_TOKEN'
export const SET_SELECTED_PACKAGE = 'SET_SELECTED_PACKAGE'
export const SET_ERROR = 'SET_ERROR'

export default {
  [SET_PACKAGES] (state, packages) {
    state.packages = packages
  },
  [SET_ENTITIES] (state, entities) {
    state.entities = entities
  },
  [SET_QUERY] (state, query) {
    state.query = query
  },
  [SET_TOKEN] (state, token) {
    state.token = token
  },
  [SET_SELECTED_PACKAGE] (state, packageID) {
    state.selectedPackage = packageID
  },
  [SET_ERROR] (state, error) {
    state.error = error
  }
}
