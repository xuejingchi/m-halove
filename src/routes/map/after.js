
export default {
    '/after': {
        name: 'after',
        component (resolve) {
            require(['VIEW/after/'], resolve)
        },
        subRoutes: {
            '/repair': {
                name: 'repair',
                component (resolve) {
                    require(['VIEW/after/repair'], resolve)
                }
            }
        }
    }
}
