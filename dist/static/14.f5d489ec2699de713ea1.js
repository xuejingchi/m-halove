webpackJsonp([14,28],{1:function(e,t,r){function o(e,t){for(var r=0;r<e.length;r++){var o=e[r],i=u[o.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](o.parts[n]);for(;n<o.parts.length;n++)i.parts.push(l(o.parts[n],t))}else{for(var s=[],n=0;n<o.parts.length;n++)s.push(l(o.parts[n],t));u[o.id]={id:o.id,refs:1,parts:s}}}}function i(e){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],n=i[0],s=i[1],a=i[2],l=i[3],c={css:s,media:a,sourceMap:l};r[n]?r[n].parts.push(c):t.push(r[n]={id:n,parts:[c]})}return t}function n(e,t){var r=m(),o=v[v.length-1];if("top"===e.insertAt)o?o.nextSibling?r.insertBefore(t,o.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",n(e,t),t}function l(e,t){var r,o,i;if(t.singleton){var n=h++;r=g||(g=a(t)),o=c.bind(null,r,n,!1),i=c.bind(null,r,n,!0)}else r=a(t),o=p.bind(null,r),i=function(){s(r)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function c(e,t,r,o){var i=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var n=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(n,s[t]):e.appendChild(n)}}function p(e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=d(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,h=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=i(e);return o(r,t),function(e){for(var n=[],s=0;s<r.length;s++){var a=r[s],l=u[a.id];l.refs--,n.push(l)}if(e){var c=i(e);o(c,t)}for(var s=0;s<n.length;s++){var l=n[s];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete u[l.id]}}}};var _=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},74:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(2),n=o(i);t.default={data:function(){return{}},created:function(){n.default.statistics()}}},166:function(e,t,r){t=e.exports=r(3)(),t.push([e.id,".software-html img{display:block;width:100%;margin:0 auto;vertical-align:middle}.software-html .img1{min-height:15rem}",""])},187:function(e,t,r){var o=r(166);"string"==typeof o&&(o=[[e.id,o,""]]);r(1)(o,{});o.locals&&(e.exports=o.locals)},226:function(e,t){e.exports="<div class=software-html> <img src=https://image02.halove.com/website/halove_mobile_20170118/images/store_0418/Bg_product_1.png class=img1> <img src=https://image02.halove.com/website/halove_mobile_20170118/images/store_0418/Bg_product_2.png> <img src=https://image02.halove.com/website/halove_mobile_20170118/images/store_0418/Bg_product_3.png> <img src=https://image02.halove.com/website/halove_mobile_20170118/images/store_0418/Bg_product_4.png> <img src=https://image02.halove.com/website/halove_mobile_20170118/images/store_0418/Bg_product_5.png> <img src=https://image03.halove.com/website/halove_web/images/store_0418/Bg_product_6_4-20.png> <img src=https://image02.halove.com/website/halove_mobile_20170118/images/store_0418/Bg_product_7.png> <img src=https://image02.halove.com/website/halove_mobile_20170118/images/store_0418/Bg_product_8.png> </div>"},260:function(e,t,r){var o,i,n={};r(187),o=r(74),i=r(226),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(s.template=i),s.computed||(s.computed={}),Object.keys(n).forEach(function(e){var t=n[e];s.computed[e]=function(){return t}})}});