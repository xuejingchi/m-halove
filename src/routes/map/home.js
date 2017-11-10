import storeRoutes from './store'
import aboutRoutes from './about.js'
import personRoutes from './person.js'
import afterRoutes from './after.js'

const routes = Object.assign({}, storeRoutes,aboutRoutes,personRoutes,afterRoutes)

export default {
  /* 首页面router*/

  '/': {
    name:'home',
    component (resolve) {
      require(['VIEW/home/homepage'], resolve)
    },
    
    subRoutes: {
      '/homepage': {
        name: 'homepage',
        component (resolve) {
          require(['VIEW/home/homepage'], resolve)
        }
      },
      '/mark': {
        name: 'mark',
        component (resolve) {
          require(['VIEW/home/mark'], resolve)
        }
      },
    }
  },
  ...routes
}
