import React from 'react'
import Navbar from './Navbar'
import { CiFaceFrown } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Orderscompleted = () => {
  return (
    <>
    <Navbar />
    <div className=' mt-[140px] bg-[#f6f8fb] pb-7 h-[100vh]'>
<div className=' flex justify-center pt-12  mt-[-12px]'><CiFaceFrown className=' text-[48px] text-gray-400'/></div>
<div className=' text-center mt-10 text-[26px] font-bold'>No Orders found</div>
<div className=' text-center mt-4 text-[18px]'>Try adjusting your search or filter to find what you're looking for.

</div>
<Link to={'/createorder'}>
<div className=' flex justify-center mt-16'><button className=' bg-blue-600 text-white p-2 border-blue-600 border-[1px] hover:bg-white hover:text-blue-600'><span className=' mr-2'>+</span>add Your First Purchase</button></div>
</Link>
    </div>
    </>
  )
}

export default Orderscompleted;