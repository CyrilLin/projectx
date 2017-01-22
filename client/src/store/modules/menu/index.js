import * as types from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'

import lazyLoading from './lazyLoading'
import charts from './charts'
import uifeatures from './uifeatures'
import components from './components'
import tables from './tables'

// show: meta.label -> name
// name: component name
// meta.label: display label

const state = {
  items: [
    {
      name: '我的账户',
      path: '/account',
      meta: {
        icon: 'fa-id-card-o'
      },
      component: lazyLoading('account', true)
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      meta: {
        icon: 'fa-tachometer'
      },
      component: lazyLoading('dashboard', true)
    },
    {
      name: '候选人',
      path: '/mycandicates',
      meta: {
        icon: 'fa-users',
        expanded: false
      },
      component: lazyLoading('mycandicates', true),

      children: [
        {name: '待面试', path: 'interview', component: lazyLoading('mycandicates/interview')},
        {name: '已面试', path: 'interviewed', component: lazyLoading('mycandicates/interviewed')}
      ]
    },
    {
      name: '管理模版',
      path: '/mytemplates',
      meta: {
        icon: 'fa-puzzle-piece'
      }
    },
    charts,
    uifeatures,
    components,
    tables
  ]
}

const mutations = {
  [types.EXPAND_MENU] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
