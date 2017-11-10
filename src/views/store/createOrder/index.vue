<template src="./tpl.html"></template>
<script type="text/javascript">
    import Util from 'UTIL/index'
    import HomeService from 'SERVICE/home'
    export default{
			data () {
				return {
           addressInfo: [],
           itemInfo: false,
           // type: 0, //有无addressId
           // mediaType: 1, //1是纸  2是电子 0不开
           // personType: 1, //1 个人  2 企业
           addressId:"",
           totalPrice:0,
           expTotalPrice:0,
           expFee:0, // 运费
           invoiceParams: {
             mediaType: 0,
             type: 0,
             invoiceName:"",
             invoiceEmail: "",
             invoiceTitle: ""
           },
           isBuy: true,
                  
				}
			},
			ready () {
        var _this = this;
        _this.$dispatch('isshowheader', false);
        if(Util.getStorage("items")){
           _this.itemInfo = JSON.parse(Util.getStorage("items"));
           _this.itemInfo.forEach(function (item,index) {
             _this.totalPrice += item.amount*item.price;
           })
//           if(_this.totalPrice<99){
//            _this.expFee = 15;
//           }
           _this.expTotalPrice = _this.expFee + _this.totalPrice;
         }else{
          _this.$router.go({name:'shopCar'});
         }

      
        if(Util.getStorage("addressId")){
            _this.addressId = Util.getStorage("addressId");
             HomeService
            .fetchData('getListById',{addressId: _this.addressId},'get')
            .then((res) => {
                _this.addressInfo = res;
                _this.addressId = res.id;
            });
//            后续进入获取运费

            _this.expFee = JSON.parse(Util.getStorage("changeAddress"));
            _this.expTotalPrice = _this.expFee + _this.totalPrice;
        }else{
           HomeService
          .fetchData('addressList',{},'get')
          .then((res) => {
            if(res.length!=0){
              _this.addressInfo = res[0];
              _this.addressId = res[0].id;
//第一次进入获取运费
//            var _this = this;
                _this.itemInfo = JSON.parse(Util.getStorage("items"));
                var itemIds ='';
                _this.itemInfo.forEach(function(item,index){
                    if(item.check){
                        itemIds += item.id+",";
                    }
                });
                itemIds = itemIds.substring(0,itemIds.length-1);
                HomeService
                        .fetchData('prepareOrderByShoppingCartAndAddress',{items:itemIds,addressId:_this.addressId},'')
                        .then((res) => {
                    _this.expFee = res.feeExp;
                    _this.expTotalPrice = _this.expFee + _this.totalPrice;
                });
            }
            
          });
        }
        //获取发票信息
        HomeService
        .fetchData('getInvoiceInfoByUid',{},'post')
        .then((res) => {
            if(res){
              _this.invoiceParams ={
                type: res.type,
                mediaType: res.mediaType,
                invoiceName: res.name,
                invoiceEmail: res.email,
                invoiceTitle: res.title
              }
            }
              
        });

			},
			methods: {

        buyNow () {
          var _this = this;
          //防止重复提交
          if(!_this.isBuy){
            Util.notify("正则提交订单...");
            return false;
          }
          var itemIds="";
          _this.itemInfo.forEach(function(item,index){
            itemIds += item.id+','
          });
          itemIds = itemIds.substring(0,itemIds.length-1);

          var objCart = {
            addressId:_this.addressId,
            clientMsg: "",
            couponNo: "",
            couponType: "",
            invoiceName: _this.invoiceParams.invoiceName,//发票
            invoiceEmail: _this.invoiceParams.invoiceEmail,
            invoiceTitle: _this.invoiceParams.invoiceTitle,
            invoiceMediaType:_this.invoiceParams.mediaType,
            invoiceType:_this.invoiceParams.type,
            items:itemIds
          };
          if(!objCart.addressId){
            swal("请选择地址");
            return false;
          }
           _this.isBuy = false; //进入请求
           HomeService
            .fetchData('genCartOrder',objCart,'post',true)
            .then((res) => {
              _this.isBuy = true;
              if(res.code == 200){
                _this.$parent.$root.fetchCar();
                _this.$router.go({name:'payment',params:{orderNo: res.data.orderNo}})
              }else{
                Util.notify(res.msg);
              }
            });

          // var obj = {
          //   addressId:_this.addressId,
          //   priceSpecId:"",
          //   amount:_this.itemInfo[0].amount,
          //   invoiceMediaType:_this.invoiceParams.mediaType,
          //   invoiceType:_this.invoiceParams.type,
          //   invoiceTitle:_this.invoiceParams.invoiceTitle,
          //   clientMsg:"",couponNo:"",
          //   couponType:"",
          //   goodsCode:_this.itemInfo[0].goodsCode,
          //   specs:_this.itemInfo[0].specs,
          //   feeChn:"alipay",
          //   invoiceName:_this.invoiceParams.invoiceName,
          //   invoiceEmail: _this.invoiceParams.invoiceEmail
          // }

          // var search = Util.getArgs("type");

          // if(!search){
            //  HomeService
            // .fetchData('genCartOrder',objCart,'post')
            // .then((res) => {
            //     _this.$router.go({name:'payment',params:{orderNo: res.orderNo}})
            // });
          // }else{
          //    HomeService
          //   .fetchData('createOrder',obj,'post')
          //   .then((res) => {
          //       _this.$router.go({name:'payment',params:{orderNo: res.orderNo}})
          //   });
          // }
					
        },
        back (){
          var _this = this;
          // Util.historyBack(_this.$router);
          _this.$router.go({name:'shopCar'});
        }
		
		},
    beforeDestroy(){
      this.$dispatch('isshowheader', true);
    },

	}
</script>
<style lang="less" rel="stylesheet/less">
  @import "./style/style.less";
</style>




