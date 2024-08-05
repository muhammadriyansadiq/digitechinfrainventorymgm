


import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import "../../App.css";
import { FaPlus } from "react-icons/fa6";
import { GoEye } from "react-icons/go";
import { IoIosPrint } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button, Dropdown, Space } from 'antd';
import { BsThreeDotsVertical } from "react-icons/bs";
import * as XLSX from "xlsx"; // Use * as XLSX


const Products = () => {
    const data = [
        // Add your data here
        { col1: '0', col2: 'https://cdn.pixabay.com/photo/2024/05/08/17/45/animal-8748794_640.jpg',  col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },
        { col1: '0', col2: 'https://cdn.pixabay.com/photo/2024/05/08/17/45/animal-8748794_640.jpg',  col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },{ col1: '0', col2: 'https://cdn.pixabay.com/photo/2024/05/08/17/45/animal-8748794_640.jpg',  col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },
        { col1: '0', col2: 'https://cdn.pixabay.com/photo/2024/05/08/17/45/animal-8748794_640.jpg',  col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },
        { col1: '0', col2: 'https://cdn.pixabay.com/photo/2024/05/08/17/45/animal-8748794_640.jpg',  col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },
        { col1: '0', col2: 'https://cdn.pixabay.com/photo/2024/05/08/17/45/animal-8748794_640.jpg',  col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" }, 
      ];



    const items = [
        {
          key: '1',
          label: (
            <Link to={'/createproduct'}  rel="noopener noreferrer" >
             + Add Product
            </Link>
            
          ),
        },
        {
            key: '2',
            label: (
              <Link to={'/importproduct'}  rel="noopener noreferrer" >
               + Import Product
              </Link>
              
            ),
          },
          {
            key: '3',
            label: (
              <button onClick={exportproduct}  rel="noopener noreferrer" >
               + Export Product
              </button>
              
            ),
          },
       
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


        function exportproduct(){
    var wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(data)

    XLSX.utils.book_append_sheet(wb,ws,"mysheet1")
    XLSX.writeFile(wb,"myexcel.xlsx")

    console.log(data,"data")

        }

    return (
        <>

            <Navbar  className =""/>

            <div className='mt-[120px] w-full flex justify-center pt-5 allorders z-0 '>
                <div className='w-11/12 lg:w-10/12 mt-2 border-[2px] rounded-md mb-3 bg-white'>
                    <div className='flex w-full py-5 pl-4 pr-8 justify-between border-b-[1px]  lg:p-5'>
                        <div className='font-sans font-medium text-gray-700 text-[18px]'>Category: jeans</div>
                        <div className='w-2/12 lg:w-1/12 flex justify-between '>
                        <div className=' cursor-pointer hover:bg-gray-300'>
<Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Button className=' opacity-[0.85]'><BsThreeDotsVertical /></Button>
      </Dropdown>
</div>
                            <div className=' hover:bg-gray-300 px-2'><Link to={'/categories'}>X</Link> </div>
                        </div>
                    </div>

                    <div className='flex p-5 justify-end'>
                        <div>
                            <span>Search: </span>
                            <input type='search' className='border-[1px] border-gray-500 rounded-md p-1 ml-1' />
                        </div>
                    </div>

                    <div className='flex justify-between border-b-[2px] mb-3 pb-3 '>
                        <div className="w-full flex justify-center">
                            <div className="w-full h-[300px] overflow-auto mt-5">
                                <table className="w-full border-[2px] bg-white  border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-300 border-[2px] text-blue-600 leading-10 border-gray-600">
                                            <th className="px-4 py-2 border-[1px] border-gray-400 lg:w-[70px]">No</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400 lg:w-[80px]">Image</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400 lg:w-[120px]">Name</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400 lg:w-[120px]">Code</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400 lg:w-[190px]">Category </th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400 lg:w-[120px]">Quantity</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400 lg:w-[80px]">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentItems.map((row, index) => (
                                            <tr key={index} className="border border-gray-300">
                                                <td className="px-4 py-2 border border-gray-300">{row.col1}</td>
                                                <td className="p-1 border border-gray-300 w-[80px]"><img className=' h-[50px] w-full object-cover' src={row.col2} alt="" /></td>
                                                <td className="px-4 py-2 border border-gray-300">{row.col5}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.col6}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.col6}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.col6}</td>

                                                <td className="px-4 py-2 border border-gray-300 lg:px-0">
                                                    <div className='flex justify-around'>
                                                        <Link to={'/products/id'} className="bg-white border-[1px] mr-2 border-blue-500 text-[19px] p-2 text-blue-500 hover:bg-blue-500 hover:text-white"><GoEye /></Link>
                                                        <Link to={'/products/id/edit'} className="bg-white mr-2 border-[1px] border-orange-500 text-[19px] p-2 text-orange-500 hover:bg-orange-500 hover:text-white"><IoIosPrint /></Link>
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

        </>
    );
};

export default Products;
