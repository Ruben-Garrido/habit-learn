import React from 'react'
import logo from '../../assets/images/LogoHabitLearn.png'

export const SideBar = () => {
  return (
    <>
    <aside className='bg-[#22d1a5] text-white w-64 p-6'>
        <div className='flex items-center mb-8'>
            <img src={logo} alt="Habit Learn Logo" className='w-16 h-auto mr-4 rounded' />
            <h2 className='text-2xl font-bold mb-6'>Habit Learn</h2>
        </div>
        
        <ul className='space-y-4'>
            <li className='hover:bg-[#1e9b8c] p-2 rounded cursor-pointer'>Home</li>
            <li className='hover:bg-[#1e9b8c] p-2 rounded cursor-pointer'>Habit Tracker</li>
            <li className='hover:bg-[#1e9b8c] p-2 rounded cursor-pointer'>Daily Lesson</li>
        </ul>
    </aside>
    </>
  )
}
