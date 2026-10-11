import React from 'react'
import Header from "../Others/Header"
import CreateTask from '../Others/CreateTask'
function AdminDashboard  ()  {
  return (
   <div className='w-screen h-screen  p-10 '>
        <Header/>
        <CreateTask/>
    </div>
  )
}

export default AdminDashboard