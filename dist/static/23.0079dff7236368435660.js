webpackJsonp([23,28],{80:function(e,o,i){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0}),i(208);var n=i(4),r=t(n),s=i(2),l=t(s);o.default={data:function(){return{loginParams:{phone:"",code:""}}},created:function(){this.$dispatch("isshowfooter",!1),l.default.getcookie("login")&&this.$router.go("/")},ready:function(){l.default.statistics()},beforeDestroy:function(){this.$dispatch("isshowfooter",!0)},methods:{sendCode:function(){var e=this;return e.loginParams.phone.length<11?void l.default.notify("请输入正确的手机号"):void r.default.fetchData("getVcode",{mobile:e.loginParams.phone},"post",!0).then(function(e){function o(){if(i<0)return $("#sendSuccess").show(),$("#showTime").hide(),$("#showTime").html("60&nbsp;秒"),void clearInterval(t);var e=i/1e3;i-=1e3,$("#showTime").html(e+"&nbsp;秒")}if(200!=e.code)return l.default.notify(e.msg),!1;$("#showTime").show(),$("#sendSuccess").hide();var i=59e3,t=setInterval(function(){o()},1e3)})},login:function(){var e=this,o=this;return o.loginParams.phone.length<11?void l.default.notify("请输入正确的手机号"):o.loginParams.code.length<4?void l.default.notify("请输入正确的验证码"):void r.default.fetchData("login",{mobile:o.loginParams.phone,vcode:o.loginParams.code},"post",!0).then(function(o){if(200==o.code){var i=e.$route.query.type;l.default.historyBack(e.$router,i),l.default.setcookie("login","true",8),e.$dispatch("addCarNum")}else l.default.notify(o.msg)})}}}},155:function(e,o,i){o=e.exports=i(3)(),o.push([e.id,".login-html{height:100%;text-align:center}.login-html .headIcon{width:4rem;height:4rem}.login-html .title{margin-top:.5rem;font-size:.8rem;color:#4a4a4a}.login-html .form-group{margin-top:3rem;position:relative}.login-html .form-group .input-span{border:1px solid #eaeaea;border-radius:5px;display:block;position:relative;padding:.2rem 0}.login-html .form-group .input{width:100%;border:none;outline:none;border-radius:5px;background:#fff;padding-left:.8rem;font-size:.7rem;height:1.6rem;line-height:1.6rem}.login-html .form-group .code{margin-top:.5rem}.login-html .form-group .send,.login-html .form-group .showTime{position:absolute;z-index:2;top:0;right:.8rem;height:2rem;font-size:.7rem;line-height:2rem;text-decoration:none;color:#ffda01}.login-html .form-group .showTime{display:none}.login-html .btn-cover{margin-top:1rem;text-align:center}.login-html .btn-cover input{font-size:.8rem;background:#ffc100;border:0;border-radius:5px;color:#fff;width:100%;height:2rem;line-height:2rem}",""])},208:[308,155],232:function(e,o){e.exports='<div class="col-xs-12 login-html"> <div class=col-xs-12 style=margin-top:3rem> <img src=https://image03.halove.com/website/halove_mobile_20170118/images/headerIcon.png class=headIcon /> </div> <div class="col-xs-12 title"> 登录九爱 </div> <div class="col-xs-12 form-group"> <span class=input-span> <input id=phoneno maxlength=11 type=number placeholder=请输入您的手机号 class="input phone" v-model=loginParams.phone /> </span> <span class="input-span code"> <input id=codeno maxlength=11 type=number placeholder=验证码 class=input v-model=loginParams.code /> <div id=sendSuccess @click=sendCode() class=send>发送验证码</div> <div id=showTime class=showTime>60&nbsp;秒</div> </span> </div> <div class="col-xs-12 btn-cover"> <input @click=login() type=button value=登录 /> </div> </div> '},265:[309,80,232]});