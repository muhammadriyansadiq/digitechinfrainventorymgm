import Navbar from "./Navbar";
import "../../App.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";



const Downloadordersdetails = () => {
    const data = [
    // Add your data here
    { col1: 'Oktra 100” FLAGSHIP 4K UHD X1000 SERIES (X650) 4k, amazon prime, Android tv, FHD, LED, led tv, netflix, playstore, SMART, smart tv, UHD, youtube', col2: '€899,999.00	', col3: '1', col4: '€899,999.00' }

    // More rows as needed
  ];
  return (
    <div className=" w-full">
      <div className="w-full flex justify-center font-bold text-[14px]">
        <div className=" w-11/12 border-[1px] mt-4 flex flex-col  py-2 px-3 lg:px-0 lg:flex-row lg:justify-around lg:items-center">
          <div className=" ">Invoice # INV-000002</div>
          <div className=" mt-3 lg:mt-0">Invoice date: 2024-04-30 00:00:00</div>
          <div className=" mt-3 lg:mt-0">
            <div>Customer</div>
            <div>Rabees Waheed</div>

            <div>03332313391</div>
            <div>rabees699@gmail.com</div>
            <div>House # 418 PIB Colony</div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center">
<div className=" w-11/12 h-[300px] overflow-auto mt-5">

<table className="w-full bg-white border border-gray-300">
         <thead>
           <tr className=" bg-gray-300 text-blue-600 leading-10">
             <th className="px-4 py-2 border-[1px] border-gray-400">Item</th>
             <th className="px-4 py-2 border-[1px] border-gray-400">Price</th>
             <th className="px-4 py-2 border-[1px] border-gray-400">Quantity</th>
             <th className="px-4 py-2 border-[1px] border-gray-400">SubTotal</th>
           </tr>
         </thead>
         <tbody>
           {data.map((row, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="px-4 py-2 border border-gray-300">{row.col1}</td>
              <td className="px-4 py-2 border border-gray-300">{row.col2}</td>
              <td className="px-4 py-2 border border-gray-300 text-center">{row.col3}</td>
              <td className="px-4 py-2 border border-gray-300">{row.col4}</td>
          
            </tr>
          ))}
          <tr className=" leading-10">
            <td colSpan={3} className=" border-[1px] text-right pr-4 font-bold">SubtTotal</td>
            <td className=" text-center border-[1px]">€899,999.00
            </td>
            
          </tr>
          <tr className=" leading-10">
            <td colSpan={3} className=" border-[1px] text-right pr-4 font-bold">SubtTotal</td>
            <td className=" text-center border-[1px]">€899,999.00
            </td>
            
          </tr>
          <tr className=" leading-10">
            <td colSpan={3} className=" border-[1px] text-right pr-4 font-bold">SubtTotal</td>
            <td className=" text-center border-[1px]">€899,999.00
            </td>
            
          </tr>
        </tbody>
      </table>
</div>
      </div>

      <div className=" w-full flex justify-center mt-5">
<div className=" w-11/12 lg:w-5/12">
<div className=" flex justify-around">
  <button className=" bg-green-700 p-3 text-white hover:bg-green-400 hover:scale-110 transform transition-transform duration-1000 ease-in-out">Print invoice</button>
  <button className="bg-green-700 p-3 text-white hover:bg-green-400 hover:scale-110 transform transition-transform duration-1000 ease-in-out">Download Invoice</button>
  <button className="bg-green-700 p-3 text-white hover:bg-green-400 hover:scale-110 transform transition-transform duration-1000 ease-in-out">Back</button>
</div>
</div>
      </div>
    </div>
  );
};

export default Downloadordersdetails;


// src/ResponsiveTable.js
// import React from 'react';

// const Downloadordersdetails = () => {
//   const data = [
//     // Add your data here
//     { col1: 'Row1-Col1', col2: 'Row1-Col2', col3: 'Row1-Col3', col4: 'Row1-Col4', col5: 'Row1-Col5', col6: 'Row1-Col6', col7: 'Row1-Col7' },
//     { col1: 'Row2-Col1', col2: 'Row2-Col2', col3: 'Row2-Col3', col4: 'Row2-Col4', col5: 'Row2-Col5', col6: 'Row2-Col6', col7: 'Row2-Col7' },
//     // More rows as needed
//   ];

//   return (
//     <div className="overflow-y-auto overflow-x-auto w-10/12">
//       <table className="w-full h-[100px] bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="px-4 py-2 border border-gray-300">Column 1</th>
//             <th className="px-4 py-2 border border-gray-300">Column 2</th>
//             <th className="px-4 py-2 border border-gray-300">Column 3</th>
//             <th className="px-4 py-2 border border-gray-300">Column 4</th>
//             <th className="px-4 py-2 border border-gray-300">Column 5</th>
//             <th className="px-4 py-2 border border-gray-300">Column 6</th>
//             <th className="px-4 py-2 border border-gray-300">Column 7</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index} className="border border-gray-300">
//               <td className="px-4 py-2 border border-gray-300">{row.col1}</td>
//               <td className="px-4 py-2 border border-gray-300">{row.col2}</td>
//               <td className="px-4 py-2 border border-gray-300">{row.col3}</td>
//               <td className="px-4 py-2 border border-gray-300">{row.col4}</td>
//               <td className="px-4 py-2 border border-gray-300">{row.col5}</td>
//               <td className="px-4 py-2 border border-gray-300">{row.col6}</td>
//               <td className="px-4 py-2 border border-gray-300">{row.col7}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Downloadordersdetails;
