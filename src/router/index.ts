import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import CreatePoll from '../views/CreatePoll.vue'
import Vote from '../views/Vote.vue'
import Result from '../views/Result.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/create',
    name: 'createpoll',
    component: CreatePoll
  },
  {
    path: '/vote',
    name: 'vote',
    component: Vote
  },
  {
    path: '/result',
    name: 'result',
    component: Result
  }
]

const router = new VueRouter({
  routes
})

export default router
