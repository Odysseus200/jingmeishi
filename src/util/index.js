/*****工具(Utility)方法模块，实现类似于Vue.js中的过滤器功能******/

/**
 * 生成一个指定范围的随机数
 */

/**
 * 生成一个指定范围的随机颜色
 */

/**
 * 生成一个随机文件名
 */

/**
 * 把数字转换为货币格式
 */

/**
 * 把数字时间戳转换为日期格式
 */
export let date = (num)=>{
  //把参数字符串解析为整数数字
  num = parseInt(num)
  //把数字转换为日期对象
  let d = new Date(num)
  //从日期对象中读取需要的部分
  let yy = d.getFullYear()  //“年份”
  let mm = d.getMonth()+1   //“月份”
  mm = mm<10 ? '0'+mm : mm
  let dd = d.getDate()      //“日期”
  dd = dd<10 ? '0'+dd : dd
  return `${yy}-${mm}-${dd}`
}

/**
 * 把数字时间戳转换为日期时间格式
 */
 export let datetime = (num)=>{
 }