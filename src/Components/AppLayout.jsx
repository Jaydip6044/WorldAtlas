import React from 'react'
import Header from './UI/Header'
import Footer from './UI/Footer'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer className="absolute bottom-0 left-0 w-full bg-blue-500 text-white text-center py-2"/>
    </>
  )
}

export default AppLayout
