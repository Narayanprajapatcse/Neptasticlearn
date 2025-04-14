import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(true);
    const [usersData, setUserData] = useState(() =>{
  const storedData = localStorage.getItem('users');
    return storedData ? JSON.parse(storedData) : [];
  });

   useEffect(() => {
    if (location.state) {
      const existingUsers = [...(usersData || [])];
      existingUsers.push(location.state);
      setUserData(existingUsers);
      localStorage.setItem('users', JSON.stringify(existingUsers));
    }
  }, [location.state]);


  const handleStatusChange = () => {
    setIsActive((prevState) => !prevState);
  };


  return (
    <div className=' '>
      <div className="flex justify-between items-center bg-white shadow text-black fixed right-0 top-0 w-318 h-16 z-50">
  <div className="flex items-center ml-4">
    <img src="search 2.png" alt="" className="w-6 h-6 mr-2" />
    <input type="text" placeholder="Type to search..." className="w-64 h-6 pl-2 pr-2 rounded" />
  </div>
  <div className="flex items-center justify-end mr-4">
    <img src="bal.png" alt="" className="w-6 h-6 mr-4" />
    <div className="text-left mr-4">
      <p>Noor Fahad</p>
      <p>Admin</p>
    </div>
    <img src="noor.png" alt="" className="w-6 h-6 mr-2" />
    <img src="vect.png" alt="" className="w-2 h-2" />
  </div>
   
</div  >

<div className='flex  pt-25  fixed right-0 w-318 h-full justify-between pr-15'>
  
<h1 className='font-bold text-4xl pl-10 '>Users</h1>
<div>
<a href="">Dashboard</a>
<a href="#user" >/Users</a>
</div>
   
</div>
  
  <div className='flex  pt-40 pl-10   fixed right-0 w-318  pr-15'>
    <div className='bg-white shadow p-5'>
    <div className='  justify-between  sm:flex-row flex ' >
      <div>
    <h1 className='font-bold'>users</h1>
    <div className='text-blue-900  text-left left-0 pl-250'>
    <Link to="/Add" className="border rounded-3xl p-2 right-0 mb-10">
        Add Users
      </Link></div></div>
    </div>
 <div >
    <table className='w-full text-sm mt-5 '>
      <thead className='bg-fuchsia-100 px-5 py-3 '>
        <tr className=''>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          
          
            {usersData.map((user, index) => (
          <tr key={index} >
              <td className="flex items-center gap-2 py-2"> 
              <img
                        src="pie.png"
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                {user.name || 'NA'}</td>
            
              <td> {user.email || "N/A"}</td>
              <td> {user.phoneNumber || "N/A"}</td>
              <td>
              <button 
      onClick={handleStatusChange} 
      className={`py-2 px-4 rounded font-bold text-white transition duration-300
        ${isActive ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}`}
    >
      in-active
    </button>
                    </td>
                    <td className="py-2">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button
                          className="text-blue-600 hover:underline text-sm whitespace-nowrap"
                          onClick={() => handleView(user)}
                        >
                          <img src="eye.png" alt="" />
                        </button>
                        <button
                          className="text-red-600 hover:underline text-sm whitespace-nowrap"
                          onClick={() => handleDelete(user.email)}
                        >
                      <img src="trash-can-alt-2.png" alt="" />
                        </button>
                        <button
                          className="text-red-600 hover:underline text-sm whitespace-nowrap"
                          onClick={() => handleDelete(user.email)}
                        >
                      <img src="download-alt.png" alt="" />
                        </button>
                      </div>
                      </td>
              </tr> 
           ) )}
            
          
        </tbody>
    </table></div>
    </div>
  </div>
</div>
   


  )
}

export default Navbar




    