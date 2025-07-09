import React from 'react'

export const SocialLogin = () => {
  return (
    <>
     <div className="flex flex-col gap-2">
      <button className="p-2 border border-blue-500 text-white rounded hover:bg-blue-500">Login with Facebook</button>
      <button className="p-2 border border-red-500 text-white rounded hover:bg-red-500">Login with Google</button>
    </div>
    </>
  )
}
