import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { PiGreaterThanBold } from "react-icons/pi";

const Quotationscreate = () => {
  const data = [
    // Add your data here
    {
      col1: "Oktra 100” FLAGSHIP 4K UHD X1000 SERIES (X650) 4k, amazon prime, Android tv, FHD, LED, led tv, netflix, playstore, SMART, smart tv, UHD, youtube",
      col2: "€899,999.00	",
      col3: "1",
      col4: "€899,999.00",
    },

    // More rows as needed
  ];
  return (
    <>
      <div>
        <Navbar />
        <div className=" bg-[#f6f8fb] mt-16 py-3 lg:mt-32">
          <div className=" w-full flex justify-center ">
            <div className=" w-10/12">New Quotation</div>
          </div>

          <div className=" w-full flex justify-center mt-3">
            <div className=" w-10/12">
              <Link to={"/quotations"} className=" text-blue-500">
                Quotations
              </Link>
              <span>
                <PiGreaterThanBold className=" inline ml-3 text-[12px]" />
              </span>
              <Link to={"/quotations/create"} className=" ml-3 text-blue-500">
                Create
              </Link>
            </div>
          </div>

          <div className=" w-full flex justify-center mt-3 ">
            <div className=" w-10/12 border-[1px] bg-white rounded-md">
              <div className=" border-b-[1px] py-4 px-4">Products</div>
              <div className=" border-b-[1px] py-4 px-4 ">
                <input
                  type="text"
                  placeholder=" type product name or code "
                  className=" border-[2px] w-full p-3 rounded-md"
                />
              </div>
            </div>
          </div>

          <div className=" w-full flex justify-center mt-3 ">
            <div className=" w-10/12 border-[1px] bg-white rounded-md">
              <div className=" border-t-[1px] py-4 px-4 flex flex-col justify-between w-full lg:flex-row">
                <div className="w-full lg:w-3/12 mt-2 lg:mt-0">
                  <div>
                  <label htmlFor="">Date</label>
                  </div>
                  <div>
                  <input
                    type="date"
                    className=" w-full border-[1px] p-[1.6px] rounded-md lg:w-11/12"
                  />
                  </div>
                </div>
                <div className="w-full lg:w-3/12 mt-2 lg:mt-0">
                <div>
                  <label for="cars">Customer</label>
                  </div>
                  <div className=" w-full">

                  <select
                    name="cars"
                    id="cars"
                    className=" w-full border-[1px] p-1 rounded-md lg:w-11/12"
                  >
                    <option value="volvo">Select a Customer</option>
                    <option value="saab">Riyan Sadiq</option>
                  </select>
                  </div>
                </div>
                <div className="w-full lg:w-3/12 mt-2 lg:mt-0">
                <div>
                  <label for="cars">Status</label>
                  </div>
                  <div>
                  <select
                    name="cars"
                    id="cars"
                    className=" w-full border-[1px] p-1 rounded-md lg:w-11/12"
                  >
                    <option value="volvo">Pending</option>
                    <option value="saab">Sent</option>
                    <option value="saab">Cancelled</option>
                  </select>
                  </div>
                </div>
                <div className="w-full lg:w-3/12 mt-2 lg:mt-0">
                <div>
                  <label htmlFor="">Reference</label>
                  </div>
                  <div>
                  <input
                    type="text"
                    className=" w-full border-[1px] p-1 rounded-md"
                  />
                  </div>
                </div>
              </div>
              {/* ========table */}

              <div className=" w-full flex justify-center">
                <div className=" w-full h-[300px] overflow-auto mt-5 px-4">
                  <table className="w-full bg-white border border-gray-300">
                    <thead>
                      <tr className=" bg-gray-300 text-blue-600 leading-10">
                        <th className="px-4 py-2 border-[1px] border-gray-400">
                          Product
                        </th>
                        <th className="px-4 py-2 border-[1px] border-gray-400">
                          Net Unit Price
                        </th>
                        <th className="px-4 py-2 border-[1px] border-gray-400">
                          Stock
                        </th>
                        <th className="px-4 py-2 border-[1px] border-gray-400">
                          Quantity
                        </th>
                        <th className="px-4 py-2 border-[1px] border-gray-400">
                          Discount
                        </th>
                        <th className="px-4 py-2 border-[1px] border-gray-400">
                          Tax
                        </th>
                        <th className="px-4 py-2 border-[1px] border-gray-400">
                          SubTotal
                        </th>
                        <th className="px-4 py-2 border-[1px] border-gray-400">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {data.map((row, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="px-4 py-2 border border-gray-300">{row.col1}</td>
              <td className="px-4 py-2 border border-gray-300">{row.col2}</td>
              <td className="px-4 py-2 border border-gray-300 text-center">{row.col3}</td>
              <td className="px-4 py-2 border border-gray-300">{row.col4}</td>
          
            </tr>
          ))} */}
                      <tr className=" leading-10">
                        <td
                          colSpan={8}
                          className=" border-[1px] text-center pr-4 font-bold"
                        >
                          Please Search and Select products
                        </td>
                      </tr>
                      <tr className=" leading-10">
                        <td
                          colSpan={7}
                          className=" border-[1px] text-right pr-4 font-bold"
                        >
                          Tax(0%)
                        </td>
                        <td className=" text-center border-[1px]">
                          (+) 0.00 $
                        </td>
                      </tr>
                      <tr className=" leading-10">
                        <td
                          colSpan={7}
                          className=" border-[1px] text-right pr-4 font-bold"
                        >
                          Discount(0%)
                        </td>
                        <td className=" text-center border-[1px]">
                          (-) 0.00 $
                        </td>
                      </tr>
                      <tr className=" leading-10">
                        <td
                          colSpan={7}
                          className=" border-[1px] text-right pr-4 font-bold"
                        >
                          Shipping
                        </td>
                        <td className=" text-center border-[1px]">
                          (+) 0.00 $
                        </td>
                      </tr>
                      <tr className=" leading-10">
                        <td
                          colSpan={7}
                          className=" border-[1px] text-right pr-4 font-bold"
                        >
                          Grand Total
                        </td>
                        <td className=" text-center border-[1px]">
                          (=) 0.00 $
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* table */}
              <div className=" flex justify-center  px-4">
                <div className="  w-full flex flex-wrap justify-between my-4  lg:flex-nowrap">
                  <div className="w-full lg:w-3/12">
                    <div>Tax(%)</div>
                    <input
                      type="text "
                      className=" border-[1px] rounded-md w-full p-1"
                    />
                  </div>
                  <div className="w-full lg:w-3/12 ">
                    <div>Discount (%)</div>
                    <input
                      type="text"
                      className=" border-[1px] rounded-md w-full p-1"
                    />
                  </div>
                  <div className="w-full lg:w-3/12 ">
                    <div>Shipping</div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className=" border-[1px] rounded-md w-full p-1"
                    />
                  </div>
                </div>
              </div>


{/* textarea */}
              <div className=" flex justify-center  px-4">
              <div className="  w-full flex justify-between mb-4 "> 

<div className=" w-full ">
    <div>Notes</div>
    <textarea  className=" border-[1px] rounded-md w-full p-1" />
</div>
              </div>

              </div> 
{/* textarea */}

<div className=" flex justify-center  px-4">
              <div className="  w-full flex justify-between mb-4 "> 

<div className=" w-full ">
    <button className=" bg-green-500 text-white p-2 hover:bg-green-700">Create Quotation</button></div>
              </div>

              </div> 

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotationscreate;
