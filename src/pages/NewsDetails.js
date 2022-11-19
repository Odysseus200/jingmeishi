import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { newsDetail } from '../service'
import { date } from '../util'

export default function NewsDetails() {
  //使用钩子读取路由参数/搜索参数
  let [params] = useSearchParams()
  //状态变量 —— 新闻详情
  let [news, setNews] = useState({})
  //普通变量(更新后不会重新渲染) —— 面包屑导航中的路径列表(不需要更新)
  const pathList = [
    { pid: 10, title: '首页', href: '/' },
    { pid: 15, title: '新闻中心', href: '/news' },
    { pid: 18, title: '新闻详情', href: '/news_details' },
  ]
  //生命周期方法 —— 组件挂载时
  useEffect(() => {
    (async () => {
      //1.读取上个页面传递来的路由参数：新闻编号(nid)
      let nid = params.get('nid')
      //2.根据新闻编号查询服务器端接口，获取新闻详情
      let data = await newsDetail(nid)
      console.log(data)
      setNews(data)
    })()
  }, [])
  return (
    <>
      {/* F1：页头 */}
      <Header />
      {/* F2：面包屑 */}
      <Breadcrumb list={pathList} />
      {/* F3：主体 */}
      <div className="main container">
        <div className="news_details">
          <h2>{news.title}</h2>
          <span>发布时间：{date(news.pubTime)}</span>
          <div className="news_content">
            {news.content}
          </div>
        </div>
      </div>
      {/* F4：页尾 */}
      <Footer />
    </>
  )
}
