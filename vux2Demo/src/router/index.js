import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Shop from '@/components/shop/Shop'
import Use from '@/components/use/Use'
import CitySelect from '@/components/city/CitySelect'
import FoodClas from '@/components/foodclas/FoodClas'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cityselect',
      component: CitySelect
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/use',
      name: 'use',
      component: Use
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/foodclas',
      name: 'foodclas',
      component: FoodClas
    }

  ]
})
