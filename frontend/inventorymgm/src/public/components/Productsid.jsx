import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Suppliers from './Suppliers'
import { FaGreaterThan } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

const Productsid = () => {
  return (
    <>
        <Navbar />
        <div className=' pt-5 mt-[-9px] bg-[#f6f8fb]' >
            <div className=' w-full flex justify-center my-4'>
                <div className=' w-10/12 font-semibold text-[21px]'>
                    jeans Pant
                </div>
            </div>

            <div className=' w-full flex justify-center my-4'>
                <div className=' w-10/12 font-semibold text-[21px]'>
                <div className=' flex items-center justify-between w-[170px]'>
                <Link to={'/products'} className=' text-blue-600'>Products</Link>
                <p>< FaGreaterThan className=' text-blue-600 text-[14px]'/></p>
                <Link to={"/products/id"} className=' text-blue-600'>id</Link>
                </div>
                </div>
            </div>

        <div className="  w-full flex justify-center ">
<div className=' w-full flex justify-between flex-col lg:flex-row  lg:w-10/12'>
<div className='ml-auto mr-auto lg:ml-0 lg:mr-0  w-11/12  h-[45vh] flex flex-col justify-between  border-[1px]  p-4 bg-white rounded-md lg:w-[30%]'>
<div>Product Image</div>
<div className='   border-[3px] rounded-md  p-2 '><img src="https://ims.digitechinfra.com/public/static/logo.png" className=' h-[33vh] w-full' alt="" /></div>
</div>

<div className=' ml-auto mr-auto lg:ml-0 lg:mr-0 mt-2 lg:mt-0 w-11/12  border-[1px] rounded-md  bg-white mb-3 pt-4 lg:w-[65%]'>
<div className=' flex justify-between items-center px-4  py-4 border-b-[1px]' >
<div className=' font-semibold text-[19px]'>Products Details</div>
<Link to={'/products'}>
<div className=' text-[19px]'>X</div>
</Link>
</div>


<div className='mb-5'>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Name</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>Bachat Mart
    </div>
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Slug</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>demo@gmail.com
    </div>
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Code</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>03008930442  </div>
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] border-r-[3px] w-3/12 pl-7 py-4'>BarCode</div>
    <div className='  w-9/12 py-4 h-[30px] relative text-[0px]  mt-auto mb-auto translate-x-3'>
    <div className=' bg-black w-[4px] h-[30px] absolute left-[6px] top-0'></div>
    <div className=' bg-black w-[4px] h-[30px] absolute left-[10px] top-0'></div>
    <div className=' bg-black w-[2px] h-[30px] absolute left-[12px] top-0'></div>
    <div className=' bg-black w-[5px] h-[30px] absolute left-[16px] top-0'></div>
    <div className=' bg-black w-[1px] h-[30px] absolute left-[22px] top-0'></div>
    <div className=' bg-black w-[4px] h-[30px] absolute left-0 top-0'></div>
    <div className=' bg-black w-[4px] h-[30px] absolute left-[27px] top-0'></div>
    <div className=' bg-black w-[2px] h-[30px] absolute left-[32px] top-0'></div>
    <div className=' bg-black w-[5px] h-[30px] absolute left-[38px] top-0'></div>
    <div className=' bg-black w-[1px] h-[30px] absolute left-[44px] top-0'></div>
    <div className=' bg-black w-[4px] h-[30px] absolute left-[50px] top-0'></div>
    <div className=' bg-black w-[4px] h-[30px] absolute left-[55px] top-0'></div>
    <div className=' bg-black w-[2px] h-[30px] absolute left-[61px] top-0'></div>
    <div className=' bg-black w-[5px] h-[30px] absolute left-[66px] top-0'></div>
    <div className=' bg-black w-[1px] h-[30px] absolute left-[71px] top-0'></div>
    <div className=' bg-black w-[4px] h-[30px] absolute left-[77px] top-0'></div>
    <div className=' bg-black w-[2px] h-[30px] absolute left-[82px] top-0'></div>
    <div className=' bg-black w-[5px] h-[30px] absolute left-[88px] top-0'></div>
    <div className=' bg-black w-[1px] h-[30px] absolute left-[94px] top-0'></div>
    <div className=' bg-black w-[4px] h-[30px] absolute left-[99px] top-0'></div>
    <div className=' bg-black w-[2px] h-[30px] absolute left-[104px] top-0'></div>
    <div className=' bg-black w-[5px] h-[30px] absolute left-[110px] top-0'></div>
    <div className=' bg-black w-[1px] h-[30px] absolute left-[115px] top-0'></div>
    </div>
    
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Category</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>Bachat Mart
    </div>
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Unit</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>Wholesaler</div>
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Quantity</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>1</div>
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Quantity Alert</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>12</div>
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Buyeing Price</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>12</div>
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Selling Price</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>2</div>
  </div>
  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Tax</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>BNI
    </div>
  </div>

  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Tax type</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>BNI
    </div>
  </div>

  <div className=' w-full flex'>
    <div className=' border-[1px] w-3/12 pl-7 py-4'>Notes</div>
    <div className=' border-[1px] w-9/12 pl-7 py-4'>branded jeans
    </div>
  </div>


  <div className=' flex justify-end mt-7'>
    <div className=' w-3/12 flex justify-around lg:w-4/12'>
    <Link to={'/products'} className=' bg-blue-500 px-4 py-2 flex items-center justify-between text-white border-[1px] border-blue-500 hover:bg-white hover:text-blue-500'><span className=' mr-2'><IoIosArrowRoundBack className=' text-[22px] ' /></span><span> Back</span></Link>
    <Link to={'/products/id/edit'} className=' bg-red-500  px-4 py-2 flex justify-between items-center text-white border-[1px] border-red-500 hover:bg-white hover:text-red-500 '><span className=' mr-2'><CiEdit className=' text-[22px]'/></span><span> Edit</span></Link>
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

export default Productsid;