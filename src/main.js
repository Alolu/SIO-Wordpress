// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */

store.dispatch('check_auth');

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isLoggedIn) {
    next({ path: '/login', query: { redirect: to.fullPath }});
  } else { next(); }

  if (to.matched.some(record => record.meta.requiresUnauth) && store.getters.isLoggedIn) {
    next('/');
  } else { next(); }
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
