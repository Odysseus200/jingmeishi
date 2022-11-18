import React, { useEffect, useState } from 'react'
import { carouselSelect } from '../service'

export default function Carousel() {
  //状态变量 —— 轮播广告列表，Advertisement
  let [adList, setAdList] = useState([])

  //生命周期方法 —— 组件挂载时
  useEffect(() => {
    //异步请求服务器端接口，获取轮播数据
    (async () => {
      let data = await carouselSelect()
      console.log(data)
      setAdList(data)//把查询到的响应主体赋值给状态变量
    })()
  }, [])

  return (
    <div className="banner"> 
      {/*图片列表*/}
      <ul>
        <li style="background: url(images/banner_01.jpg) center 0 no-repeat; display: block;z-index: 20;"><a href="#" className="link"></a></li>
        <li style="background: url(images/banner_02.jpg) center 0 no-repeat;"><a href="#" className="link"></a></li>
        <li style="background: url(images/banner_03.jpg) center 0 no-repeat;"><a href="#" className="link"></a></li>
        <li style="background: url(images/banner_04.jpg) center 0 no-repeat;"><a href="#" className="link"></a></li>
      </ul>
      {/*左右箭头*/}
      <span className="cut prev"></span>
      <span className="cut next"></span>
      {/*小圆点指示器*/}
      <div className="indicator">
        <a href="" className="cur"></a><a href=""></a><a href=""></a><a href=""></a>
      </div>
    </div>
  )
}
