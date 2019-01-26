import Vue from 'vue'
import Router from 'vue-router'
import loginComponent from '@/pages/login'
import welcomeComponent from '@/pages/welcome'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: loginComponent
  }, {
    path: '/login',
    component: loginComponent
  }, {
    path: '/welcome',
    component: welcomeComponent
  }]
})
