import React from 'react'

export const Header = () => {
  return (
    <>
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Dashboard</h1>
      <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">Salir</button>
    </header>
    </>
  )
}
