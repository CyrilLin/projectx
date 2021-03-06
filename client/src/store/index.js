import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'

import app from './modules/app'
import menu from './modules/menu'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,  // process.env.NODE_ENV !== 'development',
  modules: {
    app,
    menu,
    user
  },
  getters: {
    pkg: state => state.pkg
  },
  state: {
    pkg // package.json infomation
  }
})

export default store
