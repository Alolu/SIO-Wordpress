import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Pricing from '@/components/Pricing'
import Login from '@/components/Login'
import Inscription from '@/components/Inscription'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Hello
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { requiresUnauth: true }
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: Inscription,
      meta: { requiresUnauth: true }
    }
  ]
})
