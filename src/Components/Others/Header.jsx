import React, { useState } from 'react'

function Header ({data}) {
  const [name, setName] = useState(() => { 
    return data?.firstName || "Admin"
  })
  return (
    <>
    <div className="flex justify-between ">
       <div> <h1 className='text-5xl font-medium '>Hello </h1>
        <h2 className='text-4xl font-semibold mt-1'>{name}✋</h2></div>
        <button className='bg-red-600 text-white px-10 py-1 rounded-lg font-medium m-5'>Logout</button>
    </div>
    </>
  )
}

export default Header