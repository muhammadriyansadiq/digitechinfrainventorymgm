import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const Createproducts = () => {
  return (

    <>

        <Navbar />
        <form action='' className=" pt-5 w-full flex justify-center bg-[#F6F8FB] mt-16 lg:mt-32">
<div className=' w-full flex justify-between flex-col lg:flex-row  lg:w-10/12'>

<div className=' ml-auto mr-auto lg:ml-0 lg:mr-0 w-11/12  h-[40vh] flex flex-col justify-between border-[1px] pl-2 py-2 bg-white rounded-md lg:w-[30%]'>
<div>Product Image</div>
<div><img src="https://ims.digitechinfra.com/public/static/logo.png" alt="" /></div>
<div> <input type="file" name="" id="" /></div>
</div>

<div className=' ml-auto mr-auto lg:ml-0 lg:mr-0 mt-2 lg:mt-0 w-11/12 border-[1px] bg-white pt-4 lg:w-[65%] mb-3'>



<div className=' flex justify-between items-center px-4  py-4 border-b-[1px]' >
<div>Product Create</div>
<Link to={'/products'}>
<div>X</div>
</Link>
</div>


<div>
    <div  className=' px-4'>
  <div className=' name my-5'>
<label htmlFor="">Name</label>
<input type="text" className=' border-[1px] py-2 w-full rounded-md pl-2 mt-2' placeholder='Product name' />
  </div>


  <div className=' name my-7 flex justify-between w-full '>
    <div className=' w-6/12 '>
<label htmlFor="">Product Category</label>
<select className=' w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2' name="cars" id="cars">
  <option value="volvo">Select Category:</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
{/* <input type="text"  placeholder='Product name' /> */}
</div>
<div className=' w-6/12 '>
<label htmlFor="" className=' ml-5'>Unit</label>
<select className=' ml-5 w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2' name="cars" id="cars">
  <option value="volvo">Select Unit:</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
{/* <input type="text" className=' border-[1px] py-2 w-11/12  rounded-md pl-2 mt-2' placeholder='Product name' /> */}
</div>
  </div>


  <div className=' name my-7 flex justify-between w-full '>
    <div className=' w-6/12 '>
<label htmlFor="">Buying Price</label>
<input type='number' placeholder='0' className=' w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2' name="cars" id="cars" />

{/* <input type="text"  placeholder='Product name' /> */}
</div>
<div className=' w-6/12 '>
<label htmlFor="" className=' ml-5'>Selling Price</label>
<input type='number' placeholder='0' className='ml-5 w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2' name="cars" id="cars" />
 

{/* <input type="text" className=' border-[1px] py-2 w-11/12  rounded-md pl-2 mt-2' placeholder='Product name' /> */}
</div>
  </div>


  <div className=' name my-7 flex justify-between w-full '>
    <div className=' w-6/12 '>
<label htmlFor="">Quantity</label>
<input type="text" className=' border-[1px] py-2 w-11/12  rounded-md pl-2 mt-2' placeholder='0' />

{/* <input type="text"  placeholder='Product name' /> */}
</div>
<div className=' w-6/12 '>
<label htmlFor="" className=' ml-5'>Quantity alert</label>

<input type="text" className='ml-5 border-[1px] py-2 w-11/12  rounded-md pl-2 mt-2' placeholder='0' />
</div>
  </div>



  <div className=' name my-7 flex justify-between w-full '>
    <div className=' w-6/12 '>
<label htmlFor="">Tax </label><br />
<input type="text" className=' border-[1px] py-2 w-11/12  rounded-md pl-2 mt-2' placeholder='0' />

{/* <input type="text"  placeholder='Product name' /> */}
</div>
<div className=' w-6/12 '>
<label htmlFor="" className=' ml-5'>Tax Type</label>

<select className=' ml-5 w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2' name="cars" id="cars">
  <option value="volvo">Select Unit:</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select></div>
  </div>

  <div className=' name my-5'>
<label htmlFor="">Notes</label>
<textarea rows={3} type="text" className=' border-[1px] py-2 w-full rounded-md pl-2 mt-2' placeholder='Product name' />
  </div>
  

    </div>
</div>

<div className=' flex justify-end mt-7 border-t-2 py-6'>
    <div className=' w-11/12 flex justify-around lg:w-3/12'>
    <button className=' bg-blue-500 px-4 py-2 flex items-center justify-between text-white border-[1px] border-blue-500 hover:bg-white hover:text-blue-500'> Save</button>
    <button  className=' bg-red-500  px-4 py-2 flex justify-between items-center text-white border-[1px] border-red-500 hover:bg-white hover:text-red-500 '> Cancel </button>
    </div>
  </div>

</div>

</div>
        
        </form>
    </>
  )
}

export default Createproducts