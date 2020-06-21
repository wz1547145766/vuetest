import Vue from 'vue'
import VueRouter from 'vue-router'
import maincontext from '@/components/maincontext'
import sidemenu from '@/components/sidemenu'
import news from '@/components/news'
import login from '@/components/login'
import reg from '@/components/reg'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name :'maincontext',
      component: maincontext
    },
    {
      path: '/news',
      name :'news',
      component: news
    },
    {
      path: '/login',
      name :'login',
      component:login
    },
    {
      path: '/reg',
      name :'reg',
      component:reg
    },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: About
  // },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
