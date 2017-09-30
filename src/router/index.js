import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Hello from '@/components/Hello'
import Pricing from '@/components/Pricing'


Vue.use(Router)
Vue.use(Resource)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    }
  ]
})
