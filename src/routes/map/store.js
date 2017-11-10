
export default {
  '/store': {
    name: 'store',
    component (resolve) {
      require(['VIEW/store/'], resolve)
    },
     subRoutes: {
     	'/storePage': {
        name: 'storePage',
        component (resolve) {
          require(['VIEW/store/storePage'], resolve)
        }
      },
      '/itemPage/:itemCode': {
        name: 'itemPage',
        component (resolve) {
          require(['VIEW/store/itemPage'], resolve)
        }
      },
      '/addInvoice': {
        name: 'addInvoice',
        component (resolve) {
          require(['VIEW/store/addInvoice'], resolve)
        }
      },
      '/address': {
        name: 'address',
        component (resolve) {
          require(['VIEW/store/address'], resolve)
        }
      },
      '/createAddress/:type': {
        name: 'createAddress',
        component (resolve) {
          require(['VIEW/store/createAddress'], resolve)
        }
      },
      '/createOrder': {
        name: 'createOrder',
        component (resolve) {
          require(['VIEW/store/createOrder'], resolve)
        }
      },
      '/orderPayStatus': {
        name: 'orderPayStatus',
        component (resolve) {
          require(['VIEW/store/orderPayStatus'], resolve)
        }
      },
       '/payment/:orderNo': {
        name: 'payment',
        component (resolve) {
          require(['VIEW/store/payment'], resolve)
        }
      },
      '/shopCar': {
        name: 'shopCar',
        component (resolve) {
          require(['VIEW/store/shopCar'], resolve)
        }
      },
   
    }
  }
}
