import router from 'page'

import Home from '../pages/Home.svelte'
import About from '../pages/About.svelte'
import Blog from '../pages/Blog.svelte'
import NotFound from '../pages/NotFound.svelte'

export default [
  {
    path: '/',
    component: Home,
    pageId: 'home'
  },
  {
    path: '/blog',
    component: Blog,
    pageId: 'blog'
  },
  {
    path: '/about',
    component: About,
    pageId: 'about'
  },
  {
    path: '*',
    component: NotFound,
    pageId: 'notfound'
  }
]
