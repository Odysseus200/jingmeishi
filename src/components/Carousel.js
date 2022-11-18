import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { base, carouselSelect } from '../service'

export default function Carousel() {
  //状态变量 —— 轮播广告列表，Advertisement
  let [adList, setAdList] = useState([])
  //状态变量 —— 当前显示的是哪一个广告  current
  let [cur, setCur] = useState(0)
  //状态变量 —— 轮播广告是否正在自动运行
  let [isRunning, setIsRunning] = useState(true)

  //生命周期方法 —— 组件挂载时
  useEffect(() => {
    //异步请求服务器端接口，获取轮播数据
    (async () => {
      let data = await carouselSelect()
      // console.log(data)
      setAdList(data)//把查询到的响应主体赋值给状态变量
    })()
  }, [])

  //切换到上一个广告
  let prev = ()=>{
    let i = cur - 1
    i = i<0 ? adList.length-1 : i     //如果新的下标小于0了，需要重新变为3
    setCur(i)
  }
  //切换到下一个广告
  let next = ()=>{
    let i = cur + 1
    i = i>adList.length-1 ? 0 : i     //如果新的下标大于3了，需要重新变为0
    setCur(i)
  }
  //显示指定下标的广告
  let showAd = (event, index)=>{
    //阻止超链接的默认行为(不要跳转)
    event.preventDefault()
    //显示指定下标的广告
    setCur(index)
  }

  //生命周期方法 —— 广告列表adList有内容了 —— 副作用方法执行时会创建一个闭包对象，其中如果使用外部的状态数据，其值会一直保持初始状态；不论外界如何改变，闭包内的值都不再改变！！！
  useEffect(()=>{
    // console.log('adList被渲染出来了：', adList)
    //等到客户端获取到了服务器端的广告列表数据，再启动定时器开始轮播
    let timer = null
    if(adList.length>0){
      timer = setInterval(()=>{
        // console.log('定时器中的当前轮播下标：', cur)
        if(isRunning){      //只有当前轮播正在运行时，才切换到下一张
          let i = cur + 1   //切换到下一张广告
          i = i>adList.length-1 ? 0 : i
          setCur(i)
        }
      }, 2000)
    }
    return ()=>{    //当新的状态数据到来时，清除掉旧数据对应的资源
      if(timer!==null){
        clearInterval(timer)  //停止定时器
        timer = null          //让原来的定时器失去变量指向
      }
    }
  }, [adList, cur, isRunning]) //adList或cur任意一个发生改变，都要重新执行一个副作用方法，重新创建一个新的闭包，该闭包有最新的adList和cur的值
  
  return (
    <div className="banner" onMouseEnter={()=>setIsRunning(false)} onMouseLeave={()=>setIsRunning(true)}> 
      {/*图片列表*/}
      <ul>
        { adList.map( (ad, i)=>( 
          <li 
            key={i} 
            style={{
                    background: `url(${base + ad.pic}) center 0 no-repeat`, 
                    display: cur===i ? 'block' : 'none', 
                    zIndex: cur===i ? 20 : 10
                  }}>
              <Link to={ad.href} className="link"></Link>
          </li>
        ) ) }
      </ul>
      {/*左右箭头*/}
      <span className="cut prev" onClick={prev}></span>
      <span className="cut next" onClick={next}></span>
      {/*小圆点指示器*/}
      <div className="indicator">
        { adList.map( (ad, i)=>(
          <Link 
            key={i} 
            className={cur===i ? 'cur' : undefined}
            onClick={ e=>showAd(e, i) }>
          </Link>
        ) ) }
      </div>
    </div>
  )
}
