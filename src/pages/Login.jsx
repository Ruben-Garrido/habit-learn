import React, { useState } from 'react'
import { FormLogin } from '../components/login/FormLogin'
import { SocialLogin } from '../components/login/SocialLogin'

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Simulación de login
    setTimeout(() => {
      setLoading(false);
      // setError('Credenciales incorrectas'); // Descomenta para simular error
      console.log('Login submitted');
    }, 1000);
  };
  return (
    <>
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 to-green-400">
      <div className="bg-black p-8 rounded-lg shadow-lg text-white w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
        <FormLogin onSubmit={handleLogin} />
        {loading && <div className="text-center text-blue-300">Cargando...</div>}
        {error && <div className="text-center text-red-400">{error}</div>}
        <div className="my-4 text-center">or</div>
        <SocialLogin />
      </div>
    </section>
    </>
  )
}
