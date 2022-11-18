import React, { useEffect, useState } from 'react'
import { carouselSelect } from '../service'

export default function Carousel() {
  //状态变量 —— 轮播广告列表，Advertisement
  //后台API返回给前端的原始数据：
  let [adList] = useState(['广告1', '广告2', '广告3', '广告4'])

  //当前组件需要的数据格式：
  // let [adList] = useState([(<li key="0">广告1</li>), (<li key="1">广告2</li>), (<li key="2">广告3</li>), (<li key="3">广告4</li>)])

  //数组的映射(map)：自动遍历数组中每个元素，把其中的每个元素转换为另一个形式，重新组成一个新数组
  // let newList = adList.map( (ad, i)=>{  return (<li key={i}>{ad}</li>) } )
  //let newList = adList.map( (ad, i)=>(<li key={i}>{ad}</li>) )
  //console.log(newList)


  return (
    <div> 
      <ul>
        {/* newList */}
        { adList.map( (ad, i)=>(<li key={i}>{ad}</li>) ) }  
      </ul>
    </div>
  )
}
