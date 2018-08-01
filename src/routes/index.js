import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Score from '../views/Score'
import Guess from '../views/Guess'

const routes = [
    { path: '/', component: Home },
    { path: '/score', component: Score },
    { path: '/guess', component: Guess }
  ]
   
  const router = new VueRouter({
    routes // short for `routes: routes`
  })
   
  const app = new Vue({
    router
  }).$mount('#app')
   