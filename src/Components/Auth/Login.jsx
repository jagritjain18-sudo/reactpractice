import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const sumbitHandler=(e)=>{
    e.preventDefault();
    const loginSuccessful = handleLogin(email, password);
    if (loginSuccessful) {
      setEmail('');
      setPassword('');
    }
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='flex h-screen w-screen items-center  justify-center'>
        <form onSubmit={(e)=>{sumbitHandler(e)}} className='flex flex-col border-2 border-emerald-500  p-10 rounded-lg '>  
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}}required type="email" placeholder='Enter your Email' autoComplete="off" className='border-2 rounded-4xl text-lg text-center border-emerald-500 outline-none bg-transparent px-5 py-2 font-medium mt-10 placeholder:text-gray-400'/>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}}required type="password" placeholder='Enter your password' autoComplete='off' className='border-2 rounded-4xl text-lg text-center border-emerald-500 outline-none bg-transparent px-5 py-2 font-medium mt-10 placeholder:text-gray-400'/>
            <button type="submit" className='w-full border-2 rounded-4xl text-lg text-center outline-none px-5 py-2 font-medium mt-10 bg-emerald-500! border-emerald-500! text-white! cursor-pointer'>Login</button>
        </form>
    </div>
  )
}

export default Login