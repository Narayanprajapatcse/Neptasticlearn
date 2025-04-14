import React from 'react'
import { useNavigate } from 'react-router-dom';

import Sidebar from './Sidebar'
import { useState } from 'react'


const Add = () => {
  const navigate = useNavigate();

    const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email,phoneNumber };
    navigate('/dasboard', { state: formData,replace: true });
  };

  
  return (
    <div>
     
     
    
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

<div className='  mt-45 fixed right-0 w-310 ml-5   shadow  bg-white '>
<div className="w-full">
    <h1 className="font-bold text-4xl p-4 pl-8">Create User</h1>
    <hr className="w-full border  border-gray-300" />
  </div>
  <form onSubmit={handleSubmit}  className='p-5'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <div>
          <label className="block text-gray-700 pt-5 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm pt-5 font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div></div>
        <div>
          <label className="block text-gray-700 pt-4 text-sm font-bold mb-2" htmlFor="email">
            Email *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        
          <label className="block text-gray-700 text-sm font-bold mb-2  pt-4" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="text"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <div>
          <label className="block text-gray-700 text-sm pt-4 font-bold mb-2" htmlFor="gender">
            Gender
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold pt-4 mb-2" htmlFor="profile">
            User Profile
          </label>
          <input
            type="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="profile"
         
          />
        </div></div>
        <div className="col-span-2">
          <label className="block text-gray-700 text-sm font-bold  pt-4 mb-2" htmlFor="address">
            Address
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            placeholder="Enter Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="col-span-2">
          <button
            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Users
          </button>
        </div>
      </form>
  </div>
  
     
  

<Sidebar />
</div>

  )}
export default Add


