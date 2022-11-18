import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  //状态变量 —— 当前登录用户的用户名
  let [userName, setUserName] = useState("")  //空字符串表示尚未登录
  // let [userName, setUserName] = useState("yaya") //当前yaya用户登录
  //状态变量 —— 站内搜索中输入的查询关键字
  let [kw, setKw] = useState('')
  //调用钩子函数 —— 必须在组件最顶部
  let nav = useNavigate()
    
  //退出登录
  let logout = (e)=>{
    //console.log(e);  //此处JSX中的事件是“合成的虚拟事件”对象，功能与真实DOM中的事件对象一致
    //1.阻止超链接的默认行为（跳转动作）执行
    e.preventDefault()
    //2.清除此次登录的痕迹    
    delete localStorage['userToken']  //删除保存在本地缓存中的身份令牌
    //JS小知识点：delete关键字用于删除对象或类数组对象中的成员
    //3.跳转到登录页
    nav('/login') 
  }
  //处理搜索框中的输入改变事件
  let doKwChange = (e)=>{
    // console.log(e)               //虚拟事件对象
    // console.log(e.target)        //事件源对象 —— 此刻是一个受控组件
    // console.log(e.target.value)  //输入框中的最新输入内容
    let v = e.target.value
    //应用1：只允许在输入框中输入大写
    // v = v.toUpperCase()
    //应用2：不允许输入空白字符
    // v = v.trim()
    //应用3：长度不能超过6位
    //v = v.substring(0, 6)
    setKw(v)  //修改了模型变量，而此变量又控制着输入框的显示
  }
  return (
    <div className="header_box">
      <header className="header container">
        <h1 className="logo">
          <Link to="/" className="link"></Link>
        </h1>
        <div className="h_con">
          <ul className="clearfloat">
            <li className="phone">4000-585-116</li>
            <li>
              <Link to="/">中文</Link>
            </li>
            <li>
              <em>|</em>
            </li>
            <li>
              <Link to="/">English</Link>
            </li>
            <li>
              <Link to="/weixin" className="weixin"></Link>
            </li>
            <li>
              <Link to="/weibo" className="weibo"></Link>
            </li>
            {
              userName ? (
                <>
                  <li className="top_user">
                    <Link to="/ucenter">欢迎回来：{userName}</Link>
                  </li>
                  <li className="top_quit">
                    <Link onClick={logout}>退出</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="h_login">登录</Link>
                  </li>
                  <li><em>|</em></li>
                  <li>
                    <Link to="/register" className="h_register">注册</Link>
                  </li>
                </>
              )
            }
          </ul>
          <div className="search clearfloat">
            <button type="button"></button>
            <input value={kw} onChange={doKwChange} placeholder='站内搜索'/>
          </div>
        </div>
      </header>
      {/*nav*/}
      <nav className="navbar">
        <div className="container">
          <div className="nav">
            <ul>
              <li><a href="index.html"><span className="icon_home"></span>首页</a></li>
              <li><a href="about.html">关于净美仕</a></li>
              <li><a href="news.html">公司动态</a></li>
              <li className="nav_pd">
                <a href="product.html">产品中心<span className="icon_pd"></span></a>
                <div className="pd_dropdown">
                  <a href="product.html?type=1">净美仕净化器</a>
                  <a href="product.html?type=2">净美仕滤网</a>
                </div>
              </li>
              <li><a href="contact.html">联系我们</a></li>
            </ul>
          </div>
          <div className="s_cart">
            <a href="cart.html">
              <span className="icon_cart"></span>购物车(<strong id="cart_sum">0</strong>)<span className="icon_sj"></span>
            </a>
            <div className="cart_dropdown">
              {/*<h3>您的购物车为空~</h3>*/}
              <ul>
                {/*<li>*/}
                {/*<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>*/}
                {/*<div>*/}
                {/*<span>-</span><input type="text" value="2"/><span>+</span>*/}
                {/*</div>*/}
                {/*<strong>¥1599.00</strong>*/}
                {/*<em></em>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>*/}
                {/*<div>*/}
                {/*<span>-</span><input type="text" value="2"/><span>+</span>*/}
                {/*</div>*/}
                {/*<strong>¥1599.00</strong>*/}
                {/*<em></em>*/}
                {/*</li>*/}
              </ul>
              <div className="cd_js clearfloat">
                <span>共计：<strong>0.00</strong></span>
                <a href="#">结算</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
