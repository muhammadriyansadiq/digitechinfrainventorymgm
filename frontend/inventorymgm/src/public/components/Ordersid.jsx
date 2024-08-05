

import "../../App.css";
import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { Button, Dropdown, Space } from 'antd';
import { BsThreeDotsVertical } from "react-icons/bs";

const Ordersid = () => {
    const[price,setPrice]= useState(0)
    const [sendbtn,setsendbtn] = useState(false)
    const items = [
        {
          key: '1',
          label: (
            <div className=" text-green-500"  rel="noopener noreferrer" >
             Approved Orders
            </div>
          ),
        },
       
      ];

    const toggleDisplay = () => {
        setDisplay((prevDisplay) => !prevDisplay);
      };

      const onselect = ()=>{
        console.log("clicked")
        setPrice(3)
        setsendbtn(true)
      }
  const data = [
    // Add your data here
    { col1: '0', col2: 'Riyan', col3: 'rabees699@gmail.com', col4: '1 month ago', col5: 'button', col6: "opop", col7: "ok" },
    { col1: '0', col2: 'Riyan', col3: 'rabees699@gmail.com', col4: '1 month ago', col5: 'button', col6: "opop", col7: "ok" },
    { col1: '0', col2: 'Riyan', col3: 'rabees699@gmail.com', col4: '1 month ago', col5: 'button', col6: "opop", col7: "ok" },
    { col1: '0', col2: 'Riyan', col3: 'rabees699@gmail.com', col4: '1 month ago', col5: 'button', col6: "opop", col7: "ok" },
    { col1: '0', col2: 'Riyan', col3: 'rabees699@gmail.com', col4: '1 month ago', col5: 'button', col6: "opop", col7: "ok" },
    { col1: '0', col2: 'Riyan', col3: 'rabees699@gmail.com', col4: '1 month ago', col5: 'button', col6: "opop", col7: "ok" },
  ];

  const datasend = () =>{
    setPrice(0)
    setDisplay((prevDisplay) => !prevDisplay);
  }

  const purchasedata = [
    {
      product: "jeans",
      quantity: 3,
      price: 4,
      total: 123
    }
  ]

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

      <div className=" bg-[#F6F8FB] w-full flex justify-center py-3 orderscreate">
        <div className="w-full flex flex-col lg:w-10/12  lg:flex-row justify-between">
          <div className=" lg:w-full border-[1px] bg-white ">
            <div className=" w-full flex justify-center  border-b-[1px] py-4">
             
            <div className='flex w-full py-5 pl-4 pr-8 justify-between border-b-[1px]  lg:p-5'>
                        <div className='font-sans font-medium text-gray-700 text-[18px]'>Orders details</div>
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
                            <div className=' hover:bg-gray-300 px-2'><Link to={'/allorders'}>X</Link> </div>
                        </div>
                    </div>


            </div>

            <div className=" w-full flex justify-center">
              <div className=" w-full lg:px-4 flex justify-between items-center py-4 ">
                <div className=" ">
                  <label htmlFor="">Orders Date</label>
                  <input
                    className=" w-11/12 border-[1px] leading-9 px-1"
                    type="date"
                    name=""
                    id=""
                  />
                </div>

                <div className=" translate-x-2">
                  <label htmlFor="">Invoice number</label>
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
                  <label htmlFor="">Customer</label>
                  <input
                    className=" w-11/12  border-[1px] leading-9 px-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>

                <div className=" translate-x-5 lg:translate-x-4">
                  <label htmlFor="">Payment type</label>
                  <input
                    className=" w-11/12  border-[1px] leading-9 px-1 lg:translate-x-2"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>

            <div className=" w-full flex justify-center ">
              <div className=" w-full lg:px-4 ">
                <table className="w-full">
                  <thead className=" border-[1px]">
                    <tr className=" leading-8">
                      <th className=" border-[1px] text-gray-600 text-[12px]">No</th>
                      <th className=" border-[1px] text-gray-600 text-[12px] ">Photo</th>
                      <th className=" border-[1px] text-gray-600 text-[12px] w-[140px]">Product name </th>
                      <th className=" border-[1px] text-gray-600 text-[12px] ">Product code</th>
                      <th className=" border-[1px] text-gray-600 text-[12px] w-[130px]">Quantity</th>
                      <th className=" border-[1px] text-gray-600 text-[12px] w-[130px]">Price</th>
                      <th className=" border-[1px] text-gray-600 text-[12px] w-[130px]">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchasedata?.map((data, ind) => (
                      <tr key={ind} className=" leading-10">
                        <td colSpan="" className=" border-[1px] text-right pr-2">{data.product}</td>
                        <td colSpan="" className=" py-2 border-[1px] text-center">
                            {data.quantity}
                            </td>
                        <td colSpan="" className=" border-[1px] text-center pr-2">{data.price}</td>
                        <td colSpan="" className=" border-[1px] text-right pr-2">{data.quantity * data.price}</td>

                        <td className="lg:w-[130px] border-[1px] text-center ">
                          {data.quantity}
                        </td>
                        <td className="lg:w-[130px] border-[1px] text-center ">
                          {data.quantity}
                        </td>
                        <td className="lg:w-[130px] border-[1px] text-center ">
                          {data.quantity}
                        </td>
                      </tr>
                    ))}



                    <tr className=" leading-10">
                      <td colSpan="6" className=" border-[1px] text-right pr-2">Payed amount</td>
                      <td className=" border-[1px] text-center ">56</td>
                    </tr>

                    <tr className=" leading-10">
                      <td colSpan="6" className=" border-[1px] text-right pr-2">Due</td>
                      <td className=" border-[1px] text-center ">89</td>
                    </tr>
                    <tr className=" leading-10">
                      <td colSpan="6" className=" border-[1px] text-right pr-2">Vat </td>
                      <td className=" border-[1px] text-center ">
                        090
                      </td>
                    </tr>
                    <tr className=" leading-10">
                      <td colSpan="6" className=" border-[1px] text-right pr-2">Total</td>
                      <td className=" border-[1px] text-center ">
                        90</td>
                    </tr>
                    <tr className=" leading-10">
                      <td colSpan="6" className=" border-[1px] text-right pr-2">Status</td>
                      <td className=" border-[1px] text-center ">
                        Pending
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className=" w-full flex justify-center mt-8  border-[1px] py-4">
              <div className=" flex justify-end w-11/12">
                <div><button className=" bg-green-500 text-white px-4 py-2 rounded-md border-green-500 border-[1px] hover:bg-white hover:text-green-500">Purchase</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ordersid;
