


import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import "../../App.css";
import { FaPlus } from "react-icons/fa6";
import { GoEye } from "react-icons/go";
import { IoIosPrint } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

const Categoriesproductsedit = () => {
    return (
        <>
            <Navbar />

            <div className='w-full flex justify-center mt-16 pt-5 pb-56 allorders bg-[#f6f8fb] lg:mt-32'>
                <div className='w-10/12 mt-2 border-[2px] rounded-md mb-3 bg-white'>
                    <div className='flex justify-between p-5 border-b-[1px] '>
                        <div className='font-sans font-medium text-gray-700 text-[21px]'>Edit Category</div>
                        <Link to={'/setting/categories'}>
                            <div className='cursor-pointer'>
                                <button className=''>
                                   X
                                </button>
                            </div>
                        </Link>
                    </div>

                    <div className='p-5 pb-9 w-full border-b-2'>
                        <div>
                            <span className=' text-[20px]'>Name </span>
                            <input type='search' className=' mt-2  leading-10 border-[1px] border-gray-500 rounded-md p-1 ml-1 w-full' />
                        </div>
                    </div>

                    <div className='p-5  w-full '>
                        <div className=' text-right'>
                            <button className=' bg-blue-600 py-3 border-[2px] font-semibold border-blue-500 hover:bg-white hover:text-blue-500 px-5 text-white rounded-md '>Update</button>
                        </div>
                    </div>

                  

  

                </div>


            </div>
        </>
    );
};

export default Categoriesproductsedit;
