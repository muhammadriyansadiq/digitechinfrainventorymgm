


import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import "../../App.css";
import { FaPlus } from "react-icons/fa6";
import { GoEye } from "react-icons/go";
import { IoIosPrint } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiPencil } from "react-icons/ti";

const Ordersdue = () => {
    const data = [
        // Add your data here
        { col1: '0', col2: 'Riyan', col3: 'rabees699@gmail.com', col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },
        { col1: '0', col2: 'Riyan', col3: 'rabees699@gmail.com', col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },{ col1: '0', col2: 'Riyan', col3: 'rabees699@gmail.com', col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },
        { col1: '0', col2: 'Riyan', col3: 'rabees699@gmail.com', col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },
        { col1: '0', col2: 'Riyan', col3: 'rabees699@gmail.com', col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },
        { col1: '0', col2: 'Riyan', col3: 'rabees699@gmail.com', col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" }, 
      ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Get the current items to display based on the current page
    const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <>
            <Navbar />

            <div className='w-full mt-24 flex justify-center allorders lg:mt-[140px]'>
                <div className='w-10/12 border-[2px] rounded-md mb-3'>
                    <div className='flex justify-between p-5 border-b-[1px]'>
                        <div className='font-sans font-medium text-gray-700 text-[18px]'>Due Orders List</div>
                        <Link to={'/createorder'}>
                            <div className='cursor-pointer'>
                                <button className='bg-green-500 border-[1px] text-white p-2 rounded-md hover:bg-white hover:text-green-500 hover:border-green-500'>
                                    <FaPlus className='text-[25px]' />
                                </button>
                            </div>
                        </Link>
                    </div>

                   

                    <div className='flex justify-between border-b-[2px] mb-3 pb-3 '>
                        <div className="w-full flex justify-center px-4">
                            <div className="w-full  h-[300px] overflow-auto mt-5">
                                <table className="w-full border-[2px] bg-white  border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-300 text-blue-600 leading-10">
                                            <th className="px-4 py-2 border-[1px] border-gray-400">No</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Invoice No</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Customer</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Date</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Payment</th>

                                            <th className="px-4 py-2 border-[1px] border-gray-400">Pay</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Due</th>

                                            <th className="px-4 py-2 border-[1px] border-gray-400 lg:w-[100px]">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentItems.map((row, index) => (
                                            <tr key={index} className="border border-gray-300">
                                                <td className="px-4 py-2 border border-gray-300">{row.col1}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.col2}</td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.col3}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.col4}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.col5}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.col6}</td>

                                                <td className="px-4 py-2 border border-gray-300">{row.col6}</td>
                                                <td className="px-4 py-2 border border-gray-300">
                                                    <div className='flex justify-around'>
                                                        <Link to={'/due/orders/edit/id'} className="bg-white border-[1px] border-blue-500 text-[19px] p-2 text-blue-500 hover:bg-blue-500 hover:text-white"><TiPencil /></Link>
                                                        </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

<div className=' w-full flex justify-center '>
                    <div className='flex w-11/12 justify-between py-5'>
                        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50">
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50">
                            Next
                        </button>
                    </div>
</div>  

                </div>
            </div>
        </>
    );
};

export default Ordersdue;
