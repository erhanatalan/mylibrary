import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import NotFound from '../components/notFound/NotFound'
import About from '../pages/about/About'
import Detail from '../pages/detail/Detail'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import { GlobalStyles } from '../styles/Global.styles'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <GlobalStyles/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route  element={<PrivateRouter/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail:id' element={<Detail/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>



      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter