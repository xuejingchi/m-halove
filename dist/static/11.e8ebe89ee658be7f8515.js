webpackJsonp([11,28],{1:function(e,o,t){function r(e,o){for(var t=0;t<e.length;t++){var r=e[t],i=c[r.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](r.parts[n]);for(;n<r.parts.length;n++)i.parts.push(d(r.parts[n],o))}else{for(var a=[],n=0;n<r.parts.length;n++)a.push(d(r.parts[n],o));c[r.id]={id:r.id,refs:1,parts:a}}}}function i(e){for(var o=[],t={},r=0;r<e.length;r++){var i=e[r],n=i[0],a=i[1],s=i[2],d=i[3],f={css:a,media:s,sourceMap:d};t[n]?t[n].parts.push(f):o.push(t[n]={id:n,parts:[f]})}return o}function n(e,o){var t=m(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(o,r.nextSibling):t.appendChild(o):t.insertBefore(o,t.firstChild),g.push(o);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(o)}}function a(e){e.parentNode.removeChild(e);var o=g.indexOf(e);o>=0&&g.splice(o,1)}function s(e){var o=document.createElement("style");return o.type="text/css",n(e,o),o}function d(e,o){var t,r,i;if(o.singleton){var n=v++;t=h||(h=s(o)),r=f.bind(null,t,n,!1),i=f.bind(null,t,n,!0)}else t=s(o),r=l.bind(null,t),i=function(){a(t)};return r(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;r(e=o)}else i()}}function f(e,o,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(o,i);else{var n=document.createTextNode(i),a=e.childNodes;a[o]&&e.removeChild(a[o]),a.length?e.insertBefore(n,a[o]):e.appendChild(n)}}function l(e,o){var t=o.css,r=o.media,i=o.sourceMap;if(r&&e.setAttribute("media",r),i&&(t+="\n/*# sourceURL="+i.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var c={},p=function(e){var o;return function(){return"undefined"==typeof o&&(o=e.apply(this,arguments)),o}},u=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,g=[];e.exports=function(e,o){o=o||{},"undefined"==typeof o.singleton&&(o.singleton=u()),"undefined"==typeof o.insertAt&&(o.insertAt="bottom");var t=i(e);return r(t,o),function(e){for(var n=[],a=0;a<t.length;a++){var s=t[a],d=c[s.id];d.refs--,n.push(d)}if(e){var f=i(e);r(f,o)}for(var a=0;a<n.length;a++){var d=n[a];if(0===d.refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete c[d.id]}}}};var b=function(){var e=[];return function(o,t){return e[o]=t,e.filter(Boolean).join("\n")}}()},95:function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(4),n=r(i),a=t(2),s=r(a);o.default={data:function(){return{orderNo:"",info:!1}},ready:function(){var e=this;e.$dispatch("isshowheader",!1),e.getInfo(),s.default.statistics()},methods:{getInfo:function(){var e=this;s.default.getArgs("out_trade_no")&&(e.orderNo=s.default.getArgs("out_trade_no")),s.default.getArgs("orderNo")&&(e.orderNo=s.default.getArgs("orderNo")),n.default.fetchData("orderDetail",{orderNo:e.orderNo},"get").then(function(o){e.info=o})},cancelOrder:function(){var e=this,o=e.orderNo;swal({title:"您确定要取消订单吗？",type:"warning",showCancelButton:!0,closeOnConfirm:!1},function(){var t={orderNo:o,reason:""};n.default.fetchData("closeOrder",t).then(function(o){swal({title:"取消订单成功！"},function(){e.getInfo()})})})}},beforeDestroy:function(){this.$dispatch("isshowheader",!0)}}},179:function(e,o,t){o=e.exports=t(3)(),o.push([e.id,".order-status-html{background:#f7f7f7}.order-status-html label{font-size:.7rem}.order-status-html .head-cover{background:#eceef3}.order-status-html .order-info{background:#fff;padding-left:1rem;margin-top:.3rem;border-top:1px solid #eaeaea;border-bottom:1px solid #eaeaea;font-size:.8rem;padding-top:.8rem;padding-bottom:1rem}.order-status-html .order-info span{color:#9b9b9b}.order-status-html .order-info div{line-height:.67rem;padding-top:.5rem;font-size:.67rem}.order-status-html .shangping-info{background:#fff;margin-top:.3rem;border-top:1px solid #eaeaea;border-bottom:1px solid #eaeaea}.order-status-html .shangping-info .head-title{font-size:.7rem;padding:.83rem 1rem;color:#4a4a4a;padding-bottom:0}.order-status-html .shangping-info .inner{overflow:hidden;width:100%;padding:0 .83rem;margin-top:.83rem;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.order-status-html .shangping-info .inner .thumbPic{float:left;margin-right:1rem;height:3rem;width:3rem;overflow:hidden}.order-status-html .shangping-info .inner .thumbPic img{width:2.47rem;height:2.75rem;margin:.15rem .28rem}.order-status-html .shangping-info .inner .info{float:right;width:12rem;background:#fff;border:none;font-size:.67rem;line-height:1.1rem;border-bottom:1px solid #eaeaea;padding-bottom:.83rem}.order-status-html .shangping-info .inner .info div{color:#9b9b9b}.order-status-html .shangping-info .inner .info .title{color:#4a4a4a}.order-status-html .shangping-info .inner:last-child .info{border-bottom:none}.order-status-html .yunfei-info{margin-top:.3rem;height:6rem;background:#fff;border-top:1px solid #dcdcdc}.order-status-html .yunfei-info .line{padding-left:1rem;height:2rem;line-height:2rem;font-size:.7rem;color:#4a4a4a;border-bottom:1px solid #dcdcdc}.order-status-html .yunfei-info .line span{font-size:.67rem;float:right;padding-right:1rem}.order-status-html .yunfei-info .line .red{color:#e23c3c}.order-status-html .shouhuo-info{background:#fff;padding:1rem;margin-top:.5rem;border-top:1px solid #eaeaea;border-bottom:1px solid #eaeaea;font-size:.8rem}.order-status-html .shouhuo-info div{font-size:.67rem;padding-top:.2rem;color:#9b9b9b}.order-status-html .fapiao-info{background:#fff;padding:1rem;margin-top:.3rem;border-top:1px solid #eaeaea;border-bottom:1px solid #eaeaea;font-size:.67rem}.order-status-html .fapiao-info div{font-size:.67rem;padding-top:.2rem}.order-status-html .fapiao-info div span{color:#9b9b9b}.order-status-html .pay-info{width:100%;position:fixed;z-index:333333;height:2.1rem;line-height:2.1rem;bottom:0;font-size:.8rem;text-align:center;border-top:1px solid #eaeaea}.order-status-html .pay-info a{text-decoration:none}.order-status-html .pay-info .cancel{background:#fff;color:#ffc100;text-decoration:none}.order-status-html .pay-info .sure{background:#ffc100;color:#fff;text-decoration:none}.order-status-html .fapiao-tip{font-size:.6rem;padding:.5rem 1rem;color:#9b9b9b;line-height:.9rem}",""])},200:function(e,o,t){var r=t(179);"string"==typeof r&&(r=[[e.id,r,""]]);t(1)(r,{});r.locals&&(e.exports=r.locals)},245:function(e,o){e.exports='<div class=order-status-html v-if=info> <div class=head-cover> <div class=head> <a v-link="{name:\'shopCar\'}"> <img src=https://image03.halove.com/website/halove_mobile_20170118/images/backIcon.png alt=""> </a> 订单详情 </div> </div> <div class=order-info> <label>订单信息</label> <div>订单号：<span>{{info.orderNo}}</span></div> <div>下单时间：<span>{{info.createTime | dateTimeFormatter 2}}</span></div> <div>订单状态：<span>{{info.status | mapper \'orderStatus\'}}</span></div> </div> <div class=shangping-info> <div class=head-title>商品信息</div> <div class=inner v-for="goods in info.orderInfoObject.orderItems"> <div class=thumbPic> <img :src=goods.thumbPic alt=""/> </div> <div class=info> <div class=title>{{goods.goodsName}} </div> <div>{{goods.specs}}</div> <div>单价：¥ {{goods.price | pricetoFixed}}<div style=float:right>X{{goods.amount}}</div></div> </div> </div> </div> <div class=yunfei-info> <div class=line>商品总计<span> ¥ {{info.feeGoods | pricetoFixed}}</span></div> <div class=line>运费<span> ¥ {{info.feeExp | pricetoFixed}}</span></div> <div class=line>应付金额<span class=red>¥ {{info.feeTotal | pricetoFixed}}</span></div> </div> <div class=shouhuo-info> <label>收货信息</label> <div>{{info.orderInfoObject.address.contact}} {{info.orderInfoObject.address.phone}}</div> <div>{{info.orderInfoObject.address.province+info.orderInfoObject.address.city+info.orderInfoObject.address.district+info.orderInfoObject.address.address}}</div> </div> <div class=fapiao-info> <label>发票信息</label> <div>发票类型： <span v-if="info.orderInfoObject.invoiceInfo.mediaType == 2">电子发票</span> <span v-if="info.orderInfoObject.invoiceInfo.mediaType == 1">纸质发票</span> </div> <div>发票抬头： <span v-if="info.orderInfoObject.invoiceInfo.type == 1">{{info.orderInfoObject.invoiceInfo.name}}</span> <span v-if="info.orderInfoObject.invoiceInfo.type == 2">{{info.orderInfoObject.invoiceInfo.title}}</span> </div> <div>发票内容：<span>{{info.orderInfoObject.invoiceInfo.content}}</span></div> </div> <div class=fapiao-tip> 电子发票是税务局认可的有效收付款的凭证，既可用于售后服务，打印后也可用于企业报销。 </div> <div v-if="info.status==0"> <div style=height:2.1rem></div> <div class=pay-info> <a @click=cancelOrder() class="col-xs-6 cancel">取消订单</a> <a v-link="{name: \'payment\',params:{orderNo:info.orderNo}}" class="col-xs-6 sure">去付款</a> </div> </div> </div>'},280:function(e,o,t){var r,i,n={};t(200),r=t(95),i=t(245),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(a.template=i),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var o=n[e];a.computed[e]=function(){return o}})}});