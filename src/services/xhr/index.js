import { rootPath } from 'CONF'
import Vue from 'vue'

const xhr = ({ url, body = null, method = 'get',returnAll = false }) => {
  const defer = $.Deferred()

  $.ajax({
    type: method,
    url: rootPath + url,
    data: body
    // xhrFields: { // 跨域允许带上 cookie
    //   withCredentials: [域名]
    // },
    // crossDomain: true
  })
  .done((res)=>{
    
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
  .fail()

  return defer.promise()
}

export default xhr
