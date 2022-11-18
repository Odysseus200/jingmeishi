import React, {useRef, useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  //状态变量 —— 当前登录用户的用户名
  let [userName, setUserName] = useState("")  //空字符串表示尚未登录
  // let [userName, setUserName] = useState("yaya") //当前yaya用户登录
  //状态变量 —— 是否显示购物车部分的下拉菜单
  let [showCartDropdown, setShowCartDropdown] = useState(false)
  //对象的引用 —— 类似于“三道杠”小牌牌
  let kwInput = useRef()
  //调用钩子函数 —— 必须在组件最顶部
  let nav = useNavigate()
  //调用钩子函数 —— 获得当前组件（Header）所在的页面的地址信息
  let {pathname, search} = useLocation()   
  //pathname：当前路由地址  search:查询字符串/搜索参数
    
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
  //开始搜索 
  let beginSearch = ()=>{
    //向服务器端提交搜索关键字
    console.log('正在向服务器提交搜索关键字：', kwInput.current.value)  //current：对象的引用（三道杠牌子）当前挂在哪个组件身上
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
            <button type="button" onClick={beginSearch}></button>
            <input ref={kwInput} placeholder='站内搜索'/>
          </div>
        </div>
      </header>
      {/*nav*/}
      <nav className="navbar">
        <div className="container">
          <div className="nav">
            <ul>
              <li className={pathname==="/" ? "cur" : undefined}>
                <Link to="/"><span className="icon_home"></span>首页</Link>      
              </li>
              <li className={pathname==="/about" ? "cur" : undefined}>
                <Link to="/about">关于净美仕</Link>
              </li>
              <li className={pathname==="/news" ? "cur" : undefined}>
                <Link to="/news">公司动态</Link>
              </li>
              <li className={pathname==="/product" ? "nav_pd cur" : "nav_pd"}>
                <Link to="/product">产品中心<span className="icon_pd"></span></Link>
                <div className="pd_dropdown">
                  <Link to="/product?type=1">净美仕净化器</Link>
                  <Link to="/product?type=2">净美仕滤网</Link>
                </div>
              </li>
              <li className={pathname==="/contact" ? "cur" : undefined}>
                <Link to="/contact">联系我们</Link>
              </li>
            </ul>
          </div>
          {/* 下拉菜单最外侧父元素 */}
          <div className="s_cart" onMouseEnter={()=>setShowCartDropdown(true)} onMouseLeave={()=>setShowCartDropdown(false)}>
            {/* 下拉菜单永远显示出来的部分 */}
            <Link to="/cart">
              <span className="icon_cart"></span>购物车(<strong id="cart_sum">0</strong>)<span className="icon_sj"></span>
            </Link>
            {/* 下拉菜单默认隐藏的部分（鼠标进入父元素区域后显示出来） */}
            <div style={{display:showCartDropdown?'block':'none'}} className="cart_dropdown">
              <h3>您的购物车为空~</h3>
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
