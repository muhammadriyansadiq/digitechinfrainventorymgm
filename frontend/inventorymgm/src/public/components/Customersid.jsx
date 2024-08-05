import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Suppliers from './Suppliers'
import { FaGreaterThan } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

const Customersid = () => {
  return (
    <>
        <Navbar />
        <div className=' pt-5  bg-[#f6f8fb] mt-16 lg:mt-32' >
            <div className=' w-full flex justify-center my-4'>
                <div className=' w-11/12 lg:w-10/12 font-semibold text-[21px]'>
                    Riyan Sadiq
                </div>
            </div>

            <div className=' w-full flex justify-center my-4'>
                <div className='w-11/12  font-semibold text-[21px] lg:w-10/12'>
                <div className=' flex items-center justify-between w-[170px]'>
                <Link to={'/customers'} className=' text-blue-600'>Customer</Link>
                <p>< FaGreaterThan className=' text-blue-600 text-[14px]'/></p>
                <Link to={"/customers/id"} className=' text-blue-600'>id</Link>
                </div>
                </div>
            </div>

        <div className="  w-full flex justify-center ">
<div className=' w-full flex justify-between flex-col lg:flex-row  lg:w-10/12'>
<div className='ml-auto mr-auto lg:ml-0 lg:mr-0  w-11/12  h-[45vh] flex flex-col justify-between  border-[1px]  p-4 bg-white rounded-md lg:w-[30%]'>
<div>Product Image</div>
<div className='   border-[3px] rounded-md  p-2 '><img src="https://ims.digitechinfra.com/public/static/logo.png" className=' h-[33vh] w-full' alt="" /></div>
</div>

<div className=' ml-auto mr-auto lg:ml-0 lg:mr-0 mt-2 lg:mt-0 w-11/12  border-[1px] rounded-md  bg-white py-4 lg:w-[65%]'>
<div className=' flex justify-between items-center px-4  py-4 border-b-[1px]' >
<div className=' font-semibold text-[19px]'>Customers Details</div>
<Link to={'/pages/customers'}>
<div className=' text-[19px]'>X</div>
</Link>
</div>


<div className=' my-5'>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Name</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>Bachat Mart
    </div>
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Email address	</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>demo@gmail.com
    </div>
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Phone number	</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>03008930442  </div>
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Address</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>Office # 19, 2nd Floor, United Trade Center, Gulshan-e-Iqbal Block 6, Karachi 75300
    </div>
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Account holder	</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'></div>
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Account number	</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'></div>
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Bank name	</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>BNI
    </div>
  </div>

  <div className=' flex justify-end mt-7'>
    <div className=' w-3/12 flex justify-around lg:w-4/12'>
    <Link to={'/customers'} className=' bg-blue-500 px-4 py-2 flex items-center justify-between text-white border-[1px] border-blue-500 hover:bg-white hover:text-blue-500'><span className=' mr-2'><IoIosArrowRoundBack className=' text-[22px] ' /></span><span> Back</span></Link>
    <Link to={'/customers/id/edit'} className=' bg-red-500  px-4 py-2 flex justify-between items-center text-white border-[1px] border-red-500 hover:bg-white hover:text-red-500 '><span className=' mr-2'><CiEdit className=' text-[22px]'/></span><span> Edit</span></Link>
    </div>
  </div>

  

</div>


</div>

</div>    
 </div>
 </div>
    </>
  )
}

export default Customersid;