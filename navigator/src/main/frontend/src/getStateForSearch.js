import axios from 'axios'

/**
 Retrieves all necessary state based search state**/
export default function (state, searchString) {
  state.entities = []
  state.packages = []

  console.log('get state for search string: ' + searchString)

  // search packages matching search criteria
  axios.get('/api/v2/sys_md_Package?q=name=q=' + searchString + ',description=q=' + searchString).then(function (response) {
    state.packages = response.data.items.map(function (obj) {
      return {
        id: obj.fullName,
        label: obj.label,
        description: obj.description
      }
    })
  })

  // search entities matching search criteria
  axios.get('/api/v2/sys_md_EntityType?q=label=q=' + searchString + ',description=q=' + searchString).then(function (response) {
    state.entities = response.data.items.map(function (obj) {
      return {
        id: obj.fullName,
        label: obj.label,
        description: obj.description
      }
    })
  })
}
