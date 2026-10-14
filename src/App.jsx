import { useContext, useEffect, useState } from 'react'
import './index.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setLocalStorage , getLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'
function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    getLocalStorage();
  });
  const[user,setUser]=useState(null);
  const authData=useContext(AuthContext);
  const[loggedInUserData,setLoggedInUserData]=useState(null);
  useEffect(()=>{
    const loggedInUser=localStorage.getItem("loggedInUser");
    if(loggedInUser){
      setUser(loggedInUser.role)
    }
  },[authData])
  console.log(authData);
  function handleLogin(email,password){
    if(email=='admin@example.com' && password=='123'){
      setUser('admin');
      localStorage.setItem("LoggedInUser",JSON.stringify({role:'admin'}))
    }else if(authData ){
      const employee=authData.employees.find((e)=> email==e.email && password==e.password)
      if(employee){
        setLoggedInUserData(employee);
      setUser('employee');
      localStorage.setItem("LoggedInUser",JSON.stringify({role:'employee'}));}
    }else{
      alert("Invalid,Credentials");
    }
  }
  return (
    <>
    {!user && <Login handleLogin={handleLogin} />}
    {user === 'admin' && <AdminDashboard />}
    {user === 'employee' && <EmployeeDashboard data={loggedInUserData}/>}
    </>
  )
}

export default App
