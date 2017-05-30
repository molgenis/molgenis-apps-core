export default {
  getSelectedEntityType: state => {
    const entityTypeID = state.route.params.entityTypeID
    return state.entityTypes.filter(entityType => {
      return entityType.id === entityTypeID
    })[0]
  },
  getEntityTypes: state => state.entityTypes,
  getEditorEntityType: state => {
    return JSON.parse(JSON.stringify(state.editorEntityType))
  }
}
