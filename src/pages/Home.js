import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NewsList from '../components/NewsList'
import { newsSelect } from '../service'

export default function Home() {
  //状态变量 —— 新闻列表
  let [newsList, setNewsList] = useState([])

  //副作用方法 —— 组件挂载时，异步请求服务器端新闻列表
  useEffect(()=>{
    (async()=>{
      let {data} = await newsSelect(4, 1)   //异步请求服务器端接口
      console.log(data)
      setNewsList(data)
    })()
  }, [])

  return (
    <>
      {/* F1：页头：顶部LOGO+导航条 */}
      <Header></Header>
      {/* F2：轮播广告 */}
      <Carousel></Carousel>
      {/* F3：页面主体 */}
      <div className="main container">
        <div className="ind_con1">
          <h2 className="title">
            <Link to="/product" className="more">more</Link>净美仕产品
          </h2>
          <ul className="clearfloat">
            <li>
              <Link to="/product?type=3" className="link">
                <img src="images/01.jpg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="/product?type=4" className="link">
                <img src="images/02.jpg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="/product?type=5" className="link">
                <img src="images/03.jpg" alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="ind_con2 clearfloat">
          <div className="ind_about">
            <h2 className="title">
              <Link to="/about" className="more">more</Link>关于净美仕
            </h2>
            <p>北京净美仕环境科技有限公司自诞生起一直关注人类呼吸健康的问题，并专注于室内空气质量的研究与改善。2003年，非典来袭，环境安全威胁到了每个人的生命，全国陷入一片恐慌。净美仕肩负着为人类创造健康安全生活环境的使命应运而生。2012年7月，亿朗以“净美仕(Mfresh)”为品牌重塑，以崭新的面貌屹立在净化行业。 
              <Link to="/about">查看更多</Link>
            </p>
          </div>
          <div className="ind_news">
            <h2 className="title">
              <Link to="/news" className="more">more</Link>公司动态
            </h2>
            <NewsList list={newsList}/> 
          </div>
        </div>
      </div>

      {/* F4：页尾 */}
      <Footer></Footer>
    </>
  )
}



