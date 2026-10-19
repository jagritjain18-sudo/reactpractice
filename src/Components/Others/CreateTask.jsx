import React, { useState } from 'react'
import { getLocalStorage } from '../../utils/LocalStorage';

function CreateTask (){
  const [taskTitle,setTaskTittle]=useState('');
  const [date,setDate]=useState('');
  const[assignTo,setAssignTo]=useState('');
  const[category,setCategory]=useState('');
  const[description,setDescription]=useState('');
  const[newTask,setNewTask]=useState({});
  const  sumbitHandler=(e)=>{
    e.preventDefault()
    setNewTask({taskTitle,date,assignTo,category,description,active: false, newTask: true, failed: false, completed: false})
    const {employees} = getLocalStorage();
    employees.forEach(function (elem){
      if(elem.firstName==assignTo){
      elem.tasks.push(newTask);
      console.log(elem);
    }
    })
    setTaskTittle('')
    setDate('')
    setAssignTo('')
    setCategory('')
    setDescription('')
    
  }
  return (
    <div className=' p-5 bg-[#2C2D2D] mt-7 rounded'>
        <form className='flex flex-wrap w-full items-start justify-between p-4' onSubmit={(e)=>{
          sumbitHandler(e)
        }}>
            <div className='w-1/2'>
            <h2 className='text-lg text-gray-300 mb-1' >Task Title</h2>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' onChange={(e)=>setTaskTittle(e.target.value)} value={taskTitle} type='text' placeholder='MAKE A UI DESIGN'></input>
            <h2 className='text-lg text-gray-300 mb-1'>Date</h2>
            <input type='date'className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' onChange={(e)=>setDate(e.target.value)} value={date}></input>
            <h2 className='text-lg text-gray-300 mb-1'>Assign To</h2>
            <input type='text' placeholder='Employee Name' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' onChange={(e)=>setAssignTo(e.target.value)} value={assignTo}></input>
            <h2 className='text-lg text-gray-300 mb-1'>Category</h2>
            <input type='text' placeholder='design,dev etc.' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' onChange={(e)=>setCategory(e.target.value)} value={category}></input>
        </div>
        <div className='w-2/5 flex flex-col items-start'>
            <h2 className='text-lg text-gray-300 mb-1'>Description</h2>
            <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400' onChange={(e)=>setDescription(e.target.value)} value={description}></textarea><br></br>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' type='sumbit' >Create Task</button>
        </div>
    </form>
    </div>
  )
}

export default CreateTask