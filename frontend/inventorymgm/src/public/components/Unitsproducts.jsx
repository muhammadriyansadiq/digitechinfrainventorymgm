


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

    const Unitsproducts = () => {

        const items = [
            {
            key: '1',
            label: (
                <Link to={'/createproduct'}  rel="noopener noreferrer" >
                + Add Product
                </Link>
            ),
            },
        
        ];



        const data = [
            // Add your data here
            { col1: '0', col2: 'Riyan',  col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },
            { col1: '0', col2: 'Riyan',  col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },{ col1: '0', col2: 'Riyan',  col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },
            { col1: '0', col2: 'Riyan',  col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },
            { col1: '0', col2: 'Riyan',  col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" },
            { col1: '0', col2: 'Riyan',  col4: '1 month ago', col5: 'button',col6:"opop",col7:"ok" }, 
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

                <div className='w-full flex justify-center mt-12 pt-5 allorders bg-[#f6f8fb] lg:mt-32'>
                    <div className='w-10/12 mt-2 border-[2px] rounded-md mb-3 bg-white'>
                        <div className='flex w-full justify-between p-5 border-b-[1px] '>
                            <div className='font-sans font-medium text-gray-700 text-[18px]'>Category: jeans</div>
                            <div className=' w-1/12 flex justify-between '>
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
                                <div className=' hover:bg-gray-300 px-2'><Link to={'/setting/units'}>X</Link> </div>
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
                                            <tr className="bg-gray-300 text-blue-600 leading-10">
                                                <th className="px-4 py-2 border-[1px] border-gray-400">Id</th>
                                                <th className="px-4 py-2 border-[1px] border-gray-400">Product Name</th>
                                                <th className="px-4 py-2 border-[1px] border-gray-400">Product Code</th>
                                                <th className="px-4 py-2 border-[1px] border-gray-400">Product Quantity</th>
                                                <th className="px-4 py-2 border-[1px] border-gray-400">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentItems.map((row, index) => (
                                                <tr key={index} className="border border-gray-300">
                                                    <td className="px-4 py-2 border border-gray-300">{row.col1}</td>
                                                    <td className="px-4 py-2 border border-gray-300">{row.col2}</td>
                                                    <td className="px-4 py-2 border border-gray-300">{row.col5}</td>
                                                    <td className="px-4 py-2 border border-gray-300">{row.col6}</td>
                                                    <td className="px-4 py-2 border border-gray-300">
                                                        <div className='flex justify-around'>
                                                            <Link to={'/products/id'} className="bg-white border-[1px] border-blue-500 text-[19px] p-2 text-blue-500 hover:bg-blue-500 hover:text-white"><GoEye /></Link>
                                                            <Link to={'/products/id/edit'} className="bg-white border-[1px] border-orange-500 text-[19px] p-2 text-orange-500 hover:bg-orange-500 hover:text-white"><IoIosPrint /></Link>
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

    export default Unitsproducts;
