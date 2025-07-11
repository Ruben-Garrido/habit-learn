import React from 'react'
import { FormLogin } from '../components/login/FormLogin'
import { SocialLogin } from '../components/login/SocialLogin'

export const Login = () => {

  const handleLogin = (e) => {//handlelogin = manejar el inicio de sesión
    e.preventDefault();
    // Aquí conectas con authService
    console.log('Login submitted');
  };
  return (
    <>
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 to-green-400">
      <div className="bg-black p-8 rounded-lg shadow-lg text-white w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
        <FormLogin onSubmit={handleLogin} />
        <div className="my-4 text-center">or</div>
        <SocialLogin />
      </div>
    </section>
    </>
  )
}
