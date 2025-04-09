import React from 'react'
import Index from './Index'

const Home = () => {
  const fun = ()=>{
    alert('Button clicked!')
  }
  return (
    <div>
      <p>first task 8</p>
      <button onClick={fun}> show alert</button>
      <Index/>
    </div>
  )
}

export default Home
