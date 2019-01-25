import Vue from 'vue'
import Router from 'vue-router'
import loginComponent from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: loginComponent
  }, {
    path: '/login',
    component: loginComponent
  }]
})
