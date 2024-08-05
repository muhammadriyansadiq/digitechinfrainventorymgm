import React from 'react'
import { useState ,useEffect} from "react";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { GoPackageDependents } from "react-icons/go";
import { GoPackageDependencies } from "react-icons/go";
import { CiFileOn } from "react-icons/ci";
import { BsFiles } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink,useLocation } from 'react-router-dom';
import { Button, Dropdown, Space } from 'antd';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

import "../../App.css";

const items = [
  {
    key: '1',
    label: (
      <Link to={'/allorders'}  rel="noopener noreferrer" >
        All
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to={'/orders/completed'} >
        Completed
        </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link to={'/orders/pending'}>
      Pending
      </Link>
      
    ),
  },
  {
    key: '4',
    label: (
      <Link to={'/orders/due'}>
        Due
        </Link>
    ),
  },
];

const Pagesitems = [
  {
    key: '1',
    label: (
      <Link to={'/pages/suppliers'}  rel="noopener noreferrer" >
        Suppliers
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to={'/pages/customers'} >
        Customers
      </Link>
    ),
  }
];


const Purchase = [
  {
    key: '1',
    label: (
      <Link to={'/purchase'}  rel="noopener noreferrer" >
        All
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to={'/purchase/approve'} >
        Approval
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link to={'/purchase/report/details'} >
        Dailypurchasereport
      </Link>
    ),
  }

];

const Settingitems = [
  {
    key: '1',
    label: (
      <Link to={'/setting/categories'}  rel="noopener noreferrer" >
        Categories
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to={'/setting/units'} >
        Units
      </Link>
    ),
  }
];



const Navbar = () => {

  const [hamberg,sethamberg] = useState(true)
  const [activeMenu, setActiveMenu] = useState("");
  const location = useLocation();

  function locationtest(){

    if(location.pathname.includes("order")){
      setActiveMenu("order")
    }
    else if(location.pathname.includes("home")){
      setActiveMenu("home")
    }
    else if(location.pathname.includes("purchase")){
      setActiveMenu("purchase")
    }
    else if(location.pathname.includes("page")){
      setActiveMenu("page")
    }
    else if(location.pathname.includes("setting")){
      setActiveMenu("setting")
    }
    else if(location.pathname.includes("product")){
      setActiveMenu("product")
    }
    else if(location.pathname.includes("quotation")){
      setActiveMenu("quotation")
    }
   else{
    setActiveMenu("")
   }
    console.log(location.pathname);
  }



  useEffect (()=>{
    locationtest()
  },[location.pathname])

  return (
    
    <>
      <header className=' shadow-lg  fixed top-0 bg-white w-full overflow-x-hidden pb-2 z-50'>
        <navbar className="   h-14 flex items-center justify-center border-t-[1px] w-full">
          <nav className="  w-11/12    flex justify-between lg:justify-between lg:w-10/12">
          <div className=' flex items-center lg:hidden'>
            {hamberg?   
            <GiHamburgerMenu onClick={(e)=>sethamberg(false)}  className=' text-[22px] cursor-pointer'/>
            :<IoMdCloseCircle onClick={(e)=>sethamberg(true)}  className=' text-[28px]'/>
            
          }
            </div>
            <div className="  lg:w-2/12 ">
              <img
                src="https://ims.digitechinfra.com/public/static/logo.png"
                className=" h-8"
                alt=""
              />
            </div>
            <div className="  lg:w-2/12  flex justify-between ">
              <div className=' mr-2 lg:mr-0'>monn</div>
              <div className=' mr-2 lg:mr-0'>logo</div>
              <div >demo</div>
            </div>
            
          </nav>
        </navbar>
        
{/* =======on large width */}
        <div className="  hidden h-16 w-full justify-center px-2 lg:flex items-center border-t-[1px] ">
         
         <div className="w-full   flex flex-wrap justify-between lg:w-10/12 lg:flex-nowrap">
           
           <Link to={'/'} className={`home flex items-center border-b-[1px] border-white  my-2 lg:ml-[-8px] lg:my-0  ${activeMenu === '' ? 'active' : ''} `}>
             <IoHomeOutline className=" text-gray-500 mr-2 " />
             dashboard
           </Link>
 
           <Link to={'/products'} className={`product flex items-center my-2 lg:my-0 border-b-[1px] border-white ${activeMenu === 'product' ? 'active' : ''}`} >
               <div className= {`flex items-center   `}>
             <AiOutlineProduct className=" text-gray-500 mr-2" />
             Products
             </div>
           </Link>
          
          <div  className={`flex items-center my-2 lg:my-0 border-b-[1px] border-white  ${activeMenu === 'order' ? 'active' : ''}`  }>
           <div className=" flex items-center ">
             <GoPackageDependents className=" text-gray-500 mr-2" />
             <Dropdown
       menu={{
         items,
       }}
       placement="bottom"
     >
       <div className=' flex items-center cursor-pointer'>Orders <span><MdOutlineKeyboardArrowDown /></span></div>
     </Dropdown>
           </div>
           </div>



        
<div  className={`flex items-center my-2 lg:my-0 border-b-[1px] border-white  ${activeMenu === 'purchase' ? 'active' : ''}`}>
           <div className=" flex items-center ">
             <GoPackageDependencies className=" text-gray-500 mr-2" />
             <Dropdown
       menu={{
        items:Purchase,
       }}
       placement="bottom"
     >
       <div className=' flex items-center cursor-pointer'>Purchase <span><MdOutlineKeyboardArrowDown /></span></div>
     </Dropdown>
           </div>
           </div>



           <NavLink to={'/quotations'} className={`quotation flex items-center my-2 lg:my-0 border-b-[1px] border-white  ${activeMenu === 'quotation' ? 'active' : ''}`}>
             <CiFileOn className=" text-gray-500 mr-2" />
             Quotations
           </NavLink>
           


<div  className={`flex border-b-[1px] border-white items-center my-2 lg:my-0 ${activeMenu === 'page' ? 'active' : ''}`}>
           <div className=" flex items-center ">
             <BsFiles className=" text-gray-500 mr-2" />
             <Dropdown
       menu={{
        items:Pagesitems,
       }}
       placement="bottom"
     >
       <div className=' flex items-center cursor-pointer'>Pages <span><MdOutlineKeyboardArrowDown /></span></div>
     </Dropdown>
           </div>
           </div>


         
<div  className={`flex border-b-[1px] border-white items-center my-2 lg:my-0 ${activeMenu === 'setting' ? 'active' : ''}`}>
           <div className=" flex items-center ">
             <IoSettingsOutline className=" text-gray-500 mr-2" />
             <Dropdown
       menu={{
        items:Settingitems,
       }}
       placement="bottom"
     >
       <div className=' flex items-center cursor-pointer'>Setting <span><MdOutlineKeyboardArrowDown /></span></div>
     </Dropdown>
           </div>
           </div>


           <div className=" flex items-center border-[1px] relative p-1 rounded-md my-2 lg:my-0 lg:mr-[-8px]">
             <CiSearch className=" text-gray-500 mr-2 absolute " />
             <input type="text" placeholder="Search..." className=" pl-7 focus:border-none" />
           </div>


         </div>


       </div>
{/* =======on large width */}



{/* hamberg */}


        {!hamberg?
        <>
        <div className=" ml-auto mr-auto  w-full justify-center my-2 px-2 flex items-center border-b-[1px] lg:hidden">
         
          <div className="w-full flex flex-wrap justify-between lg:w-10/12 lg:flex-nowrap">
            
            {/* <NavLink to={'/'} className=" flex items-center  my-2 lg:my-0">
              <IoHomeOutline className=" text-gray-500 mr-2" />
              dashboard
            </NavLink>

            
            <NavLink to={'/products'} className=' flex items-center my-2 lg:my-0' >
                <div className=" flex items-center">
              <AiOutlineProduct className=" text-gray-500 mr-2" />
              Products
              </div>
            
            </NavLink>
           
           <NavLink to={'/createorder'} className=" flex items-center my-2 lg:my-0">
            <div className=" flex items-center ">
              <GoPackageDependents className=" text-gray-500 mr-2" />
              <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <div className=' flex items-center cursor-pointer'>Orders <span><MdOutlineKeyboardArrowDown /></span></div>
      </Dropdown>
            </div>
            </NavLink>


            <NavLink to={'/purchase'} className=" flex items-center my-2 lg:my-0">
              <GoPackageDependencies className=" text-gray-500 mr-2" />
              <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <div className=' flex items-center cursor-pointer'>Purchase <span><MdOutlineKeyboardArrowDown /></span></div>
      </Dropdown>
            </NavLink>


            <div className=" flex items-center my-2 lg:my-0">
              <CiFileOn className=" text-gray-500 mr-2" />
              Quotations
            </div>
            
            <div className=" flex items-center my-2 lg:my-0">
              <BsFiles className=" text-gray-500 mr-2" />
              <select name="cars" id="cars" className=" cursor-pointer">
    <option value="volvo">Pages</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
            </div>



            <div className=" flex items-center my-2 lg:my-0">
              <CiSettings className=" text-gray-500 mr-2" />
              <select name="cars" id="cars" className=" cursor-pointer">
    <option value="volvo">Settings</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
            </div>

            <div className=" flex items-center border-[1px] relative p-1 rounded-md my-2 lg:my-0">
              <CiSearch className=" text-gray-500 mr-2 absolute " />
              <input type="text" placeholder="Search..." className=" pl-7 focus:border-none" />
            </div> */}



<Link to={'/'} className={`home flex items-center border-b-[1px] border-white  my-2 lg:ml-[-8px] lg:my-0  ${activeMenu === '' ? 'active' : ''} `}>
             <IoHomeOutline className=" text-gray-500 mr-2 " />
             dashboard
           </Link>
 
           <Link to={'/products'} className={`product flex items-center my-2 lg:my-0 border-b-[1px] border-white ${activeMenu === 'product' ? 'active' : ''}`} >
               <div className= {`flex items-center   `}>
             <AiOutlineProduct className=" text-gray-500 mr-2" />
             Products
             </div>
           </Link>
          
          <div  className={`flex items-center my-2 lg:my-0 border-b-[1px] border-white  ${activeMenu === 'order' ? 'active' : ''}`  }>
           <div className=" flex items-center ">
             <GoPackageDependents className=" text-gray-500 mr-2" />
             <Dropdown
       menu={{
         items,
       }}
       placement="bottom"
     >
       <div className=' flex items-center cursor-pointer'>Orders <span><MdOutlineKeyboardArrowDown /></span></div>
     </Dropdown>
           </div>
           </div>



        
<div  className={`flex items-center my-2 lg:my-0 border-b-[1px] border-white  ${activeMenu === 'purchase' ? 'active' : ''}`}>
           <div className=" flex items-center ">
             <GoPackageDependencies className=" text-gray-500 mr-2" />
             <Dropdown
       menu={{
        items:Purchase,
       }}
       placement="bottom"
     >
       <div className=' flex items-center cursor-pointer'>Purchase <span><MdOutlineKeyboardArrowDown /></span></div>
     </Dropdown>
           </div>
           </div>



           <NavLink to={'/quotations'} className={`quotation flex items-center my-2 lg:my-0 border-b-[1px] border-white  ${activeMenu === 'quotation' ? 'active' : ''}`}>
             <CiFileOn className=" text-gray-500 mr-2" />
             Quotations
           </NavLink>
           


<div  className={`flex border-b-[1px] border-white items-center my-2 lg:my-0 ${activeMenu === 'page' ? 'active' : ''}`}>
           <div className=" flex items-center ">
             <BsFiles className=" text-gray-500 mr-2" />
             <Dropdown
       menu={{
        items:Pagesitems,
       }}
       placement="bottom"
     >
       <div className=' flex items-center cursor-pointer'>Pages <span><MdOutlineKeyboardArrowDown /></span></div>
     </Dropdown>
           </div>
           </div>


         
<div  className={`flex border-b-[1px] border-white items-center my-2 lg:my-0 ${activeMenu === 'setting' ? 'active' : ''}`}>
           <div className=" flex items-center ">
             <IoSettingsOutline className=" text-gray-500 mr-2" />
             <Dropdown
       menu={{
        items:Settingitems,
       }}
       placement="bottom"
     >
       <div className=' flex items-center cursor-pointer'>Setting <span><MdOutlineKeyboardArrowDown /></span></div>
     </Dropdown>
           </div>
           </div>


           <div className=" flex items-center border-[1px] relative p-1 rounded-md my-2 lg:my-0 lg:mr-[-8px]">
             <CiSearch className=" text-gray-500 mr-2 absolute " />
             <input type="text" placeholder="Search..." className=" pl-7 focus:border-none" />
           </div>


          </div>


        </div>
        </>:""

}


{/* hamberg */}


      </header>
      </>
  )
}

export default Navbar