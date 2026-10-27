import React from 'react'

function TaskNumber({data}){
  return (
    <div className='flex justify-between mt-10 mb-10  overflow-hidden'>
    <div className='bg-red-600 rounded-4xl w-1/5 p-5 gap-5'><h1 className='text-3xl font-bold '>{data.taskCounts.failed}</h1>
    <span className='text-2xl font-semibold'>Failed</span></div>
    <div className='bg-blue-800 rounded-4xl w-1/5 p-5 gap-5'><h1 className='text-3xl font-bold '>{data.taskCounts.active}</h1>
    <span className='text-2xl font-semibold'>Active</span></div>
    <div className='bg-green-500 rounded-4xl w-1/5 p-5 gap-5'><h1 className='text-3xl font-bold '>{data.taskCounts.completed}</h1>
    <span className='text-2xl font-semibold'>Completed</span></div>
    <div className='bg-yellow-400 rounded-4xl w-1/5 p-5 gap-5'><h1 className='text-3xl font-bold '>{data.taskCounts.newTask}</h1>
    <span className='text-2xl font-semibold'>New Task</span></div>
    </div>
  )
}

export default TaskNumber