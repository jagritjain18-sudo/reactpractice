import React from 'react'
import Header from '../Others/Header'
import TaskNumber from '../Others/TaskNumber'
import TaskList from '../TaskList/TaskList'
function EmployeeDashboard({data}) {
  return (
    <div className='w-screen h-screen bg-[#cIcIcI] p-10'>
    <Header data={data}/>
    <TaskNumber data={data}/>

    <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard