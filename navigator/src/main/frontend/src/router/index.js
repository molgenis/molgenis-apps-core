import Vue from 'vue'
import Router from 'vue-router'
import Navigator from 'components/Navigator'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // Set base URL which is provided by the server
  // e.g. navigator base URL is /menu/main/navigator
  base: window.__INITIAL_STATE__.baseUrl,
  routes: [
    {
      path: '/',
      component: Navigator
    },
    {
      path: '/:package',
      component: Navigator
    }
  ]
})
