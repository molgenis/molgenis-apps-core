import mutations from 'store/mutations'

describe('mutations', () => {
  describe('Testing mutation SET_PACKAGES', () => {
    it('Sets package', () => {
      const state = {
        packages: []
      }
      const packages = [{id: 'sys_idx', label: 'Index'},
        {id: 'sys_sec', label: 'Security'}, {id: 'sys', label: 'System'},
        {id: 'sys_md', label: 'Meta'}, {id: 'base', label: 'Default'}]
      mutations.__SET_PACKAGES__(state, packages)
      expect(state.packages).to.equal(packages)
    })
  })

  describe('Testing mutation CREATE_ALERT', () => {
    it('Updates alert message', () => {
      const state = {
        alert: {
          message: null,
          type: null
        }
      }
      const alert = {
        message: 'Hello',
        type: 'success'
      }
      mutations.__CREATE_ALERT__(state, alert)
      expect(state.alert.message).to.equal('Hello')
    })
    it('Updates alert type', () => {
      const state = {
        alert: {
          message: null,
          type: null
        }
      }
      const alert = {
        message: 'Hello',
        type: 'success'
      }
      mutations.__CREATE_ALERT__(state, alert)
      expect(state.alert.type).to.equal('success')
    })
  })

  describe('Testing mutation REMOVE_ALERT', () => {
    it('Sets alert message to null', () => {
      const state = {
        alert: {
          message: 'Hello',
          type: 'success'
        }
      }
      mutations.__REMOVE_ALERT__(state)
      expect(state.alert.message).to.equal(null)
    })

    it('Sets alert type to null', () => {
      const state = {
        alert: {
          message: 'Hello',
          type: 'success'
        }
      }
      mutations.__REMOVE_ALERT__(state)
      expect(state.alert.type).to.equal(null)
    })
  })

  describe('Testing mutation SET_ENTITY_TYPES', () => {
    it('Sets entity types', () => {
      const state = {
        alert: {
          entityTypes: []
        }
      }
      const entityTypes = [{
        attributes: [{id: '1', name: 'id', _href: '/api/v2/sys_md_Attribute/1'}, {
          id: '2',
          name: 'label',
          _href: '/api/v2/sys_md_Attribute/2'
        }],
        backend: 'PostgreSQL',
        description: 'test entity',
        id: 'test',
        package: {id: 'base', label: 'Default', _href: '/api/v2/sys_md_Package/base'},
        tags: [],
        _href: '/api/v2/base_test'
      }, {
        attributes: [{id: '1a', name: 'id', _href: '/api/v2/sys_md_Attribute/1a'}, {
          id: '2a',
          name: 'label',
          _href: '/api/v2/sys_md_Attribute/2a'
        }],
        backend: 'PostgreSQL',
        description: 'test1 entity',
        id: 'test1',
        package: {id: 'base', label: 'Default', _href: '/api/v2/sys_md_Package/base'},
        tags: [],
        _href: '/api/v2/base_test1'
      }]
      mutations.__SET_ENTITY_TYPES__(state, entityTypes)
      expect(state.entityTypes).to.equal(entityTypes)
    })
  })

  describe('Testing mutation SET_EDITOR_ENTITY_TYPE', () => {
    it('Sets selected entity type to edit', () => {
      const state = {
        editorEntityType: {}
      }
      const editorEntityType = {
        id: 'root_gender',
        labelI18n: {},
        description: 'Gender options',
        abstract0: false,
        attributes: [
          {
            aggregatable: false,
            auto: false,
            descriptionI18n: {},
            enumOptions: [],
            id: 'bla',
            labelI18n: {},
            name: 'id',
            nullable: false,
            readonly: true,
            tags: [],
            type: 'STRING',
            unique: true,
            visible: true
          },
          {
            aggregatable: false,
            auto: false,
            descriptionI18n: {},
            enumOptions: [],
            id: 'bladibla',
            labelI18n: {},
            name: 'label',
            nullable: false,
            readonly: true,
            tags: [],
            type: 'STRING',
            unique: true,
            visible: true
          }
        ],
        backend: 'postgreSQL',
        idAttribute: {id: 'bla', label: 'id'},
        label: 'Gender',
        labelAttribute: {id: 'bladibla', label: 'label'},
        lookupAttributes: [
          {id: 'bla', label: 'id'},
          {id: 'bladibla', label: 'label'}
        ],
        package0: {id: 'root', label: 'root'},
        tags: []
      }
      mutations.__SET_EDITOR_ENTITY_TYPE__(state, editorEntityType)
      expect(state.editorEntityType).to.equal(editorEntityType)
    })
  })

  describe('Testing mutation CLEAR_EDITOR_ENTITY_TYPE', () => {
    it('Clears the selected entity type', () => {
      const state = {
        editorEntityType: {
          id: 'root_gender',
          labelI18n: {},
          description: 'Gender options',
          abstract0: false,
          attributes: [
            {
              aggregatable: false,
              auto: false,
              descriptionI18n: {},
              enumOptions: [],
              id: 'bla',
              labelI18n: {},
              name: 'id',
              nullable: false,
              readonly: true,
              tags: [],
              type: 'STRING',
              unique: true,
              visible: true
            },
            {
              aggregatable: false,
              auto: false,
              descriptionI18n: {},
              enumOptions: [],
              id: 'bladibla',
              labelI18n: {},
              name: 'label',
              nullable: false,
              readonly: true,
              tags: [],
              type: 'STRING',
              unique: true,
              visible: true
            }
          ],
          backend: 'postgreSQL',
          idAttribute: {id: 'bla', label: 'id'},
          label: 'Gender',
          labelAttribute: {id: 'bladibla', label: 'label'},
          lookupAttributes: [
            {id: 'bla', label: 'id'},
            {id: 'bladibla', label: 'label'}
          ],
          package0: {id: 'root', label: 'root'},
          tags: []
        }
      }
      mutations.__CLEAR_EDITOR_ENTITY_TYPE__(state)
      expect(state.editorEntityType).to.deep.equal({})
    })
  })

  describe('Testing mutation UPDATE_EDITOR_ENTITY_TYPE', () => {
    it('Updates an altered value of the selected entity type', () => {
      const state = {
        editorEntityType: {
          id: 'root_gender',
          labelI18n: {},
          description: 'Gender options',
          abstract0: false,
          attributes: [
            {
              aggregatable: false,
              auto: false,
              descriptionI18n: {},
              enumOptions: [],
              id: 'bla',
              labelI18n: {},
              name: 'id',
              nullable: false,
              readonly: true,
              tags: [],
              type: 'STRING',
              unique: true,
              visible: true
            },
            {
              aggregatable: false,
              auto: false,
              descriptionI18n: {},
              enumOptions: [],
              id: 'bladibla',
              labelI18n: {},
              name: 'label',
              nullable: false,
              readonly: true,
              tags: [],
              type: 'STRING',
              unique: true,
              visible: true
            }
          ],
          backend: 'postgreSQL',
          idAttribute: {id: 'bla', label: 'id'},
          label: 'Gender',
          labelAttribute: {id: 'bladibla', label: 'label'},
          lookupAttributes: [
            {id: 'bla', label: 'id'},
            {id: 'bladibla', label: 'label'}
          ],
          package0: {id: 'root', label: 'root'},
          tags: []
        }
      }
      const update = {
        key: 'description',
        value: 'Option-selection-list for gender'
      }
      mutations.__UPDATE_EDITOR_ENTITY_TYPE__(state, update)
      expect(state.editorEntityType.description).to.equal('Option-selection-list for gender')
    })
  })

  describe('Testing mutation SET_SELECTED_ATTRIBUTE_ID', () => {
    it('Updates the selected attribute ID', () => {
      const state = {
        selectedAttributeId: null
      }
      const id = 'newAttributeId'
      mutations.__SET_SELECTED_ATTRIBUTE_ID__(state, id)
      expect(state.selectedAttributeId).to.equal('newAttributeId')
    })
  })
})
