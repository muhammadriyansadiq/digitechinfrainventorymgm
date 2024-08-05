import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
<div className=' bg-gray-100 h-[100vh] flex justify-center w-full lg:items-center'>
    <div className=" py-11 bg-gray-100 lg:py-3 w-full ">
    <div className="w-11/12 max-h-[100vh] ml-auto mr-auto bg-white px-4 pb-4 pt-2 rounded shadow-md lg:w-4/12 lg:max-h-[96vh]">
      <h2 className="text-2xl font-bold mb-6 text-center">Login to your account</h2>
      <form>
      
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email 
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
      
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Remember me on this device</span>
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Create new account
          </button>
        </div>
      </form>

    </div>
    <div className='mt-2 w-11/12 ml-auto mr-auto  flex flex-col justify-around md:flex-row lg:w-4/12 lg:mt-1'>
    <div>Don't have account yet? <Link to={"/signup"} className=' text-blue-600'> Sign up</Link></div>
    <div>I forgot password</div>
  </div>
  </div>
  </div>
  )
}

export default Login