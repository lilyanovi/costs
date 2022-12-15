import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page404 from '../views/Page404.vue'
import AboutView from '../views/AboutView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: "/:mode/payment/:type?",
        name: "form",
        component: () => import('../views/PaymentsPage.vue'),
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/404',
    name: 'NotFound',
    component: Page404
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
