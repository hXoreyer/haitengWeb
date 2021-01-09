import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from "../views/Admin";
import PriceChange from '../components/PriceChange'
import others from '../components/others'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect: '/admin/pricechange',
    children:[
      {
        path: 'pricechange',
        name: 'PriceChange',
        component: PriceChange

      },
      {
        path: 'others',
        name: 'others',
        component: others
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
