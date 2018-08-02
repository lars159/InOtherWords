 
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './views/Home/Home.vue'
import Coin from './components/Coin.vue'
import Setup from './views/Setup/Setup.vue'
import Score from './views/Score/Score.vue'
import Play from './views/Play/Play.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


Vue.use(VueRouter);
const components =  {
  'coin': Coin 
}
const routes = [
    { path: '/', component: Home },
    { path: '/setup', component: Setup },
    { path: '/score', component: Score },
    { path: '/play', component: Play }
  ]
   
  const router = new VueRouter({
    routes 
  })
   
 
const app = new Vue({
    router,
    components,
    el: '#app',
    render: h => h(App)
  })
   