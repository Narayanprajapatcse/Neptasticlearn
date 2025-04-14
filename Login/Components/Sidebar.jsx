import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
    <div className='flex  '>
      <div className='bg-black w-1/6 text-white  flex flex-col h-screen p-6' >
        <img src="nep-logo 1.png" alt="" className='pb-15' />
         <h3 className='font-bold'>Menu</h3>
         <Link to="/dasboard">
        <p className='items-center flex hover:bg-blue-900'>
          <img src="pie-chart-alt.png" alt="" className='p-2' />
          Dashboard
        </p>
      </Link>
         <p className='bg-white text-black items-center flex  hover:bg-blue-900'> <img src="pie.png" alt="" className='p-2'/ >  Users
        
       </p>
      </div>
   
      


 

    </div>     
    </div>
   
  )
}

export default Sidebar
