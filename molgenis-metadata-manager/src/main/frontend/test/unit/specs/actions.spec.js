import testAction from '../utils/action.utils'
import td from 'testdouble'
import * as api from 'store/rest-client/molgenisAPI.js'

import {
  SET_PACKAGES,
  CREATE_ALERT
} from 'store/mutations'

import actions from 'store/actions'
describe('actions', () => {
  describe('GET_PACKAGES', () => {
    afterEach(() => td.reset())
    const state = {
      alert: {
        message: null,
        type: null
      },
      packages: [],
      entityTypes: [],
      editorEntityType: {}
    }
    it('Should retrieve all Packages and filter on non-system Packages', done => {
      const mockedResponse = [{id: 'base', label: 'Default'}, {id: 'root', label: 'root'}, {
        id: 'root_hospital',
        label: 'root_hospital'
      }]
      const get = td.function('api.get')
      td.when(get({apiUrl: '/plugin/metadata-manager'}, '/editorPackages'))
        .thenResolve(mockedResponse)
      td.replace(api, 'get', get)
      const payload = [{id: 'base', label: 'Default'}, {id: 'root', label: 'root'}, {
        id: 'root_hospital',
        label: 'root_hospital'
      }]
      testAction(actions.__GET_PACKAGES__, null, state, [{type: SET_PACKAGES, payload: payload}], [], done)
    })
    it('Should create alert when failing', done => {
      const mockedResponse = {errors: [{
        type: 'danger',
        message: 'No [COUNT] permission on entity type [EntityType] with id [sys_md_EntityType]'
      }]}
      const get = td.function('api.get')
      td.when(get({apiUrl: '/plugin/metadata-manager'}, '/editorPackages'))
        .thenReject(mockedResponse)

      td.replace(api, 'get', get)
      const payload = {
        type: 'danger',
        message: 'No [COUNT] permission on entity type [EntityType] with id [sys_md_EntityType]'
      }
      testAction(actions.__GET_PACKAGES__, null, state, [{type: CREATE_ALERT, payload: payload}], [], done)
    })
  })
})

