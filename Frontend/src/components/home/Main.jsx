import React from 'react'
import { Header } from './Header'
import Footer from './Footer'
import { Outdent } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <div>
        <Header />        
        <Outlet />   {/*  placeholder for child routes */}
        <Footer />
      
    </div>
  )
}

export default Main