import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);

  const formChange = () => {
      setIsSignIn(!isSignIn)
  }

  return (
    <div className='relative'>
      <Header />
      <div className=''>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw" alt='background' className='w-full h-dvh'/>
      </div>
      <form className='bg-black/80 absolute top-40 mx-auto right-0 left-0 w-75 p-8 text-white bg-opacity-80'>
        <h1 className='font-bold'>{!isSignIn ? "Sign Up" : "Sign In"}</h1>
        {!isSignIn && <input type='text' placeholder='Full Name' className=' bg-gray-700 p-1.5 mt-4 w-full text-white'/>}
        <input type='text' placeholder='Email Address' className=' bg-gray-700 p-1.5 mt-4 w-full text-white'/>
        <input type='passowrd' placeholder='Password' className='bg-gray-700 p-1.5 mt-4 w-full text-white'/>
        <button className='cursor-pointer bg-red-700 w-full p-2 mt-5'>{!isSignIn ? "Sign Up" : "Sign In"}</button>
        <p className='mt-4 font-light cursor-pointer' onClick={formChange}>{!isSignIn ? "Already Registered? Sign In" : "New to Netflix? Sign Up Now"}</p>
      </form>
    </div>
  )
}

export default Login