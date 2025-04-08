import React from 'react'
import Child from './Child'
const Parent = () => {
  let name="rahul"
  let age=25
  return (
    <div>
      <h2>third task</h2>
        <Child name={name} age={age}/>
       
    </div>
  )
}

export default Parent
