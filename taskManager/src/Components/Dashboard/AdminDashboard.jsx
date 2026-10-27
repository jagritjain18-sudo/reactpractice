import React from 'react'
import Header from "../Others/Header"
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

function AdminDashboard  ()  {
  return (
   <div className='w-screen h-screen  p-10 '>
        <Header/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard