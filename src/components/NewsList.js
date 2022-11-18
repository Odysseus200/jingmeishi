import React from 'react'
import { Link } from 'react-router-dom'
import { date } from '../util'

export default function NewsList(props) {
  //console.log('接收到父组件传递来的属性数据：', props)  //此处会执行两次

  return (
    <ul>
      {props.list.map((n, i)=>(
        <li key={i}>      
          <span>{date(n.pubTime)}</span>
          <Link to={`/news_details?nid=${n.nid}`}>{n.title}</Link>
        </li>
      ))}
    </ul>
  )
}
