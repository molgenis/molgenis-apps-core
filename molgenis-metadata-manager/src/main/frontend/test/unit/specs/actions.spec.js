import testAction from '../utils/action.utils'
import td from 'testdouble'
import * as api from 'store/rest-client/molgenisAPI.js'

import {
  SET_PACKAGES,
  CREATE_ALERT,
  SET_ENTITY_TYPES
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
      const mockedResponse = {
        errors: [{
          type: 'danger',
          message: 'No [COUNT] permission on entity type [EntityType] with id [sys_md_EntityType]'
        }]
      }
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
  describe('GET_ENTITY_TYPES', () => {
    afterEach(() => td.reset())
    const state = {}
    it('Should retrieve all EntityTypes and filter on non-system EntityTypes', done => {
      const mockedResponse = {
        href: '/api/v2/sys_md_EntityType',
        items: [{
          attributes: [{
            id: 'aaaacxdco53w3krvac3owhyaae',
            name: 'id',
            _href: '/api/v2/sys_md_Attribute/aaaacxdco53w3krvac3owhyaae'
          }, {
            id: 'aaaacxdco53w3krvac3owhyaai',
            name: 'count',
            _href: '/api/v2/sys_md_Attribute/aaaacxdco53w3krvac3owhyaai'
          }],
          isAbstract: false,
          backend: 'PostgreSQL',
          description: 'This entity is used to group the index actions.',
          id: 'sys_idx_IndexActionGroup',
          label: 'Index action group',
          package: {id: 'sys_idx', label: 'Index', _href: '/api/v2/sys_md_Package/sys_idx'},
          tags: [],
          _href: '/api/v2/sys_md_EntityType/sys_idx_IndexActionGroup'
        }, {
          attributes: [{
            id: 'aaaacxdco53x5krvac3owhyaaq',
            name: '_key',
            _href: '/api/v2/sys_md_Attribute/aaaacxdco53x5krvac3owhyaaq'
          }, {
            id: 'aaaacxdco53x5krvac3owhyaau',
            name: 'content',
            _href: '/api/v2/sys_md_Attribute/aaaacxdco53x5krvac3owhyaau'
          }],
          isAbstract: false,
          backend: 'PostgreSQL',
          label: 'Static content',
          id: 'sys_StaticContent',
          package: {id: 'sys', label: 'System', _href: '/api/v2/sys_md_Package/sys'},
          tags: [],
          _href: '/api/v2/sys_md_EntityType/sys_StaticContent'
        }, {
          attributes: [{
            id: 'aaaacxdco53xzkrvac3owhyaae',
            name: 'status',
            _href: '/api/v2/sys_md_Attribute/aaaacxdco53xzkrvac3owhyaae'
          }],
          isAbstract: true,
          backend: 'PostgreSQL',
          label: 'Questionnaire',
          id: 'sys_Questionnaire',
          package: {id: 'sys', label: 'System', _href: '/api/v2/sys_md_Package/sys'},
          tags: [],
          _href: '/api/v2/sys_Questionnaire'
        }, {
          attributes: [
            {
              id: 'aaacxdc2l72fkrvac3owhyaae',
              name: 'id',
              _href: '/api/v2/sys_md_Attribute/aaaacxdc2l72fkrvac3owhyaae'
            }, {
              id: 'aaaacxdc2l72fkrvac3owhyaai',
              name: 'firstName',
              _href: '/api/v2/sys_md_Attribute/aaaacxdc2l72fkrvac3owhyaai'
            }, {
              id: 'aaaacxdc2l72fkrvac3owhyaam',
              name: 'lastName',
              _href: '/api/v2/sys_md_Attribute/aaaacxdc2l72fkrvac3owhyaam'
            }, {
              id: 'aaaacxdc2l72fkrvac3owhyaaq',
              name: 'present',
              _href: '/api/v2/sys_md_Attribute/aaaacxdc2l72fkrvac3owhyaaq'
            }, {
              id: 'aaaacxdc2l72fkrvac3owhyaau',
              name: 'extra',
              _href: '/api/v2/sys_md_Attribute/aaaacxdc2l72fkrvac3owhyaau'
            }],
          isAbstract: false,
          backend: 'PostgreSQL',
          label: 'borrel',
          id: 'demo_borrel',
          package: {id: 'demo', label: 'demo', _href: '/api/v2/sys_md_Package/demo'},
          tags: [],
          _href: '/api/v2/demo_borrel'
        }]
      }
      const get = td.function('api.get')
      td.when(get({apiUrl: '/api'}, '/v2/sys_md_EntityType?num=10000'))
        .thenResolve(mockedResponse)
      td.replace(api, 'get', get)
      const payload = [{
        attributes: [
          {
            id: 'aaacxdc2l72fkrvac3owhyaae',
            name: 'id',
            _href: '/api/v2/sys_md_Attribute/aaaacxdc2l72fkrvac3owhyaae'
          }, {
            id: 'aaaacxdc2l72fkrvac3owhyaai',
            name: 'firstName',
            _href: '/api/v2/sys_md_Attribute/aaaacxdc2l72fkrvac3owhyaai'
          }, {
            id: 'aaaacxdc2l72fkrvac3owhyaam',
            name: 'lastName',
            _href: '/api/v2/sys_md_Attribute/aaaacxdc2l72fkrvac3owhyaam'
          }, {
            id: 'aaaacxdc2l72fkrvac3owhyaaq',
            name: 'present',
            _href: '/api/v2/sys_md_Attribute/aaaacxdc2l72fkrvac3owhyaaq'
          }, {
            id: 'aaaacxdc2l72fkrvac3owhyaau',
            name: 'extra',
            _href: '/api/v2/sys_md_Attribute/aaaacxdc2l72fkrvac3owhyaau'
          }],
        isAbstract: false,
        backend: 'PostgreSQL',
        label: 'borrel',
        id: 'demo_borrel',
        package: {id: 'demo', label: 'demo', _href: '/api/v2/sys_md_Package/demo'},
        tags: [],
        _href: '/api/v2/demo_borrel'
      }]
      testAction(actions.__GET_ENTITY_TYPES__, null, state, [{type: SET_ENTITY_TYPES, payload: payload}], [], done)
    })
    it('Should create alert when failing', done => {
      const mockedResponse = {
        errors: [{
          type: 'danger',
          message: 'No [COUNT] permission on entity type [EntityType] with id [sys_md_EntityType]'
        }]
      }
      const get = td.function('api.get')
      td.when(get({apiUrl: '/api'}, '/v2/sys_md_EntityType?num=10000'))
        .thenReject(mockedResponse)

      td.replace(api, 'get', get)
      const payload = {
        type: 'danger',
        message: 'No [COUNT] permission on entity type [EntityType] with id [sys_md_EntityType]'
      }
      testAction(actions.__GET_ENTITY_TYPES__, null, state, [{type: CREATE_ALERT, payload: payload}], [], done)
    })
  })
})

