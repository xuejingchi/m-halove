<template src="./tpl.html"></template>
<script type="text/javascript">
   import HomeService from 'SERVICE/home'
   import Util from 'UTIL/index'
	 import headNav from "COMPONENT/headNav"
   export default{
      components:{headNav},
			data () {
				return {
				  mediaType: 1, //1是纸  2是电子
          type: 1, //1 个人  2 企业
          email: "",
          name: "",
          company: "",
				}
			},
			ready () {
        Util.statistics();
				var _this = this;
        _this.$dispatch('isshowheader', false);

          HomeService
          .fetchData('getInvoiceInfoByUid',{})
          .then((res) => {
              if(res){
                if(_this.mediaType != 0){
                  _this.mediaType = res.mediaType; 
                }
                if(_this.type != 0){
                  _this.type = res.type;
                }
                _this.email = res.email;
                _this.name = res.name;
                _this.company = res.title;
                _this.changeType(_this.type);
              }
              
           
          });

		
			},
			methods: {
				
          changeMediaType (mediaType) {
            this.mediaType = mediaType;
          },
          changeType (type) {
            var _this = this;
            this.type = type;
            if(type == 1){
                $("#personType").html("&#xe694;");
                $("#companyType").html("&#xe766;");
              }else{
                $("#personType").html("&#xe766;");
                $("#companyType").html("&#xe694;");
              }
           
          },
          submitInvoice (){
            var _this = this;
            var reg_email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;

            if(_this.mediaType == 1){
              if(_this.type == 1) {
                if(_this.name == ""){
                  swal({title:"请填写正确的发票信息!"})
                  return;
                }
              }else{
                if(_this.company == ""){
                  swal({title:"请填写正确的发票信息!"})
                  return;
                }
              }
            }else{

              if(_this.type == 1){
                if((_this.name == "" ) || (!_this.email.match(reg_email))){
                  swal({title:"请填写正确的发票信息!"})
                  return;
                }
              }else{
                if((_this.company == "" ) || (!_this.email.match(reg_email))){
                  swal({title:"请填写正确的发票信息!"})
                  return;
                }
              }
            }
            var obj = {
              title: _this.company,
              name: _this.name,
              email: _this.email,
              type: _this.type,
              mediaType: _this.mediaType
            };

             HomeService
            .fetchData('addInvoiceInfo',obj,'post')
            .then((res) => {
              _this.$router.go({name:'createOrder'});
             
            });
        }
			}

	}
</script>
<style lang="less" rel="stylesheet/less">
  @import "./style/style.less";
</style>






 						


					
