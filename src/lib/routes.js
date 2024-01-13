import router from 'page'

import Home from '../pages/Home.svelte'
import About from '../pages/About.svelte'
import NotFound from '../pages/NotFound.svelte'

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '*',
    component: NotFound
  }
]
