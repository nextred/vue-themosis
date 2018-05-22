import Vue from 'vue'
import Router from 'vue-router'
import Politique from '@/components/Politique'
import Sport from '@/components/Sport'
import Culture from '@/components/Culture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/politique'
    },
    {
      path: '/politique',
      name: 'politique',
      component: Politique
    },
    {
      path: '/sport',
      name: 'sport',
      component: Sport
    },
    {
      path: '/culture',
      name: 'culture',
      component: Culture
    }
  ]
})
