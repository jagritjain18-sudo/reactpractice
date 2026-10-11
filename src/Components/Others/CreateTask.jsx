import React from 'react'

function CreateTask (){
  return (
    <div className=' p-5 bg-[#2C2D2D] mt-7 rounded'>
        <form className='flex flex-wrap w-full items-start justify-between p-4'>
            <div className='w-1/2'>
            <h2 className='text-lg text-gray-300 mb-1'>Task Title</h2>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type='text' placeholder='MAKE A UI DESIGN'></input>
            <h2 className='text-lg text-gray-300 mb-1'>Date</h2>
            <input type='date'className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'></input>
            <h2 className='text-lg text-gray-300 mb-1'>Assign To</h2>
            <input type='text' placeholder='Employee Name' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'></input>
            <h2 className='text-lg text-gray-300 mb-1'>Category</h2>
            <input type='text' placeholder='design,dev etc.' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'></input>
        </div>
        <div className='w-2/5 flex flex-col items-start'>
            <h2 className='text-lg text-gray-300 mb-1'>Description</h2>
            <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400'></textarea><br></br>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' >Create Task</button>
        </div>
    </form>
    </div>
  )
}

export default CreateTask