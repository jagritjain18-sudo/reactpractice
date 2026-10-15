import React from 'react'

function CompleteTask ({data})  {
  return (
    <div className='w-82 bg-blue-500 h-full rounded-4xl p-5 shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-4 py-1 text-m font-semibold'>{data.category}</h3>
                <h4 className='text-m font-bold'>{data.taskDate}</h4>
                </div>
                <h1 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h1>
                <p className='text-lg mt-2 font-medium'>{data.taskDescription}</p>
        <button className='bg-green-500 mt-5 text-sm rounded text-center w-full p-1'>Completed</button>
    </div>
  )
}

export default CompleteTask