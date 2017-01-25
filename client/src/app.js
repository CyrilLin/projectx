import Vue from 'vue'
import Resource from 'vue-resource'
import NProgress from 'vue-nprogress'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'

Vue.use(Resource)
Vue.use(NProgress)

// Enable devtools
Vue.config.devtools = true
// set the API root so we can use relative url's in our actions.
Vue.http.options.root = 'http://localhost:3000'
Vue.http.options.emulateJSON = true

sync(store, router)

const nprogress = new NProgress({ parent: '.nprogress-container' })

const { state } = store

router.beforeEach((route, redirect, next) => {
  if (state.app.device.isMobile && state.app.sidebar.opened) {
    store.commit('TOGGLE_SIDEBAR', false)
  }

  if (route.path !== '/login' && !state.user.success) {
    return next('/login')
  }

  next()
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  router,
  store,
  nprogress,
  ...App
})

export { app, router, store }
