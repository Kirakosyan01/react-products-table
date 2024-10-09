import React from 'react'
import Navigation from '../Navigation/Navigation'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='flex flex-col px-24'>
        <Navigation />
        <Outlet />
    </div>
  )
}
