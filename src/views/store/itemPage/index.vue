<template src="./tpl.html"></template>
<script type="text/javascript">
	 import  params from './component_params'
	 import  procuct from './component_product'
	 import  HomeService from 'SERVICE/home'
   	 import  Util from 'UTIL'
   	 import  goodspec from './goodspec'
	 export default{
	 		components: {params,procuct,goodspec},

			data () {
				return {
					itemCode: this.$route.params.itemCode,
					propInfo: false,
					info: false,
					isSelect: false,
					specColor: {},
          			goodsSkus: [],
          			specs: '',
					specColorActive: {},
					specList:[],
					volume: false,
          			selectName: false,
					placeHolderProps: "",
					phoneColor: "",
					param: {
						color: '',
						volume: '',
						amount:1,
					}
				}
			},

			ready () {
        		Util.statistics();
				$(".tabBox").height($(window).height()-100);
				var $tabBox =  wrap.querySelectorAll('.tabBox')[0];
			    var windowWidth = document.body.clientWidth; 
			    $(".tabBox").width(2*windowWidth);
				$(".tabList").width(windowWidth);

			    var init={
			        translate:function(obj,windowWidth,star){
			            obj.style.webkitTransform='translate3d('+-star*windowWidth+'px,0,0)';
			            obj.style.transform='translate3d('+-star*windowWidth+',0,0)px';
			            obj.style.webkitTransition='all 0.3s ease-in-out';
			            obj.style.transition='all 0.3s ease-in-out';
			        } 
			    }

			    $(".tabClick li").on("click",function(){
			    	$(".tabList").scrollTop(0);
			    	$(this).addClass("active");
			    	$(this).siblings("li").removeClass("active");
			    	 var index = $(this).index();
			    	 init.translate($tabBox,windowWidth,index);
			    });

			    this.getData();
			},

			methods: {

				chooseSpec () {
					if(!this.isSelect) {

						var specDesc = '';
						this.specList.forEach(function(e, i) {
							e.itemSpecs[0].actived = 1;
							specDesc += e.itemSpecs[0].spec;
						});

						this.goodsSkus.forEach(function(e, i) {
							if(e.specDesc == specDesc) {
								this.phoneColor = e.pic;
							}
						});
						this.specs = specDesc;
					}
				 this.isSelect  = true;

				},

				close () {
					$("#specDef").show();
					$("#specSure").hide();
					this.isSelect = false
						},

				getData(){
				  HomeService
				  .fetchData('goodsDetail',{goodsCode: this.itemCode},'get')
				  .then((res) => {
					this.info = res;
					var val = this.info;

						this.specList = val.goodsInfoObject.goodsSpecTypes;
						this.goodsSkus = val.goodsInfoObject.goodsSkus;
						this.phoneColor = this.goodsSkus[0].pic;
						if(res.goodsInfoObject.propInfo){
							this.propInfo = res.goodsInfoObject.propInfo;
					  }

				  });
				},
				//添加购物车
				saveItem(type){
					if(type && !this.selectName){
						this.isSelect = true;
						var _this = this;
						var specDesc = '';
						this.specList.forEach(function(e, i) {
							e.itemSpecs[0].actived = 1;
							specDesc += e.itemSpecs[0].spec;
						});

						this.goodsSkus.forEach(function(e, i) {
							if(e.specDesc == specDesc) {
								_this.phoneColor = e.pic;
							}
						});
						this.specs = specDesc;
						return;
					}

					let itemInfo = this.info;
					let obj1 = [{
						amount: this.param.amount,
						goodsCode: itemInfo.code,
						goodsName: itemInfo.name,
						price: itemInfo.price,
						id: itemInfo.id,
						specs: this.specs,
						thumbPic: itemInfo.thumbPic
					}]
					Util.setStorage({name:"items",value:JSON.stringify(obj1)});
//					this.$router.go({name:'createOrder',query:{type: 1}})


					let param = this.param;
					let obj = {
						amount: param.amount,
						specs: this.specs,
						reset: false
					};
					obj.goodsCode = this.itemCode;
				  this.selectName = obj.specs;
							HomeService
				  .fetchData('saveItem',obj)
				  .then((res) => {
					this.isSelect = false;
					this.$dispatch('addCarNum',1);
					this.param.amount = 1;
					Util.notify('已加入购物车');
				  });
				},
				//立即购买
				buyNow(){
				  if(!this.selectName){
					this.isSelect = true;
					return;
				  }
				  let itemInfo = this.info;
				  let obj = [{
					amount: this.param.amount,
					goodsCode: itemInfo.code,
					goodsName: itemInfo.name,
					price: itemInfo.price,
					id: itemInfo.id,
					specs: this.specs,
					thumbPic: itemInfo.thumbPic
				  }]
				  Util.setStorage({name:"items",value:JSON.stringify(obj)});
				  this.$router.go({name:'createOrder',query:{type: 1}})
				},

				minus () {
					if(this.param.amount>1){
						this.param.amount = +this.param.amount-1;
					}
				},

				plus () {
					this.param.amount = +this.param.amount + 1;
				},

				initData(){
					let o = {};
					let i = 0;
					for(let l in this.specColor){
						o[i] = false;
						i++
					}
					o[0] = true;
					this.param.color = this.specColor[0].spec;
					this.specColorActive = o;
				},
			},

			events:{
				isSelect(code){
					this.isSelect = code;
				},
				'changeSpec':function(index){

					var specDesc = '';
					this.specList.forEach(function(e, i) {
						e.itemSpecs.forEach(function(f, j) {
							if(f.actived == 1) {
								specDesc += f.spec;
							}
						});
					});
					var _this = this;
					this.goodsSkus.forEach(function(e, i) {
						console.log(e);
						if(e.specDesc == specDesc) {
							_this.phoneColor = e.pic;
						}
					});
					this.specs = specDesc;
					console.log(this);
				},
				'changeSpec2':function(){
					if(!this.isSelect) {

						var specDesc = '';
						this.specList.forEach(function(e, i) {
							e.itemSpecs[0].actived = 1;
							specDesc += e.itemSpecs[0].spec;
						});

						var _this = this;
						this.goodsSkus.forEach(function(e, i) {
							if(e.specDesc == specDesc) {
								_this.phoneColor = e.pic;
							}
						});
						this.specs = specDesc;
					}
				}
			}

	}

</script>
<style lang="less" rel="stylesheet/less">
  @import "./style/style.less";
</style>




