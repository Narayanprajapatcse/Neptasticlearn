import { useState } from 'react';
import { createUserWithEmailAndPassword , getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import { app } from "./firebase";
 const auth = getAuth(app)

  
  
  const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = async (e ) => {
      e.preventDefault();
      try{
      await createUserWithEmailAndPassword(auth,email,password);
    navigate('/dasboard');}
    catch(error){
      console.error('error in sign in', error.message)
    }
     
  }
  return (<div className='min-h-screen flex'>
    <div className='justify-center w-1/2 flex items-center place-content-center h-screen flex-col '>
      <div>
       <h1 className='text-2xl font-bold mb-2'>
        Sign In  </h1>
        <p className='mb-2 mr-25'>Enter  your email and password to sign in!</p>
        <button className='flex items-center justify-center w-full border font-bold border-gray-300 rounded-lg py-2 mb-10 mt-4 hover:bg-gray-100 '>
          <img src="GoogleLogo.png" alt="" className='w-5 h-5 mr-3'/>Sign in with Google
          
        </button>
     
       <div className='flex flex-col '>
        <hr  className='border-gray-300 mb-6'/>
        <form action="" className='flex flex-col'>

          <label htmlFor="" className=' font-bold mb-2 '>Email Address</label>
          <input type="email" placeholder='Enter your email address' onChange={(e) => setEmail(e.target.value)} value={email} className='w-full border border-gray-300 rounded-lg mb-6 px-3 py-2 '/>
          <label htmlFor="" className='font-bold mb-2'>Password</label>
          <input type="password"  onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter your password' className='w-full border mb-4 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200' />
          <button className='w-full bg-black text-white rounded-lg py-2 font-bold hover:bg-gray-800 transition duration-200' onClick={handleLogin}>Sign in</button>
        </form>
       </div>
       </div>
       <div  className='text-center mt-6' >
        <p className='text-sm text-gray-600 hover:underline block mb-2'>Forgot your password?</p>
        <p className='text-sm text-gray-600 hover:underline'>Don't have an account? Sign up</p>
       </div>
       <footer className='text-gray-500 text-center space-x-4 mt-10 text-sm absolute bottom-0 left-0 w-1/2 py-4'>
       <a href="#" className="hover:underline">FAQs</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms & Conditions</a>
        <a href="#" className="hover:underline">Refund Policy</a>
       </footer>
    </div>
    <div className='bg-black w-1/2 justify-center flex items-center h-screen text-white place-content-center flex-col  '>
    <div className='text-center ' >
                  <img src="nep-logo 1.png" alt="" />
                  <p className='font-bold text mt-8 text-2xl'>"Our web projects run smoother, launch faster,</p><p className='font-bold text mb-6 text-2xl'>and look sharper — all thanks to this CMS."</p>
                  <p>Ishwar Acharya - CEO Neptastic</p>
                  </div>
    </div>
    </div>
  ) 

}
export default Login
