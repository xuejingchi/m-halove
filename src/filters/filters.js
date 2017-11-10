import MAPPER from 'UTIL/mapper'
var filters = {

  isNull: (val) =>{
    let reg = {
      undefined: true,
      null: true,
      NaN: true,
      " ": true,
      "-": true
    }
    if(reg[reg]){
      return '-'
    }else{
      return val
    }
  },

  trim:(val)=>{
    return val.trim();
  },

  /**
  *转化成以万为单位的数值
  *@param num 数值 必传
  *@param floatNum 保留小数位数
  *@param tax 车税
  *@param unit 单位
  */
  myriadFormate: (num, unit, tax, floatNum) =>{
    if(num){
      floatNum = floatNum?floatNum:2;
      unit = unit?unit:'';
      num = tax?num+tax:num;
      return (num/10000).toFixed(floatNum)+unit;
    }else{
      return '-'
    }

  },

  /**首付*/
  firstPay: (val) => {
    return (val*0.4/10000).toFixed(2);
  },

   /**价格保留两位小数*/
  pricetoFixed: (val) => {
    let num = Number(val).toFixed(2);
    return num;
  },

  /**月供*/
  monthPay: (val) => {
    return Number.parseInt(val*1.1392*0.6/24);
  },

  picturePosition: (code) => {
    let positionMap = ['','外观-左前','外观-右前','外观-正侧','外观-正前','外观-正后','车灯','轮胎','车内顶棚','车门','密封胶条','安全带根部','内饰-前排','内饰-后排','内饰-中控','内饰-仪表盘','变速杆','油门踏板','发动机机舱','后备箱','车身外观','发动机底盘'];
    return positionMap[code];
  },

  colorMap: (code) =>{
    let color = ['','黑色','白色','银灰色','深灰色','红色','蓝色','绿色','黄色','香槟色','紫色','橙色','棕色','其他',"灰色","米色","金色"];
    return color[code];
  },
  /**
  *车的标题 组装
  *@param  t1 品牌
  *@param  t2 车类型
  *@param  t3 哪一年的款
  *@param  t4 描述
  *@param  type 判断是否返回t1
  */
  carTitleName: (t1, t2, t3, t4,type) =>{
    t1 = t1?t1:'';
    t2 = t2?t2:'';
    t3 = t3?t3:'';
    t4 = t4?t4:'';
    if(type){
      return t2+' '+t4+' '+t3;
    }else{
      return t1+' '+t2+' '+t4+' '+t3;
    }

  },

/*
无图片显示的默认图片

*/
  defaultImg: (url) =>{
    if(url === null || url === undefined || url === "")
    {
      return "http://caogen-xcar-test.oss-cn-hangzhou.aliyuncs.com/h5/cardefault.png"
    }else
    {
      return url
    }
  },

// 店铺默认头像
  userDefault: (url) =>{
  
    if(url == "https://image02.halove.com/null" || url == "https://image01.halove.com/null" || url == "https://image03.halove.com/null" || !url)
    {
      return "https://image01.halove.com/website/halove_mobile_20170118/images/headerIcon.png"
    }else
    {
      return url
    }
  },

//店铺招牌默认
  branchDefault: (url) =>{
    if(url === null || url === undefined || url === "" || !url)
    {
      return "http://caogen-xcar-test.oss-cn-hangzhou.aliyuncs.com/h5/shopBg.png"
    }else
    {
      return url
    }
  },

  //替换enter键
  replaceEnter: (txt) =>{
    var str = txt+"";
    return str.replace(/\\n/g, '<br>');
  },

  /**
  * 个位数前加零
  * @param  {Number} val
  * @return {String/Number}
  */

  /* 相当于：
  var zerofill = function (val) {
    return val >=10 ? val : '0' + val
  };
  */

  /**
  * 格式化时间
  * @param  {Number} time 时间戳
  * @param  {Number} type 格式化类型
  * @return {String}
  */
  dateTimeFormatter: (time, type)=>{
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
  },

  mapper: (val,type)=>{
    return MAPPER[type][val]
  }
}


module.exports = filters;
