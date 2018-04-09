import Dashboard from '@/views/Dashboard.vue'
import sign from '@/views/Sign.vue'
import redirect from '@/views/Redirect.vue'
/*! scaffold:import:route */

let Routes = {
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/sign',
      name: 'sign',
      component: sign
    },
    {
      path: '/redirect',
      name: 'redirect',
      component: redirect
    }
    /*! scaffold:insert:route */
  ]
}
export default Routes
