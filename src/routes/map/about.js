
export default {
  '/about': {
    name: 'about',
    component (resolve) {
      require(['VIEW/about/'], resolve)
    },
     subRoutes: {
      '/aboutUs': {
        name: 'aboutUs',
        component (resolve) {
          require(['VIEW/about/aboutUs'], resolve)
        }
      },
      '/download': {
        name: 'download',
        component (resolve) {
          require(['VIEW/about/download'], resolve)
        }
      },
      '/service': {
        name: 'service',
        component (resolve) {
          require(['VIEW/about/service'], resolve)
        }
      },
      '/software': {
        name: 'software',
        component (resolve) {
          require(['VIEW/about/software'], resolve)
        }
      },
     '/partner': {
         name: 'partner',
         component (resolve) {
             require(['VIEW/about/partner'], resolve)
         }
     },
     '/contactUs': {
         name: 'contactUs',
         component (resolve) {
             require(['VIEW/about/contactUs'], resolve)
         }
     },
     '/footStep': {
         name: 'footStep',
         component (resolve) {
             require(['VIEW/about/footStep'], resolve)
         }
     },
    }
  }
}
