import React from 'react'

function AcceptTask  ({data})  {
    console.log(data)
  return (
    <>
        <div className='w-82 bg-amber-300 h-full rounded-4xl p-5 shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-4 py-1 text-m font-semibold'>{data.category}</h3>
                <h4 className='text-m font-bold'>{data.taskDate}</h4>
                </div>
                <h1 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h1>
                <p className='text-lg mt-2 font-medium'>{data.taskDescription}</p>
            <div className='flex  justify-between'>
                <button className='bg-green-500 p-1 rounded mt-5 text-sm'>Mark As Complete</button>
                <button className='bg-red-500 p-1 rounded mt-5 text-sm'>Mark As Failed</button>
            </div>
        </div>
    </>
  )
}

export default AcceptTask