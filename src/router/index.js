import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        next()
      }
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    firebase.auth().onAuthStateChanged((user, error) => {
      if (error) {
        next('/')
      } else {
        console.log(user)
        if (user) {
          next()
        } else {
          next('/')
        }
      }
    })
  } else {
    next()
  }
})

export default router
