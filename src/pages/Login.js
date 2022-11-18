import React from 'react'

export default function Login() {
  let doLogin = async ()=>{
    //向服务器端API发起异步的POST请求
    let url = "https://www.codeboy.com/mfresh/data/user_login.php"
    let options = {
      method: 'POST', //请求方法，默认值GET
      headers: {      //请求头部
        'Content-Type': 'application/x-www-form-urlencoded'
      }, 
      body: 'unameOrPhone=yaya&upwd=123456' //请求主体
      //body: {unameOrPhone: 'yaya', upwd: '123456'}  //无效的请求主体
    }
    let res = await fetch(url, options)
    let data = await res.json()
    console.log('登录结果：', data)
  }
  return (
    <>
      <div>Login</div>
      <button onClick={doLogin}>提交登录信息</button>
    </>
  )
}
