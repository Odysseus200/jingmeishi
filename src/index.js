import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import News from './pages/News'
import NewsDetails from './pages/NewsDetails'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import Register from './pages/Register'

//创建路由器对象，其中包含着一个路由列表(数组)，其中包含着若干路由
let router = createBrowserRouter([
  {path:'/', element:<Home/>},
  {path:'/about', element:<About/>},
  {path:'/cart', element:<Cart/>},
  {path:'/contact', element:<Contact/>},
  {path:'/login', element:<Login/>},
  {path:'/news', element:<News/>},
  {path:'/news_details', element:<NewsDetails/>},
  {path:'/product', element:<Product/>},
  {path:'/product_details', element:<ProductDetails/>},
  {path:'/register', element:<Register/>},
  {path:'/*', element:<NotFound/>},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}/>)
