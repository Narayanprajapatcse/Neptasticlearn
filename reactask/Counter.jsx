import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [count ,  setcount]= useState(0)
     let  inc = ()=>{
          setcount(count + 1)
    
     }

     let  dec = ()=>{
        setcount(count - 1)
  
   }

  return (
    <div>
        <h1> fourth task</h1>
        <h1> count {count}</h1>
      
       <button  onClick={inc}>+ for increase</button>
       <button onClick={dec}>-  for decrease</button>
    </div>
  )
}

export default Counter
