import xhr from './xhr/'

class HomeService {

  urlMapper (name){
    let mapper = {
      getVcode: '/getVcode', //获取验证码
      login: '/submitLogin', // 登录
      mark: '/reserve/save', //预约购买
      orderList: '/order/list', // 获取订单列表
      personalInfo: '/profile/get',//获取用户信息
      logout: '/logout',//退出登录
      addInvoiceInfo: '/invoiceinfo/addInvoiceInfo', //添加发票
      addressList: '/address/list', // 获取地址列表
      deleteAdress: '/address/delete', //删除地址
      createAddress: '/address/createAddress',//创建地址
      changeAddress: '/address/updateAddress',//修改地址
      getListById: '/address/getListById', //查询收货地址详情
      getInvoiceInfoByUid: '/invoiceinfo/getInvoiceInfoByUid', //获取发票信息
      createOrder: '/order/createOrder',//创建订单
      closeOrder: '/order/close',//取消订单
      orderDetail: '/order/detail' ,//订单详情
      pay: '/order/pay',//支付接口
      getShoppingCartByUID: '/shoppingcart/getShoppingCartByUID',//获取用户购物车,
      prepareOrderByShoppingCartAndAddress: '/order/prepareOrderByShoppingCartAndAddress',
      goodsList: '/goods/goodsList',//获取商品列表
      goodsDetail: '/goods/goodsDetail',//获取商品详情
      genCartOrder:'/order/genCartOrder',//从购物车生成订单
      saveItem:'/shoppingcart/saveItem',//保存购物车
      batchDelete:'/shoppingcart/batchDelete',//批量删除购物车
      getShoppingCartAmount:'/shoppingcart/getShoppingCartAmount',//获取购物车物品数量
      expressinfo:'/expressinfo',//获取购物车物品数量
      repairstores:'/repairstores',//获取维修门店信息
      provinces:'/provinces',//获取销售省份信息
      stores:'/stores',//获取销售商店
      province:'/stores/province',//获取销售商店
    }

    return mapper[name]
  }

  fetchData(urlName,param,method,returnAll) {
    method = method?method:'POST';
    let obj = {
      method: method,
      url: this.urlMapper(urlName),
      body: param
    }
    if(returnAll)
      obj.returnAll = returnAll;
    
    return xhr(obj)
  }

}

// 实例化后再导出
export default new HomeService()
