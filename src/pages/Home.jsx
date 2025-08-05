import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <p >This is the starting point of our application.</p>
      <p>Feel free to explore the features and functionalities.</p>
      <button className='border-xd bg-black text-white'>
        <Link to="/login" aria-label="Ingresar al sistema">Ingresar</Link>
      </button>
    </>
  )
}
