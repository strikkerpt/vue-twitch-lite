import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Homepage from '@/pages/Homepage'
import Stream from '@/pages/Stream'
import Settings from '@/pages/Settings'
import Error from '@/pages/Error'
import Cookies from '@/util/cookies'

Vue.use(Router)
Vue.use(Meta)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/stream/:id',
      name: 'Stream',
      component: Stream
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/404',
      name: 'Error',
      component: Error
    },
    {
      path: '/*',
      redirect: '/404'
    }
  ]
})

// If no route is matched redirect home

router.beforeEach((to, from, next) => {
  if (!Cookies.getCookie('searchLength') || !Cookies.getCookie('incremental')) {
    Cookies.setCookie('searchLength', 10, 30)
    Cookies.setCookie('incremental', false, 30)
  }
  next()
})

export default router
