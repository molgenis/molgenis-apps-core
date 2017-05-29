import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: undefined,
    query: undefined,
    packages: [],
    entities: [],
    selectedPackage: undefined,
    error: undefined
  },
  mutations: mutations,
  actions: actions,
  strict: true
})
