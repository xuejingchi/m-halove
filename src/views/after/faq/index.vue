<template src="./tpl.html"></template>
<script type="text/javascript">
    import Util from 'UTIL'
    import  HomeService from 'SERVICE/home'

    export default {
        data () {
        return {
            item1050000: [],
            item1060000: [],
            item1070000: [],
            item1080000: [],
            item1090000: []
        }
    },

    ready (){
        var _this = this;
    },
    methods: {
        faqClick:function (e,id,i){
            var _this = this;
            var $param = $(e.target).parent().find(".link-box1").css("display");
            var $parentNode1 = $(e.target).parent();
            if ($param == "block"){
                $parentNode1.find(".link-box1").slideUp();
                $parentNode1.find("i").html("&#xe615;");
            } else {
//                HomeService
//                        .fetchData('faq',{columnCode:id,pageCount:1},'get')
//                        .then((res) => {
//                    _this.sellList.list[i].namePinyin = res;
//                    this.$nextTick(function(){
//                        $parentNode1.find(".link-box1").slideDown();
//                        $parentNode1.find("i").html("&#xe613;");
//                    })
//                })
                if ($parentNode1.find(".link-box1").length < 1){
                    const defer = $.Deferred();
                    const returnAll = false;
                    $.ajax({
                        type: 'get',
                        url: '/v1/cms/help/getHelpInfo',
                        data: {columnCode:id,pageCount:1}
                    }).done((res)=>{
                        if(returnAll){
                            defer.resolve(res);
                            return;
                        }
                        let data = res.data;
                        if(res.code == 51409){
                            if(url == '/shoppingcart/getShoppingCartByUID'){
                                window.location.href = "/login?type=car";
                            }else{
                                window.location.href = "/login?type=false";
                            }
                            return false;
                        }
                        if(!data)
                            return defer.resolve(null)
                        defer.resolve(data)
                    })
                .then((res) => {
                        if (id == 1050000){
                            _this.item1050000 = res.data.articles;
                        } else if (id == 1060000){
                            _this.item1060000 = res.data.articles;
                        } else if (id == 1070000){
                            _this.item1070000 = res.data.articles;
                        } else if (id == 1080000){
                            _this.item1080000 = res.data.articles;
                        } else if (id == 1090000){
                            _this.item1090000 = res.data.articles;
                        }
                        this.$nextTick(function(){
                            $parentNode1.find(".link-box1").slideDown();
                            $parentNode1.find("i").html("&#xe613;");
                        })
                    })
                    .fail()

                    return defer.promise()
                } else {
                    $parentNode1.find(".link-box1").slideDown();
                    $parentNode1.find("i").html("&#xe613;");
                }

                }
        }
    }

    }
</script>
<style lang="less" rel="stylesheet/less">
    @import "./style/style.less";
</style>
