import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Suppliers from './Suppliers'

const Supplierscreate = () => {
  return (

    <>

        <Navbar />
        <div className="  pt-5  w-full flex justify-center bg-[#F6F8FB] mt-16 lg:mt-32">
<div className=' w-full flex justify-between flex-col lg:flex-row  lg:w-10/12'>

<div className=' ml-auto mr-auto lg:ml-0 lg:mr-0 w-11/12  h-[50vh] flex flex-col justify-between border-[1px] pl-2 py-2 bg-white rounded-md lg:w-[30%]'>
<div className=' text-center font-semibold'>Product Image</div>
<div className='ml-auto mr-auto flex justify-center items-center rounded-full border-[4px] p-3 w-[200px] h-[200px]'><img src="https://ims.digitechinfra.com/public/static/logo.png" alt="" /></div>
<div className=''> <input type="file" name="" id="" className=' border-[2px] w-11/12 leading-8' /></div>
</div>

<div className=' ml-auto mr-auto lg:ml-0 lg:mr-0 mt-2 lg:mt-0 w-11/12  border-[1px] rounded-md  bg-white py-4 lg:w-[65%]'>
<div className=' flex justify-between items-center px-4  py-4 border-b-[1px]' >
<div className=' font-semibold text-[15px]'>Customer Details</div>
<Link to={'/pages/suppliers'}>
<div>X</div>
</Link>
</div>


<div>
    <form action="" className=' '>
  <div className=' name my-5 px-4'>
<label htmlFor="">Name</label>
<input type="text" className=' border-[1px] py-2 w-full rounded-md pl-2 mt-2' placeholder='Product name' />
  </div>

  <div className=' name my-5 px-4'>
<label htmlFor="">Email Address</label>
<input type="email" className=' border-[1px] py-2 w-full rounded-md pl-2 mt-2' placeholder='Product name' />
  </div>



  <div className=' name my-5 px-4'>
<label htmlFor="">Shop Name</label>
<input type="email" className=' border-[1px] py-2 w-full rounded-md pl-2 mt-2' placeholder='Product name' />
  </div>


  <div className=' name my-5 px-4'>
<label htmlFor="">Phone number</label>
<input type="email" className=' border-[1px] py-2 w-full rounded-md pl-2 mt-2' placeholder='Product name' />
  </div>

  <div className=' px-4 name my-7 flex justify-between w-full '>
  <div className=' w-6/12 '>
<label htmlFor="">Type Of Suppliers</label>
<select className=' w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2' name="cars" id="cars">
  <option value="volvo">Select a type</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
{/* <input type="text" className=' border-[1px] py-2 w-11/12  rounded-md pl-2 mt-2' placeholder='Product name' /> */}
</div>
<div className=' w-6/12 '>
<label htmlFor="">Bank Name:</label>
<select className=' w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2' name="cars" id="cars">
  <option value="volvo">Bank Name :</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
{/* <input type="text" className=' border-[1px] py-2 w-11/12  rounded-md pl-2 mt-2' placeholder='Product name' /> */}
</div>
  </div>


  <div className='px-4 name my-7 flex justify-between w-full '>
    <div className=' w-6/12 '>
<label htmlFor="">Account Holder</label>
<input type='number' placeholder='0' className=' w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2' name="cars" id="cars" />

{/* <input type="text"  placeholder='Product name' /> */}
</div>
<div className=' w-6/12 '>
<label htmlFor="">Account Number</label>
<input type='number' placeholder='0' className=' w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2' name="cars" id="cars" />
 

</div>
  </div>


<div className=' px-4'>
<label htmlFor="">Address</label>
<textarea name="" id="" className=' w-full border-[1px] rounded-md'></textarea>
</div>


<div className=' border-t-[1px] flex justify-center mt-3'>
  <div className=' w-full px-4 '>
<div className='  flex justify-center lg:justify-end '>
  <div className='  w-11/12 lg:w-3/12 flex justify-between   mt-2'>
    <button className=' bg-green-500 py-3 px-5 rounded-md hover:text-white hover:bg-green-300'>Save</button>
    <button className=' bg-red-400 py-3 px-5 rounded-md hover:text-white hover:bg-red-300'>Cancel</button>
  </div>
</div>
  </div>
</div>




  

    </form>
</div>


</div>

</div>
        
        </div>
    </>
  )
}

export default Supplierscreate