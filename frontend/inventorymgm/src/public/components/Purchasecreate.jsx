

import "../../App.css";
import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const Purchasecreate = () => {
    const[price,setPrice]= useState(0)
    const [display,setDisplay] = useState(false)
    const [sendbtn,setsendbtn] = useState(false)
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

      <div className=" mt-16 bg-[#F6F8FB] w-full flex justify-center py-3 orderscreate lg:mt-32">
        <div className="w-full flex flex-col lg:w-10/12  lg:flex-row justify-between">
          <div className=" lg:w-full border-[1px] bg-white ">
            <div className=" w-full flex justify-center  border-b-[1px] py-4">
              <div className=" flex justify-between w-11/12">
                <div className=" text-[17px] font-semibold">Create Purchase</div>
                <Link to={'/purchase'}>X</Link>
              </div>
            </div>

            <div className=" w-full flex justify-center">
              <div className=" w-11/12 flex justify-between items-center py-4 ">
                <div className=" ">
                  <label htmlFor="">Purchase Date</label>
                  <input
                    className=" w-11/12 border-[1px] leading-9 px-1"
                    type="date"
                    name=""
                    id=""
                  />
                </div>

                <div className=" translate-x-2">
                  <label htmlFor="">Suppliers</label>
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
                      <th className=" border-[1px] text-gray-600 text-[12px] w-[140px]">Price </th>
                      <th className=" border-[1px] text-gray-600 text-[12px] ">Subtotal</th>
                      <th className=" border-[1px] text-gray-600 text-[12px] w-[130px]">Action</th>
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
                          <div className="">
                            <div className="  flex justify-around">
                              <Link to={'/purchase/create/edit'} className=" bg-orange-500 p-2 text-white border-orange-500 border-[1px] rounded-md hover:bg-white hover:text-orange-500">
                                <FaEdit className="  text-[20px]" />
                              </Link>
                              <button className=" bg-red-500 p-2 text-white rounded-md hover:bg-white hover:text-red-500 border-[1px] border-red-500"><MdDeleteForever className="  text-[20px]" /></button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}

{display?
                    <tr className=" leading-10" key="new-entry">
                      
                        <td colSpan="" className=" border-[1px] text-center ">
                        <select onChange={onselect} name="cars" id="cars" className=" border-[1px] w-11/12 p-1 customselect ">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>                            
</td>
                        <td colSpan="" className=" py-2 border-[1px] text-center">
                            <input value={1} type="number" name="" id="" className=" border-[1px] w-11/12" />
                            </td>
                        <td colSpan="" className="  py-2 border-[1px] text-center">
                            {price}
                        </td>
                        <td colSpan="" className=" border-[1px] text-right pr-2"></td>
                        <td className="lg:w-[130px] border-[1px] text-center ">
                          <Link className="">
                            <div className="  flex justify-around">

{sendbtn?
                              <Link  onClick={datasend} className=" bg-green-500 p-2 text-white border-green-500 border-[1px] rounded-md hover:bg-white hover:text-green-500">
                                <IoIosSend  className="  text-[20px]" />
                              </Link>
:""
}
                              <button className=" bg-red-500 p-2 text-white rounded-md hover:bg-white hover:text-red-500 border-[1px] border-red-500"><MdDeleteForever className="  text-[20px]" /></button>
                            </div>
                          </Link>
                        </td>
                      
                    </tr>
                    :""

}

                    <tr className=" leading-10">
                      <td colSpan="4" className=" border-[1px] text-right pr-2"></td>
                      <td className=" border-[1px] text-center "><Link className=""> <button onClick={toggleDisplay} className=" p-2 bg-green-500 text-white rounded-md hover:bg-white border-[1px] border-green-500 hover:text-green-500"><FaPlus /></button></Link></td>
                    </tr>

                    <tr className=" leading-10">
                      <td colSpan="4" className=" border-[1px]  text-right pr-2 font-bold">SubTotal</td>
                      <td className=" border-[1px] text-center">0</td>
                    </tr>
                    <tr className=" leading-10">
                      <td colSpan="4" className=" border-[1px] text-right pr-2 font-bold">Taxes</td>
                      <td className=" border-[1px] text-center">0 %</td>
                    </tr>
                    <tr className=" leading-10">
                      <td colSpan="4" className=" border-[1px]  text-right pr-2 font-bold">Total</td>
                      <td className=" border-[1px] text-center">0</td>
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

export default Purchasecreate;
