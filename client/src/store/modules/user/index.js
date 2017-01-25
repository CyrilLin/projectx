import {USER_LOGIN, USER_LOGOUT} from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'
import Vue from 'vue'

const state = JSON.parse(window.localStorage.getItem('user')) || {}

const mutations = {
  [USER_LOGIN] (state, user) {
    window.localStorage.setItem('user', JSON.stringify(user))
    Object.assign(state, user)
  },

  [USER_LOGOUT] (state, user) {
    window.localStorage.removeItem('user')
    Object.keys(state).forEach(k => Vue.delete(state, k))
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
