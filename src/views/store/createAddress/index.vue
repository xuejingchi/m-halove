<template src="./tpl.html"></template>
<script type="text/javascript">
  import Util from 'UTIL/index'
   import HomeService from 'SERVICE/home'
	 import headNav from "COMPONENT/headNav"
   export default{
      components:{headNav},
			data () {
				return {
				  type: 0,//0表示新建  1表示修改
          addressId:"",
          pageTitle: '新建收货地址',
          addressInfo:{
            userName: "",
            phone: "",
            address: "城市选择",
            addressDetail: "",
            status: 2,
          },

				}
			},
			ready () {
        Util.statistics();
        var _this = this;
        _this.type = _this.$route.params.type;
        if(_this.type == 1){
           _this.addressId = Util.getStorage("addressId");
          HomeService
          .fetchData('getListById',{addressId:_this.addressId},'get')
          .then((res) => {
            var data = res;
            _this.addressInfo = {
              userName: data.ruserName,
              phone: data.phone,
              address: data.province+","+data.city+","+data.district,
              addressDetail: data.address,
              status:data.status
            } 
          });
          this.pageTitle = '修改收货地址'
        }
         var addressSelect = new LArea();
			    addressSelect.init({
			    'trigger': '#demo2',
			    'valueTo': '#value2',
			    'keys': {
			    id: 'value',
			    name: 'text'
			    },
			    'type': 2,
			    'data': [provs_data, citys_data, dists_data]
			    });
          this.$dispatch('isshowheader', false);

			},
			methods: {
        back () {
          Util.historyBack(this.$router);
        },
        setDefault () {
          var _this = this;
          if(_this.addressInfo.status == 1){
            _this.addressInfo.status = 2
          }else{
            _this.addressInfo.status = 1
          }
        },
        sureBtn () {
          var _this = this;
          if(_this.addressInfo.userName == "" ){
            swal("请填写收货人姓名");
            return false;
          }
          if(!Util.validate("phone",_this.addressInfo.phone)){
            swal("请正确填写收货人手机号");
            return false;
          }
          if(_this.addressInfo.address == ""){
            swal("请选择收货地址");
            return false;
          }
          if(_this.addressInfo.addressDetail == ""){
            swal("请填写具体收货地址");
            return false;
          }
          var  tempArray = _this.addressInfo.address.split(",");
          var obj = {
            ruserName: _this.addressInfo.userName,
            phone: _this.addressInfo.phone,
            country: "",
            province: tempArray[0],
            city: tempArray[1],
            district: tempArray[2],
            address: _this.addressInfo.addressDetail,
            status: _this.addressInfo.status
          };
         
          if(_this.type == 0){
             HomeService
            .fetchData('createAddress',obj)
            .then((res) => {
               
                swal({title:"新建成功!"},function(){
                  _this.$router.go({name:'address'});
                });
               
            });
          }else{
            obj.id = _this.addressId;
            HomeService
            .fetchData('changeAddress',obj)
            .then((res) => {
               swal({title:"修改成功!"},function(){
                Util.setStorage({name:"addressId",value:_this.addressId});
                _this.$router.go({name:'createOrder'});
              });
               
            });
          }

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






 						
