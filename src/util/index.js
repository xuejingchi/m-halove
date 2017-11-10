class Util {
  constructor() {

  }

  statistics(){
    // $('#statistics').html('');
  }

  changePage(obj, fn) {
    obj.$root.localPage = '';
    fn.call(obj.$route.path)
  }
    //文本超过一定高度显示省略号
  ellipsis(target) {
    $(target).each(function(i) {
      let divH = $(this).height();
      let $p = $("p", $(this)).eq(0);
      while ($p.outerHeight() > divH) {
        $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
      }

    })
  }

  setcookie(name, value, hours) {
    // let Days = 30;
    let exp = new Date();
    exp.setTime(exp.getTime() + (hours * 60 * 60 * 1000));
    document.cookie = name + "=" + decodeURI(value) + ";expires=" + exp.toGMTString();
  }

  deletcookie(name, value){
    this.setcookie(name,"",-1)
  }

  getcookie(name) {
    let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
      return (arr[2]);
    } else {
      return "";
    }
  }

  setStorage(obj) {
    var storage = window.localStorage;
    localStorage.setItem(obj.name, obj.value)
  }

  getStorage(key) {
    var storage = window.localStorage;
    return storage.getItem(key);
  }

  deleteStorage(key) {
    var storage = window.localStorage;
    return storage.removeItem(key);
  }

  GoTop() {
    $('html,body').animate({ scrollTop: '0px' }, 500);
  }

  validate(type, val) {
    if (/^(maxLength)/.test(type)) {
      let num = type.substr(9, type.length);
      num = +num;
      if (val.length == num) {
        // _this.toast('最多只能输入'+num+'位数');
        return false;
      }
    }
    switch (type) {
      case 'phone':
        // _this.toast('请输入正确的手机号码');
        return /^0?1[3|4|5|7|8][0-9]\d{8}$/.test(val);
      case 'password':
        // _this.toast('请输入英文和数字的密码');
        let length = val.length > 5
        return (/^[0-9a-zA-Z]*$/.test(val) && length);
      default:
        return false;
    }
  }

  //判断是否为空对象
  nullObject(obj) {
    let j = false;
    obj = typeof obj == 'object' ? obj : JSON.parse(obj);
    for (let item in obj) {
      return !j
    }
    return j;
  }

  //计算对象长度
  objectNum(obj) {
    let num = 0;
    obj = typeof obj == 'object' ? obj : JSON.parse(obj);
    for (let item in obj) {
      ++num
    }
    return num;
  }

  toFixed(val, num) {
    num = num ? num : 2;
    if (/\./.test(val)) {
      val = val.replace(/[^\d.\d]/g, "");
      val = val.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的.
      val = val.replace(/e/g, ".");
      val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
      let index = val.indexOf('.');
      let floatLen;
      if (index > -1)
        floatLen = val.substr(val.indexOf('.'), val.length).length;
      if (floatLen && floatLen > 2)
        val = (+val).toFixed(2);
    } else if (val.length > num) {
      val = val.substr(0, num);
    }

    return val;
  }

  starWith(text, current) {
    let reg = "^" + current;
    reg = new RegExp(reg)
    return reg.test(text);
  }

  /**
   * 格式化时间
   * @param  {Number} time 时间戳
   * @param  {Number} type 格式化类型
   * @return {String}
   */
  dateTimeFormatter(time, type) {
    let zerofill = val => val >= 10 ? val : '0' + val
    let date = new Date(time)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()

    switch (type) {
      case 0: // 01-05
        return `${zerofill(month)}-${zerofill(day)}`
      case 1: // 11:12
        return `${zerofill(hours)}-${zerofill(minutes)}`
      case 2: // 2015-01-05
        return `${year}-${zerofill(month)}-${zerofill(day)}`
      case 3: // 2015年5月
        return `${year}年${zerofill(month)}月`
      case 4: // 2015-01-05 11:12
        return `${year}-${zerofill(month)}-${zerofill(day)}  ${zerofill(hours)}:${zerofill(minutes)}`
      default: // 2015-01-05 11:12:13
        return `${year}-${zerofill(month)}-${zerofill(day)}  ${zerofill(hours)}:${zerofill(minutes)}:${zerofill(second)}`
    }
  }

  isMobile() {
    var check = false;
    (function(a) {
      if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  }

  historyBack(path,type) {   
    let beforeUrl = document.referrer;
    if (window.localStorage.router!== "undefined" || this.nullObject(history.state)){
      if(type && type == 'car' || beforeUrl.match('personalInfo')){
        window.location = document.referrer;
      }else{
        history.back();
      }
    }else{
      path.replace('/');
    }
  }

  notify(message) {
    // 异常提示框
    var dom = '<div class="notify">' +
      '<span class="notify-inner">' + message +
      '</span></div>';

    var $dom = $(dom);

    $('body').append($dom);

    setTimeout(function() {
      $dom.remove();
    }, 1000);

  }

  getArgs (key) {

    var args = {};
    if (location.search.split('?') < 2) {
      return null;
    }

    var search = decodeURIComponent(location.search); //包含中文特殊字符的解码
    search = search.split('?')[1].split('&');
    search.forEach(function(item) {
      var kv = item.split('=');
        args[kv[0]] = kv[1];
      });

    if (!args[key]) {
      args[key] = '';
    }
    return args[key];
  }



}

export default new Util();
