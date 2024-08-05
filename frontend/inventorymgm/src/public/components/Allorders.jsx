import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import "../../App.css"
import { FaPlus } from "react-icons/fa6";
import { Table } from 'antd';
import { GoEye } from "react-icons/go";
import { IoIosPrint } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

const currentItems = [
    {
      title: 'No',
      width: 10,
      dataIndex: 'No',
      key: 'No',
      category:"category",
      quantity:"qty"
     
    },
    {
      title: 'No',
      width: 10,
      dataIndex: 'No',
      key: 'No',
      category:"category",
      quantity:"qty"
     
    },
    {
      title: 'No',
      width: 10,
      dataIndex: 'No',
      key: 'No',
      category:"category",
      quantity:"qty"
     
    },
    {
      title: 'No',
      width: 10,
      dataIndex: 'No',
      key: 'No',
      category:"category",
      quantity:"qty"
     
    },
  //   {
  //   title: 'Action',
  //   dataIndex: 'Action',
  //   key: '6',
  //   width: 10,
  //   render: () => (
  //       <div className=' flex justify-around'>
  //     <Link to={'/orders/id'} className=" bg-white border-[1px] border-blue-500 text-[19px] p-2 text-blue-500  hover:bg-blue-500 hover:text-white "><GoEye /></Link>
  //     <Link to={'/allorders/id/details/download'} className=" bg-white border-[1px] border-orange-500 text-[19px] p-2 text-orange-500  hover:bg-orange-500 hover:text-white "><IoIosPrint /></Link >
  //     <button className=" bg-white border-[1px] border-red-500 text-[19px] p-2 text-red-500  hover:bg-red-500 hover:text-white"><RiDeleteBin6Line /></button>
  //     </div>
  //   ),
  // },
  
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      No: i,
      InvoiceNo: `Edward ${i}`,
      Customer: 32,
      Date: `London Park no. ${i}`,
      Payment:i*4,
      Total:i+i,
      Status:`pending`,
      Action:`del`
    });
  }
const Allorders = () => {
  return (
<>
<Navbar />

<div className='w-full mt-20 flex justify-center lg:mt-[140px] allorders z-10'>
        <div className='w-11/12 lg:w-10/12 border-[1px] rounded-md'>
        <div className=' flex justify-between p-5 border-b-[1px]'>
<div className=' font-sans font-medium text-gray-700 text-[18px]'>Orders</div>
<Link to={'/createorder'}>
<div className=' cursor-pointer'>
<button className=' bg-green-500 border-[1px] text-white p-2 rounded-md hover:bg-white hover:text-green-500  hover:border-green-500'>
    <FaPlus className=' text-[25px] '/>
</button>
</div>
</Link>

        </div>

        <div className=' flex p-5 justify-end'>
            <div>
            <span>Search: </span>
         <input type='search' className=' border-[1px] border-gray-500 rounded-md p-1 ml-1'/>
         </div>
        </div>

        {/* <div className=' flex justify-between p-5 border-b-[1px]'>
        <Table
        className=' border-[1px]'
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
      y: 300,
    }}
  />

        </div> */}


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
                                                <td className="px-4 py-2 border border-gray-300">{row.width}</td>
                                                <td className="p-1 border border-gray-300 w-[80px]">
                                                  {row.title}
                                                  </td>
                                                <td className="px-4 py-2 border border-gray-300">{row.dataIndex}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.key}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.category}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.quantity}</td>

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
      

       
        </div>
      </div>
    </>    

  )
}

export default Allorders;