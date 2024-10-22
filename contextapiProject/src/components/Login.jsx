import React from 'react'
import { useState,useContext } from 'react'

import usercontext from '../Context/UserContext'
function Login() {
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const {setUser}=useContext(usercontext)
    const handlesubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})


    }
  return (
    <div>
      <h2>login page</h2>
      <input type="text "
      value={username}
      onChange={(e)=>setusername(e.target.value)}
       placeholder='username' />
       { " "}
      <input type="text"
       value={password}
       onChange={(e)=>setpassword(e.target.value)}
       placeholder='password' />
      <button onClick={handlesubmit}> Submit</button>
    </div>
  )
}

export default Login
