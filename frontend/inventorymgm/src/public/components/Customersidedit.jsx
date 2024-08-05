import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Suppliers from "./Suppliers";
import { FaGreaterThan } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

const Customersidedit = () => {
  return (
    <>
      <Navbar />
      <form className=" pt-5 mt-[-9px] bg-[#f6f8fb] lg:mt-32">

      <div className=' w-full flex justify-center my-4'>
                <div className=' w-10/12 font-semibold text-[21px]'>
                    Riyan Sadiq
                </div>
            </div>

            <div className=' w-full flex justify-center my-4'>
                <div className=' w-10/12 font-semibold text-[21px]'>
                <div className=' flex items-center justify-between w-[230px]'>
                <Link to={'/customers'} className=' text-blue-600'>Customer</Link>
                <p>< FaGreaterThan className=' text-blue-600 text-[14px]'/></p>
                <Link to={"/customers/id"} className=' text-blue-600'>id</Link>
                <p>< FaGreaterThan className=' text-blue-600 text-[14px]'/></p>
                <Link to={"/customers/id/edit"} className=' text-blue-600'>edit</Link>

                </div>
                </div>
            </div>
        <div className="  w-full flex justify-center ">
          <div className=" w-full flex justify-between flex-col lg:flex-row  lg:w-10/12">
            <div className="ml-auto mr-auto lg:ml-0 lg:mr-0  w-11/12  h-[55vh] flex flex-col justify-between  border-[1px]  p-4 bg-white rounded-md lg:w-4/12">
              <div className=" text-center">Product Image</div>
              <div className=" ml-auto mr-auto h-[220px] w-[220px] flex justify-center items-center   border-[3px] rounded-full  p-2 ">
                <img
                  src="https://ims.digitechinfra.com/public/static/logo.png"
                  className=" "
                  alt=""
                />
              </div>
              <div>
                <input type="file" className=" border-[1px] w-full leading-8" />
              </div>
            </div>

            <div className=" ml-auto mr-auto lg:ml-0 lg:mr-0 mt-2 lg:mt-0 w-11/12  border-[1px] rounded-md  bg-white py-4 lg:w-7/12">
              <div className=" flex justify-between items-center px-4  py-4 border-b-[1px]">
                <div className=" font-semibold text-[22px]">
Edit Customers                </div>
                <Link to={"/pages/customers"}>
                  <div className=" text-[22px]">X</div>
                </Link>
              </div>

              <div>
                <form action="" className=" ">
                  <div className=" name my-5 px-4">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      className=" border-[1px] py-2 w-full rounded-md pl-2 mt-2"
                      placeholder="Product name"
                    />
                  </div>

                  <div className=" name my-5 px-4">
                    <label htmlFor="">Email Address</label>
                    <input
                      type="email"
                      className=" border-[1px] py-2 w-full rounded-md pl-2 mt-2"
                      placeholder="Product name"
                    />
                  </div>


                  <div className=" px-4 name my-7 flex justify-between w-full ">
                    <div className=" w-6/12 ">
                      <label htmlFor="">Phone Number</label>
                      <input 
                        className=" w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2"
                        name="cars"
                        id="cars"
                      />
                        
                       </div>
                    <div className=" w-6/12 ">
                      <label htmlFor="" className=" ml-5"> Bank Name:</label>
                      <select
                        className=" ml-5 w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">Bank Name :</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      {/* <input type="text" className=' border-[1px] py-2 w-11/12  rounded-md pl-2 mt-2' placeholder='Product name' /> */}
                    </div>
                  </div>

                  <div className="px-4 name my-7 flex justify-between w-full ">
                    <div className=" w-6/12 ">
                      <label htmlFor="" className="">Account Holder</label>
                      <input
                        type="number"
                        placeholder="0"
                        className=" w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2"
                        name="cars"
                        id="cars"
                      />

                      {/* <input type="text"  placeholder='Product name' /> */}
                    </div>
                    <div className=" w-6/12 ">
                      <label htmlFor="" className=" ml-5">Account Number</label>
                      <input
                        type="number"
                        placeholder="0"
                        className="ml-5 w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2"
                        name="cars"
                        id="cars"
                      />
                    </div>
                  </div>

                  <div className=" px-4">
                    <label htmlFor="">Address</label>
                    <textarea
                      name=""
                      id=""
                      rows={3}
                      className=" w-full border-[1px] rounded-md"
                    ></textarea>
                  </div>

                  <div className=" border-t-[1px] flex justify-center mt-3">
                    <div className=" w-full flex justify-end px-4 ">
                      <div className=" w-full justify-around  flex   lg:justify-between mt-5 lg:w-4/12">
                        
                          <button className=" bg-green-500 border-green-500 border-[1px] text-white font-semibold py-3 px-5 rounded-md hover:text-green-500 hover:bg-white">
                            Update
                          </button>

                          <button className=" bg-green-500 border-green-500 border-[1px] text-white font-semibold py-3 px-5 rounded-md hover:text-green-500 hover:bg-white">
                            Cancel
                          </button>
                         
                       
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Customersidedit;
