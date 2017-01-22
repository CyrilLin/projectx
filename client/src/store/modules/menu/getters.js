export const menuitems = state => state.items
export const componententry = state => {
  return state.items.filter(c => c.meta && c.meta.label === 'Components')[0]
}
