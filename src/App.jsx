<<<<<<< HEAD
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
  const {userData, setUserData } = useContext(AuthContext)

 

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser) 
      setUser(parsedUser.role)
      setLoggedInUserData(parsedUser.data)
    }
  }, [])
  // Add this inside your App component in App.jsx
useEffect(() => {
  // If an employee is logged in and the global context data changes
  if (user === 'employee' && loggedInUserData && userData) {
    
    // Find the latest, freshly updated version of this logged-in employee from context
    const updatedEmployee = userData.find(e => e.email === loggedInUserData.email);
    
    if (updatedEmployee) {
      // Push the fresh data into the dashboard state
      setLoggedInUserData(updatedEmployee);
    }
  }
}, [userData, user]); // This triggers automatically whenever context data changes


  const handleLogin = (email, password) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    // 1. Admin Authentication Check
    if ((cleanEmail === 'admin@example.com' || cleanEmail === 'admin@me.com') && cleanPassword === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return true;
    } 
    
   
    if (userData) {
     
      const targetArray = userData.employees ? userData.employees : userData;

      if (Array.isArray(targetArray)) {
        const employee = targetArray.find(
          (e) => e.email.trim().toLowerCase() === cleanEmail && e.password.toString().trim() === cleanPassword
        );
        
        if (employee) {
          setUser('employee')
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
          return true; 
        }
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
=======
import react from 'react'

const App= ()=>{
  return(
    <div className=" h-screen w-screen flex  bg-blue-600 justify-center items-center
    flex-fit">
  <div className="w-1/6 h-full flex justify-center items-center  p-5 ">
  <div className='w-full h-full bg-amber-600 rounded-xl '></div>
  </div>
  <div className="w-5/6 h-full bg-white flex rounded-xl"></div>
</div>
  )
}

export default App
>>>>>>> 52d76c858fcd5f8e960ac9f6ab5cb6f6c91741c0
