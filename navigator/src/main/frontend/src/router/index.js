import Vue from 'vue'
import Router from 'vue-router'
import Navigator from 'components/Navigator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navigator',
      component: Navigator
    }
  ]
})
