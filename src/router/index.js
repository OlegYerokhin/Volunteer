import Vue from 'vue'
import VueRouter from 'vue-router'
import StartPage from '../components/StartPage.vue'
import Activities from '../components/Activities.vue'
import RoadToTheWest from '../components/RoadToTheWest.vue'
import HelpUs from '../components/HelpUs.vue'
import About from '../components/About.vue'
import Contacts from '../components/Contacts.vue'
import AboutCity from '../components/AboutCity.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities
  },
  {
    path: '/road-to-the-west',
    name: 'RoadToTheWest',
    component: RoadToTheWest
  },
  {
    path: '/help-us',
    name: 'HelpUs',
    component: HelpUs
  },
  {
    path: '/about-us',
    name: 'About',
    component: About
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/about-city',
    name: 'AboutCity',
    component: AboutCity
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
