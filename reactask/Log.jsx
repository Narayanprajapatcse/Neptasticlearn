import React from 'react'
import { useEffect } from 'react'
const Log = () => {
    useEffect(() => {
        console.log('Component loaded')
      }, []);
    
  

  return (
    <div >
       <p>fifth task</p>
      <p>Check the console to see the mount message</p>
    </div>
  );

   
  
}

export default Log
