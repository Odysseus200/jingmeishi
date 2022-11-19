import React from 'react'
import { Link } from 'react-router-dom'

export default function Pagination({pageCount, pageNum, loadData}) {

  console.log('分页导航从父组件获取的属性数据：', pageCount, pageNum)
  //加载第n页数据
  let showPage = (e, n)=>{
    //阻止超链接的默认行为(即阻止页面跳转)
    e.preventDefault()
    if(n>0 && n<=pageCount){   //页号只能在 “1~总页数” 之间才能加载
      console.log('子组件：即将加载的页号：', n)
      //调用父组件通过属性传递来的方法
      loadData( n )
    }
  }
  return (
    <div className="pages">
      {/* 上一页 */}
      <Link onClick={e=>showPage(e, pageNum-1)} className={pageNum===1 ? 'default' : undefined}>上一页</Link>
      {/* 当前页-2 */}
      {pageNum-2>0 && <Link onClick={e=>showPage(e, pageNum-2)}>{pageNum-2}</Link>}
      {/* 当前页-1 */}
      {pageNum-1>0 && <Link onClick={e=>showPage(e, pageNum-1)}>{pageNum-1}</Link>}
      {/* 当前页 */}
      <Link className='cur'>{pageNum}</Link>
      {/* 当前页+1 */}
      {pageNum+1<=pageCount && <Link onClick={e=>showPage(e, pageNum+1)}>{pageNum+1}</Link>}
      {/* 当前页+2 */}
      {pageNum+2<=pageCount && <Link onClick={e=>showPage(e, pageNum+2)}>{pageNum+2}</Link>}
      {/* 下一页 */}
      <Link onClick={e=>showPage(e, pageNum+1)} className={pageNum>=pageCount ? 'default' : undefined}>下一页</Link>
    </div>
  )
}
