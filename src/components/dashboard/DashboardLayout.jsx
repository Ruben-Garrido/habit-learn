import React from 'react'
import { Header } from './Header'
import { SideBar } from './SideBar'

export const DashboardLayout = ({children}) => {
  return (
    <>
    <div className='flex h-screen'>
      <SideBar />
            <div className='flex-1 flex flex-col'>
            <Header />
            <main className='p-6 bg-gray-100 flex-1 overflow-y-auto'>
                {children}
            </main>
            </div>
      </div>
    </>
  )
}
