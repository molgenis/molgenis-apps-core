import Vue from 'vue'
import Router from 'vue-router'
import MetadataManagerContainer from 'components/MetadataManagerContainer'
Vue.use(Router)
export default new Router({
  mode: 'history',
  // Set base URL which is provided by the server
  // e.g. metadata-manager base URL is /menu/main/metadata-manager
  base: window.__INITIAL_STATE__.baseUrl,
  routes: [
    {
      path: '/',
      component: MetadataManagerContainer
    },
    {
      path: '/:entityTypeID',
      component: MetadataManagerContainer
    }
  ]
})
