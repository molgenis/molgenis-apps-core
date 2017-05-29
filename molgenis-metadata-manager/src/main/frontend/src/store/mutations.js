export const CREATE_ALERT = '__CREATE_ALERT__'
export const REMOVE_ALERT = '__REMOVE_ALERT__'

export const SET_ENTITY_TYPE_ID = '__SET_ENTITY_TYPE_ID__'

export default {
  /**
   * Create an active alert with a given message and type
   *
   * @param state state of the application
   * @param alert alert object containing 1. message and 2. type
   */
  [CREATE_ALERT] (state, alert) {
    state.showAlert = true
    state.alert = alert
  },
  /**
   * Remove an active alert and set message and type back to null
   *
   * @param state state of the application
   */
  [REMOVE_ALERT] (state) {
    state.showAlert = false
    state.alert.message = null
    state.alert.type = null
  },
  [SET_ENTITY_TYPE_ID] (state, entityTypeID) {
    state.entityTypeID = entityTypeID
  }
}
