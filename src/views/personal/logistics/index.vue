<template src="./tpl.html"></template>
<script type="text/javascript">
    import headNav from "COMPONENT/headNav"
    import HomeService from 'SERVICE/home'
    export default{
        components:{headNav},
        data () {
        return {
            expNo: '',
            logistics: '',
            type: 0,
            newLogistics:[]
        }
    },
    ready () {
        var _this = this;
//        隐藏最顶部导航栏
        _this.$dispatch('isshowheader', false);
        _this.expNo = this.$route.params.expNo;
        _this.express = this.$route.params.express;
        _this.getInfo();
    },


    methods: {
        getInfo () {
            var _this = this;
            _this.expNo = this.$route.params.expNo;
            HomeService
                    .fetchData('expressinfo',{
                        company:_this.express,no:_this.expNo
//                        company:"顺丰",no:"613645522106"
                    },'get')
                    .then((res) => {
                _this.info = res;
                _this.logistics = JSON.parse(_this.info.routeInfo);
                for (var i = _this.logistics.routes.length-1;i>=0; i--){
                    _this.newLogistics.push(_this.logistics.routes[i]);
                }
            });
        }
    },
    beforeDestroy(){
        this.$dispatch('isshowheader', true);
    }
    }
</script>
<style lang="less" rel="stylesheet/less">
    @import "./style/style.less";
</style>



