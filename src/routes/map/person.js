
export default {
  '/personal': {
    name: 'personal',
    component (resolve) {
      require(['VIEW/personal/'], resolve)
    },
     subRoutes: {
      '/orderList': {
        name: 'orderList',
        component (resolve) {
          require(['VIEW/personal/orderList'], resolve)
        }
      },
      '/personalInfo': {
        name: 'personalInfo',
        component (resolve) {
          require(['VIEW/personal/personalInfo'], resolve)
        }
      },
      '/orderDetail/:orderNo': {
        name: 'orderDetail',
        component (resolve) {
          require(['VIEW/personal/orderDetail'], resolve)
        }
      },
      '/logistics/:expNo/:express': {
        name: 'logistics',
        component (resolve) {
          require(['VIEW/personal/logistics'], resolve)
        }
      }
    }
  }
}
