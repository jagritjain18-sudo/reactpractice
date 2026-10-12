import { useEffect, useState } from 'react'
import './index.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setLocalStorage , getLocalStorage } from './utils/LocalStorage'
function App() {
  // const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   getLocalStorage();
  // });
  const[user,setUser]=(null);
  function handleLogin(email,password){
    if(email==='admin@example.com'&&password=='123'){
      setUser('admin');
    }else if( email=='e@e.com'&&password=='123'){

    }else{
      alert("Invalid,Credentials");
    }
  }
  return (
    <>
    {!user?<Login handleLogin={handleLogin}/>:""}
    {user=='admin'?<AdminDashboard/>:<EmployeeDashboard/>}
    <AdminDashboard/>
    </>
  )
}

export default App
