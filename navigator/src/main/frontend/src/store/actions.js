import { login, get } from '../molgenisApi'
import {SET_PACKAGES, SET_ENTITIES, APPEND_PATH, RESET_PATH, SET_SELECTED_PACKAGE, SET_TOKEN, SET_ERROR} from './mutations'

export const GET_PACKAGES = 'GET_PACKAGES'
export const GET_ENTITIES = 'GET_ENTITIES'
export const RESET_STATE = 'RESET_STATE'
export const GET_STATE_FOR_PACKAGE = 'GET_STATE_FOR_PACKAGE'
export const LOGIN = 'LOGIN'

/**
 * Resets the entire state
 * @param commit, reference to mutation function
 * @param packages, the complete list of packages
 */
function resetToHome (commit, packages) {
  commit(SET_PACKAGES, packages)
  commit(RESET_PATH)
  commit(SET_SELECTED_PACKAGE, null)
  commit(SET_ENTITIES, [])
}

/**
 * Recursively build the path, going backwards starting at the currentPackage
 * @param commit, reference to mutation function
 * @param packages, the complete list of packages
 * @param currentPackage, the tail
 * @param reset, boolean indicating if path needs to be reset before building
 */
function buildPath (commit, packages, currentPackage, reset) {
  if (reset) {
    commit(RESET_PATH)
  }
  if (currentPackage.parent) {
    const parentPackage = packages.find(function (packageItem) {
      return packageItem.id === currentPackage.parent.id
    })
    buildPath(commit, packages, parentPackage, false)
  }
  commit(APPEND_PATH, currentPackage)
}

// Server URL can be found in webpack.config.js ->  devServer: { proxy: [] }
// Run MOLGENIS docker on 8081 for great success
export default {
  [GET_PACKAGES] ({commit}, query) {
    query = query || ''
    const uri = query ? '/sys_md_Package?sort=label&q=id=q=' + query + ',description=q=' + query + ',label=q=' + query
      : '/sys_md_Package?sort=label'

    get({apiUrl: '/api/v2'}, uri).then((response) => {
      commit(SET_PACKAGES, response.items)
    }).catch((error) => {
      commit(SET_ERROR, error.errors[0].message)
    })
  },
  [GET_ENTITIES] ({commit}, query) {
    if (!query) {
      return
    }
    get({apiUrl: '/api/v2'}, '/sys_md_EntityType?sort=label&q=label=q=' + query + ',description=q=' + query).then((response) => {
      const entities = response.items.map(function (item) {
        return {
          'id': item.id,
          'type': 'entity',
          'label': item.label,
          'description': item.description
        }
      })
      commit(SET_ENTITIES, entities)
    }).catch((error) => {
      commit(SET_ERROR, error.errors[0].message)
    })
  },
  [RESET_STATE] ({commit}) {
    resetToHome(commit, [])
  },
  [GET_STATE_FOR_PACKAGE] ({commit, dispatch, state}, selectedPackageId) {
    get({apiUrl: '/api/v2'}, '/sys_md_Package?sort=label').then((response) => {
      const allPackages = response.items

      if (!selectedPackageId) {
        resetToHome(commit, allPackages)
      } else {
        const selectedPackage = allPackages.find(function (packageItem) {
          return packageItem.id === selectedPackageId
        })

        if (selectedPackage === null) {
          state.error = 'couldn\'t find package.'
          resetToHome(commit, allPackages)
        }

        // Find child packages.
        const childPackages = allPackages.filter(function (packageItem) {
          return packageItem.parent && packageItem.parent.id === selectedPackage.id
        })

        commit(SET_PACKAGES, childPackages)
        commit(SET_SELECTED_PACKAGE, selectedPackage)
        buildPath(commit, allPackages, selectedPackage, true)
        dispatch(GET_ENTITIES, selectedPackageId)
      }
    }).catch((error) => {
      commit(SET_ERROR, error.errors[0].message)
    })
  },
  [LOGIN] ({commit, dispatch}) {
    // Hack login credentials for now
    login('admin', 'admin').then((response) => {
      commit(SET_TOKEN, response.token)
      dispatch(GET_PACKAGES)
    }).catch((error) => {
      commit(SET_ERROR, error.body.errors[0].message)
    })
  }
}
