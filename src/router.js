import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/gregslist',
    name: 'GregsList',
    component: loadPage('GregsListPage')
  },
  {
    path: '/gregslist/cars',
    name: 'Cars',
    component: loadPage('CarsPage')
  },
  {
    path: '/gregslist/houses',
    name: 'Houses',
    component: loadPage('HousesPage')
  },
  {
    path: '/gregslist/jobs',
    name: 'Jobs',
    component: loadPage('JobsPage')
  },
  {
    path: '/gregslist/pets',
    name: 'Pets',
    component: loadPage('PetsPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
