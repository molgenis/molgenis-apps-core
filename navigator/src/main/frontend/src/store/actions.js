// @flow
import type {Package} from './state'
// $FlowFixMe
import {get} from 'molgenis-api-client'
import {SET_PACKAGES, SET_ENTITIES, SET_PATH, RESET_PATH, SET_ERROR} from './mutations'

export const QUERY_PACKAGES = 'QUERY_PACKAGES'
export const QUERY_ENTITIES = 'QUERY_ENTITIES'
export const RESET_STATE = 'RESET_STATE'
export const GET_STATE_FOR_PACKAGE = 'GET_STATE_FOR_PACKAGE'
export const GET_ENTITIES_IN_PACKAGE = 'GET_ENTITIES_IN_PACKAGE'

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

/**
 * Transform the result to an Entity object
 * @param item result row form query to backend
 * @returns {{id: *, type: string, label: *, description: *, abstract: boolean}}
 */
function toEntity (item:any) {
  return {
    'id': item.id,
    'type': 'entity',
    'label': item.label,
    'description': item.description,
    'abstract': !!item.isAbstract
  }
}

export default {
  [QUERY_PACKAGES] ({commit}: { commit: Function }, query: ?string) {
    query = query || ''
    const uri = query ? '/sys_md_Package?sort=label&num=1000&q=id=q=' + query + ',description=q=' + query + ',label=q=' + query
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
  [QUERY_ENTITIES] ({commit}: { commit: Function }, query: string) {
    return new Promise((resolve, reject) => {
      if (!query) {
        resolve()
      }
      get({apiUrl: '/api/v2'}, '/sys_md_EntityType?sort=label&num=1000&q=label=q=' + query + ',description=q=' + query).then((response) => {
        const entities = response.items.map(toEntity)
        commit(SET_ENTITIES, entities)
        resolve()
      }).catch((error) => {
        commit(SET_ERROR, error.errors[0].message)
        reject()
      })
    })
  },
  [GET_ENTITIES_IN_PACKAGE] ({commit}: { commit: Function }, packageId: string) {
    return new Promise((resolve, reject) => {
      get({apiUrl: '/api/v2'}, '/sys_md_EntityType?sort=label&num=1000&q=package.id==' + packageId).then((response) => {
        const entities = response.items.map(toEntity)
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
  [GET_STATE_FOR_PACKAGE] ({commit, dispatch}: { commit: Function, dispatch: Function }, selectedPackageId: ?string) {
    return new Promise((resolve, reject) => {
      get({apiUrl: '/api/v2'}, '/sys_md_Package?sort=label&num=1000').then((response) => {
        const allPackages = response.items

        if (!selectedPackageId) {
          resetToHome(commit, allPackages)
        } else {
          const selectedPackage = allPackages.find(function (packageItem) {
            return packageItem.id === selectedPackageId
          })

          if (!selectedPackage) {
            commit(SET_ERROR, 'couldn\'t find package.')
            resetToHome(commit, allPackages)
            reject()
          } else {
            // Find child packages.
            const childPackages = allPackages.filter(function (packageItem) {
              return packageItem.parent && packageItem.parent.id === selectedPackage.id
            })
            commit(SET_PACKAGES, childPackages)

            const path = buildPath(allPackages, selectedPackage, [])
            commit(SET_PATH, path)
            dispatch(GET_ENTITIES_IN_PACKAGE, selectedPackageId).then(resolve)
          }
        }
      }).catch((error) => {
        commit(SET_ERROR, error.errors[0].message)
        reject()
      })
    })
  }
}
