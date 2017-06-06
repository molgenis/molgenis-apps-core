// @flow
import type {Package, State} from './state'
// $FlowFixMe
import {get} from 'molgenis-api-client'
import {SET_PACKAGES, SET_ENTITIES, SET_PATH, RESET_PATH, SET_ERROR} from './mutations'

export const GET_PACKAGES = 'GET_PACKAGES'
export const GET_ENTITIES = 'GET_ENTITIES'
export const RESET_STATE = 'RESET_STATE'
export const GET_STATE_FOR_PACKAGE = 'GET_STATE_FOR_PACKAGE'

/**
 * Resets the entire state using the given packages as the package state
 * @param commit, reference to mutation function
 * @param packages, the complete list of packages
 */
function resetToHome (commit: Function, packages: Array<Package>) {
  commit(SET_PACKAGES, packages)
  commit(RESET_PATH)
  commit(SET_ENTITIES, [])
}

/**
 * Recursively build the path, going backwards starting at the currentPackage
 * @param packages, the complete list of packages
 * @param currentPackage, the tail
 * @param path the path where building
 */
function buildPath (packages, currentPackage: Package, path: Array<Package>) {
  if (currentPackage.parent) {
    const currentParent = currentPackage.parent
    const parentPackage = packages.find(function (packageItem) {
      return packageItem.id === currentParent.id
    })
    path = buildPath(packages, parentPackage, path)
  }
  path.push(currentPackage)
  return path
}

export default {
  [GET_PACKAGES] ({commit}: { commit: Function }, query: ?string) {
    query = query || ''
    const uri = query ? '/sys_md_Package?sort=label&q=id=q=' + query + ',description=q=' + query + ',label=q=' + query
      : '/sys_md_Package?sort=label'

    return new Promise((resolve, reject) => {
      get({apiUrl: '/api/v2'}, uri).then((response) => {
        commit(SET_PACKAGES, response.items)
        resolve()
      }).catch((error) => {
        commit(SET_ERROR, error.errors[0].message)
        reject()
      })
    })
  },
  [GET_ENTITIES] ({commit}: { commit: Function }, query: string) {
    return new Promise((resolve, reject) => {
      if (!query) {
        resolve()
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
        resolve()
      }).catch((error) => {
        commit(SET_ERROR, error.errors[0].message)
        reject()
      })
    })
  },
  [RESET_STATE] ({commit}: { commit: Function }) {
    resetToHome(commit, [])
  },
  [GET_STATE_FOR_PACKAGE] ({commit, dispatch, state}: { commit: Function, dispatch: Function, state: State }, selectedPackageId: ?string) {
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

        const path = buildPath(allPackages, selectedPackage, [])
        commit(SET_PATH, path)
        dispatch(GET_ENTITIES, selectedPackageId)
      }
    }).catch((error) => {
      commit(SET_ERROR, error.errors[0].message)
    })
  }
}
