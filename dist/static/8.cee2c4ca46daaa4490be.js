webpackJsonp([8,28],{5:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(2),s=o(r);t.default={props:["title"],data:function(){return{}},methods:{back:function(){s.default.historyBack(this.$router)}}}},7:function(e,t){e.exports="<div class=head> <a @click=back> <img src=https://image03.halove.com/website/halove_mobile_20170118/images/backIcon.png /> </a> {{title}} </div>"},8:[309,5,7],84:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(4),s=o(r),l=i(2),n=o(l);i(209);var a=i(8),d=o(a);t.default={components:{headNav:d.default},data:function(){return{listParams:{pageSize:50,pageNum:1},isempty:!1,listInfo:!1}},ready:function(){var e=this,t=this;t.$dispatch("isshowheader",!1),n.default.statistics(),s.default.fetchData("orderList",t.listParams,"get").then(function(i){t.listInfo=i,(!i||i.length<1)&&(e.isempty=!0)})},beforeDestroy:function(){this.$dispatch("isshowheader",!0)}}},156:function(e,t,i){t=e.exports=i(3)(),t.push([e.id,".order-list-html,body{background:#f7f7f7}.order-list-html{padding-bottom:1rem;min-height:100%}.order-list-html .list{background:#fff;border-top:1px solid #eaeaea;margin-top:.3rem}.order-list-html .list .num-box{height:1.6rem;line-height:1.6rem;font-size:.6rem;color:#9b9b9b;border-bottom:1px solid #eaeaea;overflow:hidden;width:100%}.order-list-html .list .num-box .bianhao{text-align:left;padding-left:.6rem;font-size:.6rem;float:left}.order-list-html .list .num-box .time{float:right;padding-right:.6rem;font-size:.6rem}.order-list-html .list .link-box{display:block;background:url(https://image01.halove.com/website/halove_mobile_20170118/images/nextIcon.png) no-repeat 16.8rem;background-size:.4rem .7rem}.order-list-html .list .link-box .inner:last-of-type .ineer-item .info{border-bottom:0}.order-list-html .list .link-box .inner{height:4.89rem;position:relative;overflow:hidden}.order-list-html .list .link-box .inner .ineer-item{display:flex;flex-wrap:nowrap;padding-left:1rem;padding-top:.93rem;padding-right:.8rem}.order-list-html .list .link-box .inner .ineer-item .block-img{width:3rem;height:3rem;padding:0;float:left}.order-list-html .list .link-box .inner .ineer-item .block-img img{width:2.47rem;height:2.75rem;margin:.15rem .28rem}.order-list-html .list .link-box .inner .ineer-item .item-text{font-size:.67rem;line-height:.67rem;color:#4a4a4a;width:10rem;padding-bottom:.25rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.order-list-html .list .link-box .inner .ineer-item .item-text .name{padding-bottom:.25rem}.order-list-html .list .link-box .inner .ineer-item .info{float:left;margin-left:.67rem;width:11.5rem;background:#fff;border:none;font-size:.67rem;line-height:1rem;border-bottom:1px solid #eaeaea;padding-bottom:.83rem}.order-list-html .list .link-box .inner .ineer-item .info div{color:#9b9b9b}.order-list-html .list .link-box .inner .ineer-item .info .title{color:#4a4a4a}.order-list-html .list .link-box .inner .phone-info{line-height:1rem;margin-top:1.2rem}.order-list-html .list .link-box .inner .phone-info .name{font-size:.7rem;color:#000}.order-list-html .list .link-box .inner .phone-info .price{font-size:.7rem;color:#000;padding-top:.2rem}.order-list-html .list .link-box .inner .phone-info .num{font-size:.7rem;color:#000;margin-top:-.4rem}.order-list-html .list .link-box .inner .pic{position:absolute;z-index:2;right:.8rem;top:1.8rem}.order-list-html .list .link-box .inner .pic img{width:.4rem;margin-top:.5rem}.order-list-html .list .pay-status{height:2rem;line-height:2rem;border-bottom:1px solid #eaeaea;border-top:1px solid #eaeaea;color:#9b9b9b;font-size:.67rem}.order-list-html .list .pay-status .num{padding-left:1rem}.order-list-html .list .pay-status .num label{color:#4a4a4a;padding-left:.2rem;padding-right:.2rem}.order-list-html .list .pay-status .price{text-align:left;padding-left:.5rem;font-size:.7rem}.order-list-html .list .pay-status .status{float:right;font-size:.7rem}.order-list-html .list .pay-status .status p{padding-right:1rem}.order-list-html .list .pay-status .status a{height:1.96rem;background:#febf2b;line-height:2rem;padding:0 10px;text-align:center;display:block;text-decoration:none;color:#fff;font-weight:100}",""])},209:function(e,t,i){var o=i(156);"string"==typeof o&&(o=[[e.id,o,""]]);i(6)(o,{});o.locals&&(e.exports=o.locals)},235:function(e,t){e.exports='<div class=order-list-html> <head-nav title=全部订单></head-nav> <div v-for="item in listInfo" class=list> <div class=num-box> <span class=bianhao>订单编号：{{item.orderNo}}</span> <span class=time>{{item.createTime | dateTimeFormatter 2}}</span> </div> <a class=link-box v-link="{name:\'orderDetail\',params:{orderNo: item.orderNo}}"> <div class=inner v-for="goods in item.orderInfoObject.orderItems"> <div class=ineer-item> <div class=block-img> <img :src=goods.thumbPic alt=""/> </div> <div class=info> <div class=title>{{goods.goodsName}} </div> <div>{{goods.specs}}</div> <div>单价：¥ {{goods.price | pricetoFixed}}<div style=float:right>x{{goods.amount}}</div></div> </div> </div> </div> </a> <div class=pay-status> <span class=num>共<label>{{item.goodsAmount}}</label>件商品</span> <span class=price>实付：￥{{item.feeTotal | pricetoFixed }}</span> <span v-if="item.status==0" class=status> <a v-link="{name: \'payment\',params:{orderNo:item.orderNo}}">去付款</a> </span> <span class=status> <p>{{item.status | mapper \'payStatus\'}}</p></span> </div> </div> <div class=isempty v-if=isempty> <img src=https://image03.halove.com/website/halove_mobile_20170118/images/icon_NoOrder.png /> <p class=des>暂无订单</p> <p class=see v-link="{name:\'storePage\'}">去逛逛</p> </div> </div> '},269:function(e,t,i){var o,r,s={};o=i(84),r=i(235),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var l="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;r&&(l.template=r),l.computed||(l.computed={}),Object.keys(s).forEach(function(e){var t=s[e];l.computed[e]=function(){return t}})}});