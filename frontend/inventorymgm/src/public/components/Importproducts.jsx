// import React, { useState } from 'react'
// import Navbar from './Navbar'
// import { Link } from 'react-router-dom'
// import "../../App.css"
// import * as XLSX from "xlsx"; // Use * as XLSX

// const Importproducts = () => {
//   const [data, setData] = useState([]);

//   function handleFileUpload(e) {
//     const reader = new FileReader();
//     reader.readAsArrayBuffer(e.target.files[0]);
//     reader.onload = (e) => {
//       const data = new Uint8Array(e.target.result);
//       const workbook = XLSX.read(data, { type: "array" });
//       const sheetName = workbook.SheetNames[0];
//       const sheet = workbook.Sheets[sheetName];
//       const parsedData = XLSX.utils.sheet_to_json(sheet);
//       setData(parsedData);
//     };
//   }

//   function oncheck(e){
//     e.preventDefault()
//     if(data.length >0){
//       alert("data has been succesfully added")
//     }
//     else{
//       alert("data has not been added please select a file")
//     }
//   }
//   console.log(data)

//   return (
// <>
// <Navbar />
// <div className='w-full flex justify-center mt-5'>
//         <div className='w-10/12 border-[1px] rounded-md'>
//         <div className=' flex justify-between p-5 border-b-[1px]'>
// <div className=' font-sans font-medium text-gray-700 text-[18px]'>Import Products</div>
// <Link to={'/products'}>
// <div className=' cursor-pointer'>
// X
// </div>
// </Link>
//         </div>

//         <div className=' flex justify-between p-5 border-b-[1px]'>
//             <input type="file"  name="" id="" className='fileinput border-[1px] w-full leading-9 cursor-pointer'
           
//             onChange={handleFileUpload}
//             />
//         </div>


//         <div className=' flex justify-end p-5'>
//         <button onClick={oncheck} className=' bg-blue-700 p-3 text-white rounded-md'>Import</button>
//         </div>
       
//         </div>
//       </div>
//     </>    

//   )
// }

// export default Importproducts


import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import "../../App.css";
import * as XLSX from "xlsx"; // Use * as XLSX

const Importproducts = () => {
  const [data, setData] = useState([]);
  const fileInputRef = useRef(null); // Add a ref for the file input

  function handleFileUpload(e) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  }

  function onCheck(e) {
    e.preventDefault();
    if (data.length > 0) {
      alert("Data has been successfully added");
    } else {
      alert("Data has not been added, please select a file");
    }
    setData([]); // Reset the data state
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input
    }
  }

  return (
    <>
      <Navbar />
      <div className='w-full flex justify-center mt-5'>
        <div className='w-10/12 border-[1px] rounded-md'>
          <div className='flex justify-between p-5 border-b-[1px]'>
            <div className='font-sans font-medium text-gray-700 text-[18px]'>Import Products</div>
            <Link to={'/products'}>
              <div className='cursor-pointer'>X</div>
            </Link>
          </div>

          <div className='flex justify-between p-5 border-b-[1px]'>
            <input
              type="file"
              className='fileinput border-[1px] w-full leading-9 cursor-pointer'
              onChange={handleFileUpload}
              ref={fileInputRef} // Attach the ref to the file input
            />
          </div>

          <div className='flex justify-end p-5'>
            <button onClick={onCheck} className='bg-blue-700 p-3 text-white rounded-md'>Import</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Importproducts;
