var mapper = {
	validateMessage: {
		phone: '请正确输入手机号码',
		password: '请设置英文或者数字的密码',
		errorVaildCode: '验证码验证不通过',
		waitVailCode: '获取验证码过于频繁'
	},
  //支付状态
  payStatus: {
    0:'',
    1:'已经支付',
    2:'已经发货',
    3:'交易成功',
    4:'订单关闭',
    5:'到货付款'
  },
  //订单状态
  orderStatus:{
    0:'未支付',
    1:'等待发货',
    2:'已发货',
    3:'交易成功',
    4:'订单关闭',
    5:'到货付款'
  }
}

module.exports = mapper;
