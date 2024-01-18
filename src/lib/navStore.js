import { writable, get } from 'svelte/store'

const INITIAL = {
  activePage: 'home',
  showPopupMenu: false,
  darkTheme: true
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
  },
  toggleTheme: () => {
    navStore.update((values) => {
      document.body.classList.toggle('light-theme')
      console.log(values.darkTheme)
      return { ...values, darkTheme: !values.darkTheme }
    })
  }
}

export default store