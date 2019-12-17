import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Vote from '../views/Vote.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/vote',
    name: 'vote',
    component: Vote
  },
]

const router = new VueRouter({
  routes
})

export default router
