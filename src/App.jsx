import { useState } from 'react'
import './index.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EmployeeDashboard/>
    </>
  )
}

export default App
