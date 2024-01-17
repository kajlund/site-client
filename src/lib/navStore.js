import { writable, get } from 'svelte/store'

const INITIAL = {
  activePage: 'home',
  showPopupMenu: false
}

const navStore = writable(INITIAL)

const store = {
  subscribe: navStore.subscribe,
  setActivePage: (pageId) => {
    navStore.update((values) => {
      return { ...values, activePage: pageId }
    })
  },
  setPopupMenu: (visible) => {
    navStore.update((values) => {
      return { ...values, showPopupMenu: visible }
    })
  },
  togglePopupMenu: () => {
    navStore.update((values) => {
      return { ...values, showPopupMenu: !values.showPopupMenu }
    })
  }
}

export default store