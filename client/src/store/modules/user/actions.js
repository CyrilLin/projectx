import { http } from 'vue'
import {USER_LOGIN} from './mutation-types'

export function login ({ commit }, user) {
  return http.post('user/login', user)
      .then((response) => {
        commit(USER_LOGIN, response.body)
      })
}
