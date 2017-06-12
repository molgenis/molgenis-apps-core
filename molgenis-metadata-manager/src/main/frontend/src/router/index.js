import Vue from 'vue'
import Router from 'vue-router'
import MetadataManagerContainer from 'components/MetadataManagerContainer'
Vue.use(Router)
export default new Router({
  mode: 'history',
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
