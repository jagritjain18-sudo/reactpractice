import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {
    const { userData } = useContext(AuthContext)
    return (
        <>
            <div className='bg-[#1c1c1c] p-5 rounded mt-5 text-white'>
                <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded text-black font-bold'>
                    <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                    <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                    <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                    <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                    <h5 className='text-lg font-medium w-1/5'>Failed</h5>
                </div>
                <div className=''>
                    {userData.employees.map(function(elem, idx) {
                        if (!elem) return null;
                        const employeeInfo =  elem;
                        const taskCounts = employeeInfo.taskCounts ;
                        return (
                            <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded items-center'>
                                <h2 className='text-lg font-medium w-1/5'>{employeeInfo.firstName}</h2>
                                <h3 className='text-lg font-medium w-1/5 text-blue-400'>{taskCounts.newTask}</h3>
                                <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{taskCounts.active }</h5>
                                <h5 className='text-lg font-medium w-1/5 text-white'>{taskCounts.completed }</h5>
                                <h5 className='text-lg font-medium w-1/5 text-red-600'>{taskCounts.failed }</h5>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default AllTask
