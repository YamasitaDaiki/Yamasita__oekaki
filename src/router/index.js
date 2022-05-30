import Vue from 'vue'
import VueRouter from 'vue-router'
import DrawTool from '../components/DrawTool.vue'
import ResultScreen from '../components/ResultScreen.vue'
import TestCar from '../components/TestCar.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DrawTool',
    component: DrawTool
  },
  {
    path: '/ResultScreen',
    name: 'ResultScreen',
    component: ResultScreen
  },
  {
    path: '/car',
    name: 'Test1',
    component: TestCar
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
