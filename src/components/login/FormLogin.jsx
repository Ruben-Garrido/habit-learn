import React from 'react'

export const FormLogin = ({onSubmit}) => {

  return (
    <>
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <input type="email" placeholder="Email" className="p-2 border border-blue-500 bg-black text-white rounded" required />
      <input type="password" placeholder="Password" className="p-2 border border-blue-500 bg-black text-white rounded" required />
      <button type="submit" className="p-2 border border-green-500 text-white rounded hover:bg-green-500 cursor-pointer">Login</button>
    </form>
    </>
  )
}
