import Vue from 'vue'
import Router from 'vue-router'
import MgHello from 'components/MgHello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MgHello',
      component: MgHello
    }
  ]
})
