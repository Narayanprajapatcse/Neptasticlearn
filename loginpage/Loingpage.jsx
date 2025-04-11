import React from 'react'

const Loingpage = () => {
  return (
    <div>
        <div className='flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-50'>
            <div className='rounded-3xl p-8 bg-white shadow-2xl w-96'>
      
             <div>  <h2 className='text-gray-800 mb-4 font-semibold'>Sign in with email</h2>
      
            <div className='mb-4'>
                <label className='block text-gray-700  font-bold mb-2' htmlFor="email">Email</label>
                <input type="email" placeholder='Email' className='border rounded  w-full px-3 py-1'/>
            </div>
            <div >
                <label htmlFor="password" className='font-bold block mb-2'>Password</label>
                <input type="passord"  placeholder='password' className='border rounded w-full py-1 px-3' />
                    <p className='text-right hover:underline cursor-pointer text-blue-500 mb-8 '> Forget password?</p>
            </div>
            <div>
                <button type='button' className='bg-gray-800 hover:bg-gray-950 text-white font-bold py-2 px-4 w-full'>
                Login
                </button>
                <p className='mt-5 text-gray-600'>Or sign in with</p>
            </div>
            <div className='mt-5'>
                <button className='border rounded-full m-2 border-gray-300 hover:border-blue-900 py-2 px-4'>G</button>
                <button className='border rounded-full m-2 border-gray-300 hover:border-blue-900 py-2 px-4'>F</button>
                <button className='border rounded-full m-2  border-gray-300 hover:border-blue-900 py-2 px-4'>in</button>
            </div>
            </div>
            </div>
      </div>
      </div>
    
  )
}

export default Loingpage
