import React from 'react'
import Header from '../Others/Header'
import TaskNumber from '../Others/TaskNumber'
import TaskList from '../TaskList/TaskList'
function EmployeeDashboard() {
  return (
    <div className='w-screen h-screen bg-[#cIcIcI] p-10'>
    <Header/>
    <TaskNumber/>
    <TaskList/>
    </div>
  )
}

export default EmployeeDashboard