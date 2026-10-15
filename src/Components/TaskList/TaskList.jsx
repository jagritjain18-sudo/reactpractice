import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import DeclineTask from './DeclineTask'

function TaskList ({data}) {
    console.log(data);
  return (
    <div id="TaskList" className='h-[55%] overflow-x-auto flex items-center justify-start flex-nowrap w-full gap-x-10'>
        {data.tasks.map((elem,index)=>{
            if(elem.active){
                return<AcceptTask data={elem} key={index}/>
            }
            if(elem.newTask){
                return <NewTask data={elem} key={index}/>
            }
            if(elem.complete){
                return <CompleteTask data={elem} key={index}/>
            }
            if(elem.failed){
                return <DeclineTask data={elem} key={index}/>
            }
        })}
    </div>
  )
}

export default TaskList