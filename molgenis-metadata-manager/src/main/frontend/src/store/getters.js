export default {
  /**
   * Return the packages from the state
   * @param state
   */
  getPackages: state => state.packages,
  /**
   * Get the the entire entityType object based on the EntityTypeID in the URL
   * @param state
   * @returns {*}
   */
  getSelectedEntityType: state => {
    const entityTypeID = state.route.params.entityTypeID
    return state.entityTypes.filter(entityType => {
      return entityType.id === entityTypeID
    })[0]
  },
  /**
   * Return the entityTypes from the state
   * @param state
   */
  getEntityTypes: state => state.entityTypes,
  /**
   * Return a clone of the editorEntityType form the state
   * @param state
   */
  getEditorEntityType: state => {
    return JSON.parse(JSON.stringify(state.editorEntityType))
  }
}
