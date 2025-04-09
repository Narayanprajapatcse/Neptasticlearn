import React from 'react'
import { useState } from 'react'
const Contact = () => {
 const [valu,setvalu]=useState("")
 const values =(e)=>{
  setvalu(e.target.value)
 }
  return (
    <div><p>second task 9</p>
      <input type="text" value={valu}  onChange={values}/>
      <p>type {valu}</p>
    </div>
  )
}

export default Contact
