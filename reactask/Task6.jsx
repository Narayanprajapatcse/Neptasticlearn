import React from 'react'
import { useState } from 'react'
const Task6 = () => {
    const [isLogin ,setisLogin] = useState(false)
    const  login = ()=>{
        setisLogin(!isLogin);
    }
  return (
    <div>
      {
        isLogin ? (
            <h1>Welcome back!</h1>
            ) : (
                <h1>Please login</h1>
        )
      }
      <button onClick={login}>click on button login </button>
    </div>
  )
}

export default Task6
        
          
