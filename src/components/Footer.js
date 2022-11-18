import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="f_con clearfloat">
          <ul>
            <li>
              <h3>走进净美仕</h3>
              <Link to="/about">公司简介</Link>
              <Link to="/spirit">净美仕精神</Link>
              <Link to="/history">品牌历程</Link>
            </li>
            <li>
              <h3>成为合作伙伴</h3>
              <Link to="/provider">成为核心供应商</Link>
              <Link to="/ebusiness">电商经销入口</Link>
              <Link to="/proxy">成为线下代理商</Link>
            </li>
            <li>
              <h3>售后服务</h3>
              <Link to="/repair">在线报修</Link>
              <Link to="/policy">售后政策</Link>
              <Link to="/download">下载中心</Link>
            </li>
            <li>
              <h3>加入净美仕</h3>
              <Link to="/hire">招聘贤才</Link>
              <Link to="/contact">联系我们</Link>
              <Link to="/sitemap">网站地图</Link>
            </li>
          </ul>
          <span className="qrcode"></span>
          <div className="kefu">
            <h4>4000-585-116</h4>
            <span>周一至周日9:00-18:00</span>
            <Link to="/service">金 牌 客 服</Link>
          </div>
        </div>
        <div className="copyright">
          Copyright © 2014 Apple Inc 保留所有权利。使用条款|客户隐私政策        © 北京净美仕环境科技有限公司  京公安网安备 11010500896 | 京ICP备 12050755
        </div>
      </div>
    </footer>
  )
}
