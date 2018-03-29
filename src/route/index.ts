import Home from '@/views/Home.vue'
import ShoppingCard from '@/views/About.vue'
let Routes = {
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shoppingcard',
      name: 'shoppingcard',
      component: ShoppingCard
    }
  ]
}
export default Routes
