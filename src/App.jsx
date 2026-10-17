import { useContext, useEffect, useState } from 'react'
import './index.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const { userData, setUserData } = useContext(AuthContext)

  useEffect(() => {
    setLocalStorage();
  }, [])

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser) 
      setUser(parsedUser.role)
      setLoggedInUserData(parsedUser.data)
    }
  }, [])

  const handleLogin = (email, password) => {
   
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

   
    if ((cleanEmail === 'admin@example.com' || cleanEmail === 'admin@me.com') && cleanPassword === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return true;
    } 
    
   
    else if (userData && userData.employees) {
      const employee = userData.employees.find((e) => cleanEmail === e.email && cleanPassword === e.password)
      
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
        return true; 
      }
    }

    
    alert("Invalid Credentials")
    return false;
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App
