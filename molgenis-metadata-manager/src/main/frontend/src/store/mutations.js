export const CREATE_ALERT = '__CREATE_ALERT__'
export const REMOVE_ALERT = '__REMOVE_ALERT__'

export const SET_PACKAGES = '__SET_PACKAGES__'
export const SET_ENTITY_TYPES = '__SET_ENTITY_TYPES__'
export const SET_EDITOR_ENTITY_TYPE = '__SET_EDITOR_ENTITY_TYPE__'
export const CLEAR_EDITOR_ENTITY_TYPE = '__CLEAR_EDITOR_ENTITY_TYPE__'
export const UPDATE_EDITOR_ENTITY_TYPE = '__UPDATE_EDITOR_ENTITY_TYPE__'
export const SET_SELECTED_ATTRIBUTE_ID = '__SET_SELECTED_ATTRIBUTE_ID__'

export default {
  [SET_PACKAGES] (state, packages) {
    state.packages = packages
  },
  [CREATE_ALERT] (state, alert) {
    state.alert = alert
  },
  [REMOVE_ALERT] (state) {
    state.alert.message = null
    state.alert.type = null
  },
  [SET_ENTITY_TYPES] (state, entityTypes) {
    state.entityTypes = entityTypes
  },
  [SET_EDITOR_ENTITY_TYPE] (state, editorEntityType) {
    state.editorEntityType = editorEntityType
  },
  [CLEAR_EDITOR_ENTITY_TYPE] (state) {
    state.editorEntityType = {}
  },
  [UPDATE_EDITOR_ENTITY_TYPE] (state, update) {
    state.editorEntityType[update.key] = update.value
  },
  [SET_SELECTED_ATTRIBUTE_ID] (state, selectedAttributeId) {
    state.selectedAttributeId = selectedAttributeId
  }
}
