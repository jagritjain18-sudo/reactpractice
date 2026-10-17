import React from 'react'
import Header from "../Others/Header"
import CreateTask from '../Others/CreateTask'
import AllTasks from '../Others/AllTAsks'
function AdminDashboard  ()  {
  return (
   <div className='w-screen h-screen  p-10 '>
        <Header/>
        <CreateTask/>
        <AllTasks/>
    </div>
  )
}

export default AdminDashboard