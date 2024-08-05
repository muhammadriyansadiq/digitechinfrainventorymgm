import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Suppliers from "./Suppliers";
import { FaGreaterThan } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

const Productsidedit = () => {
  return (
    <>
      <Navbar />

      <form className=" pt-5 mt-16   lg:mt-[130px] bg-[#f6f8fb] ">

      <div className=" w-full flex justify-center">
<div className=" w-11/12 lg:w-10/12  my-0">
<div className=" flex justify-between items-center w-11/12 lg:w-2/12 text-blue-600 text-[19px]">
Edit Products
</div>
</div>
        </div>

        <div className=" w-full flex justify-center md:justify-start md:translate-x-8 lg:translate-x-0 lg:justify-center ">
<div className=" w-11/12 md:w-5/12 lg:w-10/12  my-4">
<div className="text-[19px] flex justify-between items-center w-11/12 lg:w-2/12 text-blue-600">
<Link to={'/products'}>Products</Link>
<FaGreaterThan />
<Link to={'/products/id'}>Id</Link>
<FaGreaterThan />
<Link to={'/products/id/edit'}>Edit</Link>
</div>
</div>
        </div>
        <div className="  w-full flex justify-center pb-5">
          <div className=" w-full flex justify-between flex-col lg:flex-row  lg:w-10/12">
            <div className="ml-auto mr-auto lg:ml-0 lg:mr-0  w-11/12  h-[55vh] flex flex-col justify-between  border-[1px]  p-4 bg-white rounded-md lg:w-[30%]">
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

            <div className=" ml-auto mr-auto lg:ml-0 lg:mr-0 mt-2 lg:mt-0 w-11/12  border-[1px] rounded-md  bg-white py-4 lg:w-[65%]">
              <div className=" flex justify-between items-center px-4  py-4 border-b-[1px]">
                <div className=" font-semibold text-[22px]">
Products Details                </div>
                <Link to={"/products"}>
                  <div className=" text-[22px]">X</div>
                </Link>
              </div>

              <div>
                <div  className=" ">
                  <div className=" name my-5 px-4">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      className=" border-[1px] py-2 w-full rounded-md pl-2 mt-2"
                      placeholder="Product name"
                    />
                  </div>

                  <div className=" px-4 name my-7 flex justify-between w-full ">
                    <div className=" w-6/12 ">
                      <label htmlFor="">Product Category</label>
                      <select
                        className=" w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">Select a type</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      {/* <input type="text" className=' border-[1px] py-2 w-11/12  rounded-md pl-2 mt-2' placeholder='Product name' /> */}
                    </div>
                    <div className=" w-6/12 ">
                      <label htmlFor="">Unit </label>
                      <select
                        className=" w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2"
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
                      <label htmlFor="">Buyeing Price</label>
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
                      <label htmlFor="">Selling Price</label>
                      <input
                        type="number"
                        placeholder="0"
                        className=" w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2"
                        name="cars"
                        id="cars"
                      />
                    </div>
                  </div>

                 

                  <div className="px-4 name my-7 flex justify-between w-full ">
                    <div className=" w-6/12 ">
                      <label htmlFor="">Quantity </label>
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
                      <label htmlFor="">Quantity Alert</label>
                      <input
                        type="number"
                        placeholder="0"
                        className=" w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2"
                        name="cars"
                        id="cars"
                      />
                    </div>
                  </div>




                  <div className="px-4 name my-7 flex justify-between w-full ">
                    <div className=" w-6/12 ">
                      <label htmlFor="">Tax</label><br />
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
                      <label htmlFor="">Tax Type </label>
                      <select
                        className=" w-11/12 border-[1px] py-2 rounded-md pl-2 mt-2"
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

                  <div className=" px-4">
                    <label htmlFor="">Address</label>
                    <textarea
                    rows={3}
                      name=""
                      id=""
                      className=" w-full border-[1px] rounded-md"
                    ></textarea>
                  </div>

                  <div className=" border-t-[1px] flex justify-center mt-3">
                    <div className=" w-full px-4 ">
                      <div className="  flex justify-center lg:justify-end mt-5">
                        
                      <div className=' w-11/12 flex justify-around lg:w-4/12'>
    <Link to={'/products'} className=' rounded-md bg-blue-500 px-4 py-2 flex items-center justify-between text-white border-[1px] border-blue-500 hover:bg-white hover:text-blue-500'><span> Update</span></Link>
    <Link to={'/products/id/edit'} className='rounded-md bg-red-500  px-4 py-2 flex justify-between items-center text-white border-[1px] border-red-500 hover:bg-white hover:text-red-500 '><span> Cancel</span></Link>
    </div>
                         
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Productsidedit;