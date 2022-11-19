import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import NewsList from '../components/NewsList'
import { newsSelect } from '../service'
import Pagination from '../components/Pagination'

export default function News() {
  //普通变量(更新后不会重新渲染) —— 面包屑导航中的路径列表(不需要更新)
  const pathList = [
    { pid: 10, title: '首页', href: '/' },
    { pid: 15, title: '新闻中心', href: '/news' },
    { pid: 17, title: '新闻列表', href: '/news' },
  ]
  //状态变量 —— 新闻列表
  let [newsList, setNewsList] = useState([])
  //状态变量 —— 数据的总页数
  let [pageCount, setPageCount] = useState(9999)
  //状态变量 —— 当前显示的数据页号
  let [pageNum, setPageNum] = useState(1) //注意此处的初始值必须是1

  //副作用方法 —— 组件挂载+指定数据更新时，异步请求新闻列表
  useEffect(() => {
    (async () => {
      let data = await newsSelect(6, pageNum)//每页6条数据，要第pageNum页 
      // console.log('总页数：', data.pageCount)
      // console.log('当前页号：', data.pageNum)
      // console.log('当前页中的数据：', data.data)
      setPageCount(data.pageCount)    //总页数
      setPageNum(data.pageNum)        //当前页号
      setNewsList(data.data)          //当前页中的数据
    })()
  }, [pageNum])

  //加载第num页的数据
  let loadPageData = (num)=>{
    console.log('父组件：即将加载第num页数据：', num)
    setPageNum( num )  //修改了状态变量，会触发“依赖了该变量的副作用”方法
  }
  return (
    <>
      {/* F1：页头 */}
      <Header />
      {/* F2：面包屑 */}
      <Breadcrumb list={pathList} />

      {/* F3：页面主体 */}
      <div className="main container">
        <div className="news">
          {/* F3.1：新闻列表 */}
          <NewsList list={newsList} />
        </div>
        {/* F3.2：分页导航——需要“总页数(pageCount)”和“当前页号(pageNum)” */}
        <Pagination pageCount={pageCount} pageNum={pageNum} loadData={loadPageData}/>
      </div>

      {/* F4：页尾 */}
      <Footer />
    </>
  )
}
