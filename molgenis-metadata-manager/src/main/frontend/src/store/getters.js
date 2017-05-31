export default {
  /**
   * Return the packages from the state
   */
  getPackages: state => state.packages,
  /**
   * Get the the entire entityType object based on the EntityTypeID in the URL
   */
  getSelectedEntityType: state => {
    const entityTypeID = state.route.params.entityTypeID
    return state.entityTypes.filter(entityType => {
      return entityType.id === entityTypeID
    })[0]
  },
  /**
   * Return the entityTypes from the state
   */
  getEntityTypes: state => state.entityTypes,
  /**
   * Return the editorEntityType form the state
   */
  getEditorEntityType: state => state.editorEntityType,
  /**
   * Return the alert from the state
   */
  getAlert: state => state.alert
}
