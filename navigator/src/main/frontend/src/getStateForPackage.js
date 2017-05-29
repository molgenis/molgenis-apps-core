import axios from 'axios'

/**
 Retrieves all necessary state based on packageId.
 **/
export default function (state, packageId) {
  console.log('getStateForPackage(id=' + packageId + ')')

  state.search = null
  state.currentId = packageId
  state.currentLabel = null // start clean
  state.path = []
  state.entities = []
  state.packages = []
  state.error = null
  state.message = 'loading ... please wait.'

  axios.get('/api/v2/sys_md_Package?sort=label').then(function (response) {
    console.log(response.data)

    // get latest of current
    var _current = null
    if (state.currentId !== null) {
      _current = response.data.items.find(function (obj) {
        return obj.fullName === state.currentId
      })
      // todo: if not exists give error and fall back to root
      if (_current === null) {
        state.error = 'couldn\'t find package.'
        state.currentId = null
      } else {
        state.currentLabel = _current.label
      }
    }

    // get packages that when parent.fullName === currentId or currentId = null && parent == null
    state.packages = response.data.items.filter(function (obj) {
      if ('parent' in obj) return obj.parent.fullName === state.currentId
      else if (state.currentId === null && obj.parent === undefined) return true
      return false
    }).map(function (obj) {
      return {
        id: obj.fullName,
        label: obj.label,
        description: obj.description
      }
    })

    // refresh the path
    state.path = []
    var parent = null
    if (_current !== null) {
      parent = _current.parent
    }
    while (parent !== undefined) {
      // find the parent package object based on parent.fullName reference
      parent = response.data.items.find(function (obj) {
        return obj.fullName === parent.fullName
      })

      // prepend parent to path
      state.path.unshift({
        id: parent.fullName,
        label: parent.label
      })

      // get parents parent
      if (parent.parent === null) {
        parent = null
      } else {
        parent = response.data.items.find(function (obj) {
          return obj.fullName === parent.parent.fullName
        })
      }
      console.log('breakpoint2')
    }
    state.error = null
  }).then(function () {
    // retrieve entities, filter by parent
    // todo: filter server side
    axios.get('/api/v2/sys_md_EntityType').then(function (response) {
      console.log(response.data)
      state.entities = response.data.items.filter(function (obj) {
        if (state.currentId === null) return obj.package === undefined
        else return obj.package.fullName === state.currentId
      }).map(function (obj) {
        return {
          id: obj.fullName,
          label: obj.label,
          description: obj.description
        }
      })
      // when last promise returns we can remove loading message
      state.message = null
    })
  }).catch(function (error) {
    console.log(error)
    state.error = 'snap! failed to retrieve package. ' + error.message
  })

  return state
}
