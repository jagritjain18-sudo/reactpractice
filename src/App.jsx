import { useState } from 'react'
import './index.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <AdminDashboard/>
    </>
  )
}

export default App
