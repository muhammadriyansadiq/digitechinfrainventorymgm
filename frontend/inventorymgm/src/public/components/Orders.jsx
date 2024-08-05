import "../../App.css";
import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { GoEye } from "react-icons/go";
import { IoIosPrint } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";



const Orders = () => {
  const data = [
    // Add your data here
    { col1: '0', col2: 'Riyan', col3: 'rabees699@gmail.com', col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },
    { col1: '0', col2: 'Riyan', col3: 'rabees699@gmail.com', col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },
    { col1: '0', col2: 'Riyan', col3: 'rabees699@gmail.com', col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },
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

      <div className=" bg-[#F6F8FB] w-full flex justify-center py-3 orderscreate mt-[125px]">
        <div className="w-full flex flex-col lg:w-10/12  lg:flex-row justify-between">

          <div className=" lg:w-6/12 border-[1px] bg-white ">
            <div className=" w-full flex justify-center  border-b-[1px] py-4">
              <div className=" flex justify-between w-11/12">
                <div>New Order</div>
                <Link to={'/allorders'}>X</Link>
              </div>
            </div>

            <div className=" w-full flex justify-center">
              <div className=" w-11/12 flex justify-between items-center py-4 ">
                <div className=" ">
                  <label htmlFor="">Date</label>
                  <input
                    className=" w-11/12 border-[1px] leading-9 px-1"
                    type="date"
                    name=""
                    id=""
                  />
                </div>

                <div className=" translate-x-2">
                  <label htmlFor="">Customer</label>
                  <select
                    name="cars"
                    className=" w-11/12 border-[1px] py-2 px-1"
                    id="cars"
                  >
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>

                <div className=" translate-x-5 lg:translate-x-4">
                  <label htmlFor="">Reference</label>
                  <input
                    className=" w-11/12  border-[1px] leading-9 px-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>

            <div className=" w-full flex justify-center ">
                <div className=" w-11/12 ">
               
<table className="w-full">
  <thead className=" border-[1px]">
    <tr className=" leading-8">
<th className=" border-[1px] text-gray-600 text-[12px]">Product</th>
<th className=" border-[1px] text-gray-600 text-[12px] ">Quantity</th>
<th className=" border-[1px] text-gray-600 text-[12px] ">Price </th>
<th className=" border-[1px] text-gray-600 text-[12px] ">Subtotal</th>
<th className=" border-[1px] text-gray-600 text-[12px] ">Action</th>
    </tr>
</thead>  
<tbody>  
    <tr className=" leading-10">
    <td colSpan="5" className=" border-[1px]  text-center">Add Products</td>
    </tr>
    <tr className=" leading-10">
    <td colSpan="4" className=" border-[1px] text-right pr-2">Total Products</td>
    <td className=" border-[1px] text-center">0</td>
    </tr>
    <tr className=" leading-10">
    <td colSpan="4" className=" border-[1px]  text-right pr-2">SubTotal</td>
    <td className=" border-[1px] text-center">0</td>
    </tr>
    <tr className=" leading-10">
    <td colSpan="4" className=" border-[1px] text-right pr-2">Tax</td>
    <td className=" border-[1px] text-center">0</td>
    </tr>
    <tr className=" leading-10">
    <td colSpan="4" className=" border-[1px]  text-right pr-2">Total</td>
    <td className=" border-[1px] text-center">0</td>
    </tr>
  </tbody>
</table>
                </div>
            </div>

            <div className=" w-full flex justify-center mt-8  border-[1px] py-4">
              <div className=" flex justify-end w-11/12">
                <div><button className=" bg-green-500 text-white px-4 py-2 rounded-md">Create Invoice</button></div>
              </div>
            </div>


          </div>

          <div className=" lg:w-5/12 bg-white border-[1px]">
          <div className=" w-full flex justify-center  border-b-[1px] py-4">
              <div className=" flex justify-start w-11/12">
                <div>List Product</div>
               
              </div>
            </div>



<div className='flex justify-between border-b-[2px] mb-3 pb-3 '>
                        <div className="w-full flex justify-center">
                            <div className="w-full h-[300px] overflow-auto mt-5">
                                <table className="w-full border-[2px] bg-white  border-gray-300">
                                    <thead>
                                        <tr className="w-full bg-gray-300 text-blue-600 leading-10 border-[2px] border-gray-400">
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Id</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Name</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Email Address</th>
                                            <th className="px-4 py-2 border-b-[1px] leading-10  border-gray-400 block w-[130px] ">Shop Name</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Type</th>

                                            <th className="px-4 py-2 border-gray-400 block w-[130px]  lg:mt-3 border-b-[1px]">Created At</th>
                                            <th className="px-4 py-2 border-gray-400 border-[1px]  lg:mt-5">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentItems.map((row, index) => (
                                            <tr key={index} className="border border-gray-300">
                                                <td className="px-4 py-2 border border-gray-300">{row.col1}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.col2}</td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.col3}</td>
                                                <td className="px-4 py-2 border border-gray-300 ">{row.col4}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.col5}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.col6}</td>
                                                <td className="px-2 py-2 border border-gray-300">
                                                    <div className='flex justify-around'>
                                                        <Link to={'/orders/id'} className="bg-white border-[1px] border-blue-500 text-[19px] p-2 text-blue-500 hover:bg-blue-500 hover:text-white mr-1"><GoEye /></Link>
                                                        <Link to={'/orders/id/edit'} className="bg-white border-[1px] border-orange-500 text-[19px] p-2 text-orange-500 hover:bg-orange-500 hover:text-white mr-1"><IoIosPrint /></Link>
                                                        <button className="bg-white border-[1px] border-red-500 text-[19px] p-2 text-red-500 hover:bg-red-500 hover:text-white"><RiDeleteBin6Line /></button>
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
      </div>
    </>
  );
};

export default Orders;


