import React from 'react'
import { Link } from 'react-router-dom'

export default function Pagination({pageCount, pageNum}) {
  // console.log('分页导航组件从父组件获取的属性数据：', props)
  return (
    <div className="pages">
      {/* 上一页 */}
      <Link>上一页</Link>
      {/* 当前页-2 */}
      <Link>{pageNum-2}</Link>
      {/* 当前页-1 */}
      <Link>{pageNum-1}</Link>
      {/* 当前页 */}
      <Link className='cur'>{pageNum}</Link>
      {/* 当前页+1 */}
      <Link>{pageNum+1}</Link>
      {/* 当前页+2 */}
      <Link>{pageNum+2}</Link>
      {/* 下一页 */}
      <Link>下一页</Link>
    </div>
  )
}
