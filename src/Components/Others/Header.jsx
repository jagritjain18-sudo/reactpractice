import React from 'react'

function Header ({data}) {
  console.log(data)
  return (
    <>
    <div className="flex justify-between ">
       <div> <h1 className='text-5xl font-medium '>Hello </h1>
        <h2 className='text-4xl font-semibold mt-1'>{data.firstName}✋</h2></div>
        <button className='bg-red-600 text-white px-10 py-1 rounded-lg font-medium m-5'>Login</button>
    </div>
    </>
  )
}

export default Header