import {USER_LOGIN, USER_LOGOUT} from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  user: {
    email: null,
    userId: null,
    password: null
  },
  isLogin: false,
  message: null
}

const mutations = {
  [USER_LOGIN] (state, user) {
    state.user = user.user
    state.isLogin = user.success
    state.message = user.message
  },

  [USER_LOGOUT] (state, user) {
    state.user = {}
    state.isLogin = false
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
