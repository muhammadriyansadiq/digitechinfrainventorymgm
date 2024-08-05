


import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import "../../App.css";
import { FaPlus } from "react-icons/fa6";
import { GoEye } from "react-icons/go";
import { IoIosPrint } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiGreaterThanBold } from "react-icons/pi";

const Purchasereportdetails = () => {
    

  
  

    return (
        <>
            <Navbar />
            <div className=' bg-[#f6f8fb] mt-16 lg:mt-32'>

            

<div className=' w-full py-4'>
<div className=' w-10/12  ml-auto mr-auto text-blue-500'>
    Purchase  
</div>
<div className=' w-10/12 mt-5  ml-auto mr-auto flex items-center'>
<div className='w-2/12 flex items-center justify-between text-blue-500'>
    <Link to={'/purchase'}>Purchase</Link>
<PiGreaterThanBold /> 
    <Link to={'/purchase/report/details'}>Report</Link>
    </div>
</div>
</div>

            <div className='w-full flex justify-center  allorders bg-[#f6f8fb]'>
                <div className='w-10/12 mt-2 border-[2px] rounded-md mb-3 bg-white'>
                    <div className='flex justify-between p-5 border-b-[1px] '>
                        <div className='font-sans font-medium text-gray-700 text-[21px]'>Purchase report details</div>
                        <Link to={'/purchase'}>
                            <div className='cursor-pointer'>
                                <button className=''>
                                   X
                                </button>
                            </div>
                        </Link>
                    </div>

                    <div className='p-5 w-full'>
                        <div>
                            <span className=' text-[15px]'>Name </span>
                            <input type='search' className=' mt-2  leading-10 border-[1px] border-gray-500 rounded-md  ml-1 w-full' placeholder=' Enter Name' />
                        </div>
                    </div>

                    <div className='px-5 pb-9 w-full border-b-2'>
                        <div>
                            <span className=' text-[15px]'>Short Code </span>
                            <input type='search' className=' mt-2  leading-10 border-[1px] border-gray-500 rounded-md  ml-1 w-full' placeholder=' ' />
                        </div>
                    </div>

                    <div className='p-5  w-full '>
                        <div className=' text-right'>
                            <button className=' bg-blue-600 py-2 border-[2px] font-semibold border-blue-500 hover:bg-white hover:text-blue-500 px-5 text-white rounded-md '>Create</button>
                        </div>
                    </div>

                  

  

                </div>


            </div>
            </div>
        </>
    );
};

export default Purchasereportdetails;
