import React from 'react'

function TaskNumber(){
  return (
    <div className='flex justify-between mt-20 mb-20  overflow-hidden'>
    <div className='bg-red-600 rounded-4xl w-1/5 p-5 gap-5'><h1 className='text-3xl font-bold '>0</h1>
    <span className='text-2xl font-semibold'>New Task</span></div>
    <div className='bg-blue-800 rounded-4xl w-1/5 p-5 gap-5'><h1 className='text-3xl font-bold '>0</h1>
    <span className='text-2xl font-semibold'>New Task</span></div>
    <div className='bg-green-500 rounded-4xl w-1/5 p-5 gap-5'><h1 className='text-3xl font-bold '>0</h1>
    <span className='text-2xl font-semibold'>New Task</span></div>
    <div className='bg-yellow-400 rounded-4xl w-1/5 p-5 gap-5'><h1 className='text-3xl font-bold '>0</h1>
    <span className='text-2xl font-semibold'>New Task</span></div>
    </div>
  )
}

export default TaskNumber