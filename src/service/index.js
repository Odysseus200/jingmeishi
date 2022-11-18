/*****服务器端API及客户端请求技术的二次封装模块*****/
//服务器域名基础地址
export let base = 'https://www.codeboy.com/mfresh/'

//POST请求的公共选项
let postOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

/**
*API-1.1: 向购物车中添加商品
*请求参数：
*  pid-产品ID，必需
*请求头部：
*  authorization: token
*输出结果：
* {"code":1,"msg":"succ", "productCount":1}
* 或
* {"code":400}
*/
export let cartDetailAdd = async (pid)=>{
  let url = base + 'data/cart_detail_add.php'
  //localStorage.setItem() / .getItem() / removeItem() / clear()
  //delete localStorage[k]
  let token = localStorage['userToken']   //在客户端保存的用户身份令牌
  let res = await fetch( url, {
    ...postOptions,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'authorization': token,      //通过请求头方式向服务器提交身份令牌
    },
    body: `pid=${pid}`             //请求主体
  } )
  let data = await res.json()
  return data
}

/**
 * API-1.2
 */

/**
 * API-1.3
 */

/**
 * API-1.4
 */


/**
*API-2.1: 根据新闻ID返回新闻详情
*请求参数：
*  nid-新闻ID，必需
*输出结果：
*  {
*    "nid": 1,
*    ...
*  }
*/
export let newsDetail = async (nid)=>{
  let url  = base + 'data/news_detail.php?nid=' + nid
  let res = await fetch( url )
  let data = await res.json()
  return data
}

/**
*API-2.2: 按发布时间逆序返回新闻列表
*请求参数：
*  pageNum-需显示的页号；默认为1
*  pageSize-页面大小，一次最多可以返回的新闻条数；默认为6
*输出结果：
*  {
*    totalRecord: 58,
*    pageSize: 10,
*    pageCount: 6,
*    pageNum: 1,
*    data: [{},{} ... {}]
*  }
*/
export let newsSelect = async (pageSize=6, pageNum=1)=>{
  let url  = base + `data/news_select.php?pageSize=${pageSize}&pageNum=${pageNum}`
  let res = await fetch( url )
  let data = await res.json()
  return data
}


/**
 * API-3.1：
 */


/**
 * API-3.2：
 */


/**
*API-4.1: 验证电话号码是否已经存在
*请求参数：
*  phone-电话号码
*输出结果：
* {"code":1,"msg":"exist"}
* 或
* {"code":2,"msg":"non-exist"}
*/
export let userCheckPhone = async (phone)=>{
  let url = base + 'data/user_check_phone.php?phone=' + phone
  let res = await fetch(url)
  let data = await res.json()
  return data
}




/**
*API-4.3: 用户登录验证
*请求参数：
*  unameOrPhone-用户名或密码
*  upwd-密码
*输出结果：
* {"code":1,"uid":1,"uname":"test","phone":"13012345678"}
* 或
* {"code":400}
*/
export let userLogin = async (unameOrPhone, upwd)=>{
  let url  = base + 'data/user_login.php'
  let res = await fetch( url, {
    ...postOptions,
    body: `unameOrPhone=${unameOrPhone}&upwd=${upwd}`
  } )
  let data = await res.json()
  return data
}

/**
 * API-4.4
 */

/**
*API-5.1: 获得轮播广告数据
*输出结果：
* [{},{},{},...]
*/
export let carouselSelect = async ()=>{
  let url  = base + 'data/carousel_select.php'
  let res = await fetch( url )
  let data = await res.json()
  return data
}
