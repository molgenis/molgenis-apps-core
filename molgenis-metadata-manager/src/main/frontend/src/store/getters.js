export default {
  entityTypeID: state => state.route.params.entityTypeID,
  entityTypes: state => state.json.items,
  metadata: state => state.json.meta
}
