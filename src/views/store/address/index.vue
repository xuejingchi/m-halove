<template src="./tpl.html"></template>
<script type="text/javascript">
   import Util from 'UTIL/index'
   import HomeService from 'SERVICE/home'
	 import headNav from "COMPONENT/headNav"
   export default{
      components:{headNav},
			data () {
				return {
				  info: false
				}
			},
			ready () {
        Util.statistics();
				var _this = this;
        HomeService
        .fetchData('addressList',{},'get')
        .then((res) => {
           _this.info = res;
           if(res.length == 0){
            Util.deleteStorage("addressId");
           }

        });
        this.$dispatch('isshowheader', false);
			},
			methods: {
        back () {
          Util.historyBack(this.$router);
        },
				deleteAddress (val,index) {
          var _this = this;
         
          swal({ 
          	title: "确定要删除该地址?",
          	 type: "warning", 
          	 showCancelButton: true,   
          	 confirmButtonText: "确定",   
          	},function(){
              HomeService
              .fetchData('deleteAdress',{addressId: val},'get')
              .then((res) => {
                
                 Util.notify("删除成功");
                 _this.info.splice(index,1);
             
              });
            });
          
         },
        updateAddress (val,index) {
           Util.setStorage({name:"addressId",value:val});
           this.$router.go({name:'createAddress',params:{type: 1}});

        },
        selectAddress (val,index) {
                    var _this = this;
                    _this.itemInfo = JSON.parse(Util.getStorage("items"));
                    var itemIds ='';
                    _this.itemInfo.forEach(function(item,index){
                        if(item.check){
                            itemIds += item.id+",";
                        }
                    });
                    itemIds = itemIds.substring(0,itemIds.length-1);
            HomeService
            .fetchData('prepareOrderByShoppingCartAndAddress',{items:itemIds,addressId:val},'')
                        .then((res) => {
//                    _this.info = res;
                        _this.expFee = res.feeExp;
                        Util.setStorage({name:'changeAddress',value:_this.expFee});
                        Util.setStorage({name:"addressId",value:val});
                        this.$router.go({name:'createOrder'});
//                    if(res.length != 0){
//                    }

                });

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



