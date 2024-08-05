// import Navbar from "./Navbar";
// import "../../App.css";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Quotations from "./Quotations";

// // Sample data
// const sample = [
//   {
//     Photo:
//       "https://cdn.pixabay.com/photo/2024/02/05/17/10/coffee-8554940_640.jpg",
//     ProductName:
//       "Oktra 100” FLAGSHIP 4K UHD X1000 SERIES (X650) 4k, amazon prime, Android tv, FHD, LED, led tv, netflix, playstore, SMART, smart tv, UHD, youtube",
//     ProductCode: "PC01",
//     currentstock: 1,
//     Quantity: 3,
//     Price: 899999,
//     SubTotal: 899999,
//   },
// ];

// function createData(
//   No,
//   Photo,
//   ProductName,
//   ProductCode,
//   currentstock,
//   Quantity,
//   Price,
//   SubTotal
// ) {
//   return {
//     No,
//     Photo,
//     ProductName,
//     ProductCode,
//     currentstock,
//     Quantity,
//     Price,
//     SubTotal,
//   };
// }

// const columns = [
//   {
//     width: 50,
//     label: "No",
//     dataKey: "No",
//   },
//   {
//     width: 50,
//     label: "Photo",
//     dataKey: "Photo",
//   },
//   {
//     width: 300,
//     label: "Product Name",
//     dataKey: "ProductName",
//   },
//   {
//     width: 100,
//     label: "Product Code",
//     dataKey: "ProductCode",
//   },
//   {
//     width: 80,
//     label: "Current stock",
//     dataKey: "currentstock",
//   },
//   {
//     width: 80,
//     label: "Quantity",
//     dataKey: "Quantity",
//   },
//   {
//     width: 100,
//     label: "Price",
//     dataKey: "Price",
//   },
//   {
//     width: 100,
//     label: "SubTotal",
//     dataKey: "SubTotal",
//   },
// ];

// const rows = sample.map((item, index) =>
//   createData(
//     index + 1,
//     item.Photo,
//     item.ProductName,
//     item.ProductCode,
//     item.currentstock,
//     item.Quantity,
//     item.Price,
//     item.SubTotal
//   )
// );

// const summaryData = [
//   { label: "Payed amount", value: "799,999.00" },
//   { label: "Due", value: "316,000.00" },
//   { label: "VAT", value: "216,000.00" },
//   { label: "Total", value: "1,115,999.00" },
//   { label: "Status", value: "Pending", status: true },
// ];

// function subtotal(items) {
//   return items.map(({ SubTotal }) => SubTotal).reduce((sum, i) => sum + i, 0);
// }

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

// function Quotationsid() {
//   const invoiceSubtotal = subtotal(rows);
//   const invoiceTaxes = 0.07 * invoiceSubtotal;
//   const invoiceTotal = invoiceTaxes + invoiceSubtotal;
//   const data = [
//     // Add your data here
//     {
//         col1:1,
//         col2:"https://cdn.pixabay.com/photo/2024/02/05/17/10/coffee-8554940_640.jpg",
//       col3: "Oktra 100” FLAGSHIP 4K UHD X1000 SERIES (X650) 4k, amazon prime, Android tv, FHD, LED, led tv, netflix, playstore, SMART, smart tv, UHD, youtube",
//       col4:"pco1",
//       col5: "11",
//       col6: "1",
//       col7: "0.00",
//       col8: "0.00",
//     },

//     // More rows as needed
//   ];

//   return (
//     <>
//       <Navbar />

//       <div className="bg-[#F6F8FB] w-full flex justify-center py-3 orderscreate">
//         <div className="w-full flex flex-col lg:w-10/12 lg:flex-row justify-between">
//           <div className="lg:w-full border-[1px] bg-white">
//             <div className="w-full flex justify-center border-b-[1px] py-4">
//               <div className="flex justify-between w-11/12">
//                 <div>Orders Details</div>
//                 <Link to={"/allorders"}>X</Link>
//               </div>
//             </div>

//             <div className="w-full flex justify-center">
//               <div className="w-11/12 flex flex-wrap lg:flex-nowrap justify-between items-center py-4">
//                 <div className=" w-full lg:w-4/12 mt-3 lg:mt-0">
//                   <label htmlFor="">Date</label>
//                   <input
//                     className="w-full lg:w-11/12 border-[1px] leading-9 px-1"
//                     type="date"
//                     name=""
//                     id=""
//                   />
//                 </div>

//                 <div className="w-full lg:w-4/12 lg:translate-x-2 mt-3 lg:mt-0">
//                   <label htmlFor="">Reference ID</label>
//                   <input
//                     name="cars"
//                     className="w-full lg:w-11/12 border-[1px] py-2 px-1"
//                     id="cars"
//                     type="text"
//                   />
//                 </div>

//                 <div className="w-full lg:w-4/12 lg:translate-x-2 mt-3 lg:mt-0">
//                   <label htmlFor="">Customer Name</label>
//                   <input
//                     name="cars"
//                     className="w-full lg:w-11/12 border-[1px] py-2 px-1"
//                     id="cars"
//                     type="text"
//                   />
//                 </div>

//                 <div className="w-full lg:w-4/12 lg:translate-x-5 mt-3 lg:mt-0">
//                   <label htmlFor="">Tax %</label>
//                   <input
//                     className="w-full lg:w-11/12 border-[1px] leading-9 px-1"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="w-full flex justify-center mb-5">
//               <div className=" w-full lg:w-11/12 mt-3 lg:mt-0">
//                 <label htmlFor="">Note</label>
//                 <textarea
//                   name=""
//                   id=""
//                   placeholder=""
//                   className=" w-full border-[1px] pl-2"
//                 ></textarea>
//               </div>
//             </div>

//             <div className="w-full flex justify-center">
//               <div className="w-11/12 h-[400px] overflow-auto">
//                 <table className="w-full bg-white border border-gray-300">
//                   <thead>
//                     <tr className=" bg-gray-300 text-blue-600 leading-10 w-full">
//                       <th className="px-4 py-2 border-[1px] border-gray-400 w-2/12">
//                         No.
//                       </th>
//                       <th className="px-4 py-2 border-[1px] border-gray-400 w-[130px]">
//                         Photo
//                       </th>
//                       <th className="px-4 py-2 border-[1px] border-gray-400 w-[130px]">
//                         Productname
//                       </th>
//                       <th className="px-4 py-2 border-[1px] border-gray-400 w-[130px]">
//                         Product code
//                       </th>
//                       <th className="px-4 py-2 border-[1px] border-gray-400 w-[130px]">
//                         Current Stock
//                       </th>
//                       <th className="px-4 py-2 border-[1px] border-gray-400 w-[130px]">
//                         Quantity
//                       </th>
//                       <th className="px-4 py-2 border-[1px] border-gray-400 w-[130px]">
//                       Price
//                       </th>
//                       <th className="px-4 py-2 border-[1px] border-gray-400 w-[130px]">
//                         SubTotal
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data.map((row, index) => (
//                       <tr key={index} className="border border-gray-300">
//                         <td className="px-4 py-2 border border-gray-300">
//                           {row.col1}
//                         </td>
//                         <td className="px-4 py-2 border border-gray-300">
//                           {row.col2}
//                         </td>
//                         <td className="px-4 py-2 border border-gray-300 text-center">
//                           {row.col3}
//                         </td>
//                         <td className="px-4 py-2 border border-gray-300">
//                           {row.col4}
//                         </td>
//                         <td className="px-4 py-2 border border-gray-300">
//                           {row.col5}
//                         </td>
//                         <td className="px-4 py-2 border border-gray-300">
//                           {row.col6}
//                         </td> 
//                         <td className="px-4 py-2 border border-gray-300">
//                           {row.col7}
//                         </td>
//                         <td className="px-4 py-2 border border-gray-300">
//                           {row.col8}
//                         </td>
//                       </tr>
//                     ))}
//                     <tr className=" leading-10">
//                       <td
//                         colSpan={7}
//                         className=" border-[1px] text-right pr-4 font-bold"
//                       >
//                         Created By
//                       </td>
//                       <td className=" text-center border-[1px]">Demo</td>
//                     </tr>
//                     <tr className=" leading-10">
//                       <td
//                         colSpan={7}
//                         className=" border-[1px] text-right pr-4 font-bold"
//                       >
//                         Total
//                       </td>
//                       <td className=" text-center border-[1px]">999.00</td>
//                     </tr>
//                     <tr className=" leading-10">
//                       <td
//                         colSpan={7}
//                         className=" border-[1px] text-right pr-4 font-bold"
//                       >
//                         Tax
//                       </td>
//                       <td className=" text-center border-[1px]">0.00</td>
//                     </tr>
//                     <tr className=" leading-10">
//                       <td
//                         colSpan={7}
//                         className=" border-[1px] text-right pr-4 font-bold"
//                       >
//                         Shipping
//                       </td>
//                       <td className=" text-center border-[1px]">0.00</td>
//                     </tr>
//                     <tr className=" leading-10">
//                       <td
//                         colSpan={7}
//                         className=" border-[1px] text-right pr-4 font-bold"
//                       >
//                         Discount
//                       </td>
//                       <td className=" text-center border-[1px]">0.00</td>
//                     </tr>
//                     <tr className=" leading-10">
//                       <td
//                         colSpan={7}
//                         className=" border-[1px] text-right pr-4 font-bold"
//                       >
//                         Status
//                       </td>
//                       <td className=" text-center border-[1px]"><span className=" text-green-700 text-[12px] font-bold">Completed</span> </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div className="w-full flex justify-center mt-8 border-[1px] py-4">
//               <div className="flex justify-end w-11/12">
//                 <button className="bg-green-500 text-white px-4 py-2 rounded-md">
//                   Create Invoice
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Quotationsid;


import Navbar from "./Navbar";
import "../../App.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Quotations from "./Quotations";

// Sample data
const sample = [
  {
    Photo:
      "https://cdn.pixabay.com/photo/2024/02/05/17/10/coffee-8554940_640.jpg",
    ProductName:
      "Oktra 100” FLAGSHIP 4K UHD X1000 SERIES (X650) 4k, amazon prime, Android tv, FHD, LED, led tv, netflix, playstore, SMART, smart tv, UHD, youtube",
    ProductCode: "PC01",
    currentstock: 1,
    Quantity: 3,
    Price: 899999,
    SubTotal: 899999,
  },
];

function createData(
  No,
  Photo,
  ProductName,
  ProductCode,
  currentstock,
  Quantity,
  Price,
  SubTotal
) {
  return {
    No,
    Photo,
    ProductName,
    ProductCode,
    currentstock,
    Quantity,
    Price,
    SubTotal,
  };
}

const columns = [
  {
    width: 50,
    label: "No",
    dataKey: "No",
  },
  {
    width: 50,
    label: "Photo",
    dataKey: "Photo",
  },
  {
    width: 300,
    label: "Product Name",
    dataKey: "ProductName",
  },
  {
    width: 100,
    label: "Product Code",
    dataKey: "ProductCode",
  },
  {
    width: 80,
    label: "Current stock",
    dataKey: "currentstock",
  },
  {
    width: 80,
    label: "Quantity",
    dataKey: "Quantity",
  },
  {
    width: 100,
    label: "Price",
    dataKey: "Price",
  },
  {
    width: 100,
    label: "SubTotal",
    dataKey: "SubTotal",
  },
];

const rows = sample.map((item, index) =>
  createData(
    index + 1,
    item.Photo,
    item.ProductName,
    item.ProductCode,
    item.currentstock,
    item.Quantity,
    item.Price,
    item.SubTotal
  )
);

const summaryData = [
  { label: "Payed amount", value: "799,999.00" },
  { label: "Due", value: "316,000.00" },
  { label: "VAT", value: "216,000.00" },
  { label: "Total", value: "1,115,999.00" },
  { label: "Status", value: "Pending", status: true },
];

function subtotal(items) {
  return items.map(({ SubTotal }) => SubTotal).reduce((sum, i) => sum + i, 0);
}

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function Quotationsid() {
  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = 0.07 * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;
  const data = [
    // Add your data here
    {
      col1: 1,
      col2: "https://cdn.pixabay.com/photo/2024/02/05/17/10/coffee-8554940_640.jpg",
      col3: "Oktra 100” FLAGSHIP 4K UHD X1000 SERIES (X650) 4k, amazon prime, Android tv, FHD, LED, led tv, netflix, playstore, SMART, smart tv, UHD, youtube",
      col4: "pco1",
      col5: "11",
      col6: "1",
      col7: "0.00",
      col8: "0.00",
    },

    // More rows as needed
  ];

  return (
    <>
      <Navbar />

      <div className="bg-[#F6F8FB] mt-16 w-full flex justify-center py-3 orderscreate lg:mt-32">
        <div className="w-full flex flex-col lg:w-10/12 lg:flex-row justify-between">
          <div className="lg:w-full border-[1px] bg-white">
            <div className="w-full flex justify-center border-b-[1px] py-4">
              <div className="flex justify-between w-11/12">
                <div>Quotations Details</div>
                <Link to={"/quotations"}>X</Link>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-11/12 flex flex-wrap lg:flex-nowrap justify-between items-center py-4">
                <div className=" w-full lg:w-4/12 mt-3 lg:mt-0">
                  <label htmlFor="">Date</label>
                  <input
                    className="w-full lg:w-11/12 border-[1px] leading-9 px-1"
                    type="date"
                    name=""
                    id=""
                  />
                </div>

                <div className="w-full lg:w-4/12 lg:translate-x-2 mt-3 lg:mt-0">
                  <label htmlFor="">Reference ID</label>
                  <input
                    name="cars"
                    className="w-full lg:w-11/12 border-[1px] py-2 px-1"
                    id="cars"
                    type="text"
                  />
                </div>

                <div className="w-full lg:w-4/12 lg:translate-x-2 mt-3 lg:mt-0">
                  <label htmlFor="">Customer Name</label>
                  <input
                    name="cars"
                    className="w-full lg:w-11/12 border-[1px] py-2 px-1"
                    id="cars"
                    type="text"
                  />
                </div>

                <div className="w-full lg:w-4/12 lg:translate-x-5 mt-3 lg:mt-0">
                  <label htmlFor="">Tax %</label>
                  <input
                    className="w-full lg:w-11/12 border-[1px] leading-9 px-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center mb-5">
              <div className=" w-11/12 lg:w-11/12 mt-3 lg:mt-0">
                <label htmlFor="">Note</label>
                <textarea
                  name=""
                  id=""
                  placeholder=""
                  className=" w-full border-[1px] pl-2"
                ></textarea>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-11/12 h-[400px] overflow-auto">
                <table className="w-full bg-white border border-gray-300">
                  <thead>
                    <tr className=" text-[12px] bg-gray-300 text-blue-600 leading-10 w-full">
                      <th className="px-4 py-2 border-[1px] border-gray-400 w-[50px]">
                        No.
                      </th>
                      <th className="px-4 py-2 border-[1px] border-gray-400 w-[50px]">
                        Photo
                      </th>
                      <th className="px-4 py-2 border-[1px] border-gray-400 w-[300px]">
                        Productname
                      </th>
                      <th className="px-4 py-2 border-[1px] border-gray-400 w-[100px]">
                        Product code
                      </th>
                      <th className="px-4 py-2 border-[1px] border-gray-400 w-[100px]">
                        Current Stock
                      </th>
                      <th className="px-4 py-2 border-[1px] border-gray-400 w-[80px]">
                        Quantity
                      </th>
                      <th className="px-4 py-2 border-[1px] border-gray-400 w-[100px]">
                        Price
                      </th>
                      <th className="px-4 py-2 border-[1px] border-gray-400 w-[100px]">
                        SubTotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index} className="border border-gray-300">
                        <td className="text-center px-4 py-2 border border-gray-300 w-[50px]">
                          {row.col1}
                        </td>
                        <td className=" border-gray-300 w-[50px] h-[100px]">
                          <img src={row.col2} alt="Product" className="w-11/12 h-full object-cover ml-auto mr-auto"/>
                        </td>
                        <td className="px-4 py-2 border border-gray-300 text-center w-[300px]">
                          {row.col3}
                        </td>
                        <td className=" text-center px-4 py-2 border border-gray-300 w-[100px]">
                          {row.col4}
                        </td>
                        <td className=" text-center px-4 py-2 border border-gray-300 w-[80px]">
                          {row.col5}
                        </td>
                        <td className=" text-center px-4 py-2 border border-gray-300 w-[80px]">
                          {row.col6}
                        </td> 
                        <td className= " text-center px-4 py-2 border border-gray-300 w-[100px]">
                          {row.col7}
                        </td>
                        <td className=" text-center px-4 py-2 border border-gray-300 w-[100px]">
                          {row.col8}
                        </td>
                      </tr>
                    ))}
                    <tr className=" leading-10">
                      <td
                        colSpan={7}
                        className=" border-[1px] text-right pr-4 font-bold"
                      >
                        Created By
                      </td>
                      <td className=" text-center border-[1px]">Demo</td>
                    </tr>
                    <tr className=" leading-10">
                      <td
                        colSpan={7}
                        className=" border-[1px] text-right pr-4 font-bold"
                      >
                        Total
                      </td>
                      <td className=" text-center border-[1px]">999.00</td>
                    </tr>
                    <tr className=" leading-10">
                      <td
                        colSpan={7}
                        className=" border-[1px] text-right pr-4 font-bold"
                      >
                        Tax
                      </td>
                      <td className=" text-center border-[1px]">0.00</td>
                    </tr>
                    <tr className=" leading-10">
                      <td
                        colSpan={7}
                        className=" border-[1px] text-right pr-4 font-bold"
                      >
                        Shipping
                      </td>
                      <td className=" text-center border-[1px]">0.00</td>
                    </tr>
                    <tr className=" leading-10">
                      <td
                        colSpan={7}
                        className=" border-[1px] text-right pr-4 font-bold"
                      >
                        Discount
                      </td>
                      <td className=" text-center border-[1px]">0.00</td>
                    </tr>
                    <tr className=" leading-10">
                      <td
                        colSpan={7}
                        className=" border-[1px] text-right pr-4 font-bold"
                      >
                        Status
                      </td>
                      <td className=" text-center border-[1px]"><span className=" text-green-700 text-[12px] font-bold">Completed</span> </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="w-full flex justify-center mt-8 border-[1px] py-4">
              <div className="flex justify-end w-11/12">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                  Create Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quotationsid;
