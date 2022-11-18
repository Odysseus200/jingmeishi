import React, { useEffect } from 'react'
import { newsDetail } from '../service'

export default function NewsDetails() {
  //生命周期方法 —— 组件挂载时
  useEffect(()=>{
    (async()=>{
      let data = await newsDetail(1)
      console.log(data)
    })()
  },[])
  return (
    <div>NewsDetails</div>
  )
}
