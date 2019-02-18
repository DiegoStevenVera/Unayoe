import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import Login from '@/components/Login'
import Contact from '@/components/Contact'
import EvaluacionesRealizadas from '@/components/EvaluacionesRealizadas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/perfil'
    },
    {
      path: '/evaluacionesRealizadas',
      name: 'EvaluacionesRealizadas',
      component: EvaluacionesRealizadas
    }
  ]
})
