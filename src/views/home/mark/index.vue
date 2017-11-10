<template src="./tpl.html"></template>
<script type="text/javascript">
import util from 'UTIL'
	 export default{
			data () {
				return {
				
				}
			},

			ready () {
				util.changePage(this);
				Util.statistics();
			},
			
			methods: {
				submit () {
					//需调整
					var BASEURL="https://www.halove.com";
					var tel = $("#phoneNo").val();
	        if (tel.length<11){
	            alert("请输入正确的手机号！");
	            return;
	        }
	        $.ajax({
	            url:BASEURL+'/v1/ucweb/reserve/save',
	            dataType:'json',
	            data:{name:"薛",phone:tel,address:"杭州"},
	            type:'post',
	            success:function(response){
	                if (response.code == 200){
	                    $("#showSuccess").show();
	                } else {
	                    alert(response.msg);
	                }
	            },
	        })
				}
			}

	}
</script>
<style lang="less" rel="stylesheet/less">
  @import "./style/style.less";
</style>



