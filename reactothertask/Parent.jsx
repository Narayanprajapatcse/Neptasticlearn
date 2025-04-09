import React from 'react'
import Child from './Childcom/Child'
const Parent = () => {
  function touchh (){

    alert('form child component')
  }
  return (
    <div>
      <P> task 12</P>
      <Child data={touchh}/>
    </div>
  )
}

export default Parent
