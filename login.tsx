
import React, { useState } from 'react'
import './App.css'

function App() {

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const handleusername = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setUsername(e.target.value);
  }

  const handlepassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value);
  }


 const handleLogin=async()=>{
  const response = await fetch('http://localhost:3000/login',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({username,password})
  })
  const data = await response.json()
  console.log(data)

 }

  return (
    <div>
      <input value={username} onChange={handleusername} type="text" placeholder='username'/>
      <input value={password} onChange={handlepassword} type="password" placeholder='password'/>
      <button onClick={handleLogin}>login</button>
    </div>
  )
}

export default App
