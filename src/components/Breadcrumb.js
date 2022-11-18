import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb({ list }) {
  //console.log('接收到父组件传递来的数据：', list) //此方法只调用一次
  return (
    <div className="breadcrumb">
      <div className="container">
        <h2>
          {list.map((p, i)=>(
            // 注意：此处的<></>必须用React.Fragment代替
            <React.Fragment key={i}>
              <Link to={p.href}>{p.title}</Link>
              { i<list.length-1 && '>' }
            </React.Fragment>
          ))}
        </h2>
      </div>
    </div>
  )
}
