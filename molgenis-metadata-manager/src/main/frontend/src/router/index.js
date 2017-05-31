import Vue from 'vue'
import Router from 'vue-router'
import MetadataManagerContainer from 'components/MetadataManagerContainer'
import { INITIAL_STATE } from '../store/state'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: INITIAL_STATE.baseUrl,
  routes: [
    {
      path: '/',
      name: 'metadata-manager-without-id',
      component: MetadataManagerContainer
    },
    {
      path: '/:entityTypeID',
      name: 'metadata-manager-with-id',
      component: MetadataManagerContainer,
      props: true // Pass entityTypeID as prop
    }
  ]
})
