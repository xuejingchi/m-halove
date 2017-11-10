<template src="./tpl.html"></template>

<script type="text/javascript">
	import "./style/style.less"
	import HomeService from 'SERVICE/home'
	import Util from 'UTIL'

	export default{
		data () {
		return {
			list:false,
			type:1, //0 表示进入编辑状态
			typeText: '结算',
			num:0, //操作个数
			all: true,// 全选
			totalPrice:0,//总价
		}
	},

	created(){

	},

	ready () {
		Util.setStorage({name:'path',value:'carshop'})
		Util.deleteStorage("addressId");
		this.getList();
		Util.statistics();
	},

	methods: {
		getList (isCheck) {
			var _this = this;
			HomeService
					.fetchData('getShoppingCartByUID',{})
					.then((res) => {
				var list = [];
				if(res && res.orderInfoObject){
					list = res.orderInfoObject;
				}

				if(!isCheck){
					list.forEach(function(item,index){
						list[index].check = true;
					});
					_this.all = true;
				}else{
					list.forEach(function(item,index){
						list[index].check = false;
					});
					_this.all = false;
				}

				_this.list = list;
				_this.getPrice();
				_this.changeNum(); //获取选择数量
				// _this.num = _this.list.length;
			});
		},
		back () {
			Util.historyBack(this.$router);
		},
		edit () {
			var _this = this;
			_this.type = 0;
			_this.typeText = "删除";
			_this.all = false;
			_this.num = 0;
			_this.list.forEach(function (item,index) {
				_this.list[index].check = _this.all;
			});
		},
		save () {
			var _this = this;
			_this.type = 1;
			_this.typeText = "结算";
			_this.all = false;
			_this.num = 0;
			_this.list.forEach(function (item,index) {
				_this.list[index].check = _this.all;
			});
			_this.totalPrice = 0;
		},
		checkAll (event){
			var _this = this;
			_this.totalPrice = 0;
			_this.all = !_this.all;
			_this.list.forEach(function (item,index) {
				_this.list[index].check = _this.all;
				if(_this.all){
					_this.totalPrice += item.price*item.amount;
				}else{
					_this.totalPrice = 0;
				}
			})
			// if(_this.all){
			// 	_this.num = _this.list.length;

			// }else{
			// 	_this.num = 0;
			// }
			_this.changeNum();//获取选择商品数量
		},
		getPrice () {
			var _this = this;
			_this.totalPrice = 0;
			_this.list.forEach(function (item,index) {
				if(item.check){
					_this.totalPrice +=item.amount*item.price;
				}
			});

		},
		//将勾选类别数量==>勾选商品数量
		changeNum () {
			var _this = this;
			_this.num = 0;
			_this.list.forEach(function (item,index) {
				if(item.check){
					_this.num += item.amount;
				}
			});
		},
		checkOne (index){
			var _this = this;
			var num =0;
			_this.totalPrice = 0;
			_this.list[index].check = !_this.list[index].check;
			_this.list.forEach(function(item,index){
				if(!item.check){
					num++;
				}else{
					_this.totalPrice += item.amount*item.price;
				}
			});
			// _this.num = _this.list.length - num;
			_this.changeNum();//获取选择商品数量
			if(num == 0){
				_this.all = true;
			}else{
				_this.all = false;
			}
		},
		minus (index){
			var _this = this;
			if(_this.list[index].amount>1){
				_this.list[index].amount--;
				_this.getPrice();
				_this.changeNum();//获取选择商品数量

				var obj ={
					goodsCode: _this.list[index].goodsCode,
					amount: _this.list[index].amount,
					specs: _this.list[index].specs,
					reset: true
				};

				HomeService
						.fetchData('saveItem',obj)
						.then((res) => {
					_this.$parent.$root.fetchCar();
				});
			}

		},
		plus (index){
			var _this = this;
			if(_this.list[index].amount<99){
				_this.list[index].amount++;
				_this.getPrice();
				_this.changeNum();//获取选择商品数量

				var obj ={
					goodsCode: _this.list[index].goodsCode,
					amount: _this.list[index].amount,
					specs: _this.list[index].specs,
					reset: true
				};

				HomeService
						.fetchData('saveItem',obj)
						.then((res) => {
					_this.$parent.$root.fetchCar();
				});

			}

		},
		finishEdit () {
			var _this = this;
			if(_this.num == 0){
				swal("请选择商品");
				return false;
			}
			if(_this.type){//结算状态
				var obj = [];
				_this.list.forEach(function(item,index){
					if(item.check){
						obj.push(item);
					}
				});
				Util.setStorage({name:"items",value:JSON.stringify(obj)});
				_this.$router.go({name:'createOrder'});

			}else{//删除状态
				swal({
					title: "确定要删除此商品吗?",
					type: "warning",
					showCancelButton: true,
					confirmButtonText: "确定",
				},function(){
					var itemIds ='';
					_this.list.forEach(function(item,index){
						if(item.check){
							itemIds += item.id+",";
						}
					});
					itemIds = itemIds.substring(0,itemIds.length-1);
					HomeService
							.fetchData('batchDelete',{items:itemIds})
							.then((res) => {
						Util.notify("删除成功");
						_this.num = 0;
						_this.$parent.$root.fetchCar();
						_this.getList(1);
					});
				});
			}

		}
	}
	}

</script>
