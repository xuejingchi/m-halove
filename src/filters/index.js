/**
 * 此处须把所有过滤器全局化
 */
import Vue from 'vue'

Vue.filter('telephoneESP', require('./filters').telephoneESP)
Vue.filter('userDefault', require('./filters').userDefault)
Vue.filter('mapper', require('./filters').mapper)
Vue.filter('dateTimeFormatter', require('./filters').dateTimeFormatter)
Vue.filter('pricetoFixed', require('./filters').pricetoFixed)
Vue.filter('trim', require('./filters').trim)


