import 'es6-promise/auto'
import Vue from 'vue'
import i18n from '@molgenis/molgenis-i18n-js/dist/molgenis-i18n.esm'
import MgApp from './MgApp'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'
// You can use both the components found @https://bootstrap-vue.github.io/
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

// Or use manual bootstrap 4 from @https://v4-alpha.getbootstrap.com/getting-started/introduction/
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Keeps the router and the store in sync @https://github.com/vuejs/vuex-router-sync
sync(store, router)

Vue.use(BootstrapVue)

Vue.use(i18n, {
  lng: window.lng,
  fallbackLng: window.fallbackLng,
  namespace: 'navigator',
  callback () {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      store,
      router,
      template: '<MgApp />',
      components: { MgApp }
    })
  }
})
