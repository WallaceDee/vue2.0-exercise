import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import exercise01 from '@/components/exercise01'
import page404 from '@/components/page404'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/exercise01/:userId',
    name: 'exercise01',
    component: exercise01
  }, {
    path: '/404',
    name: 'page404',
    component: page404
  }]
})
