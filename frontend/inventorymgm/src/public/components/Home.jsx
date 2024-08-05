

import React, { useState, useEffect } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct, AiFillProduct } from "react-icons/ai";
import { GoPackageDependents, GoPackageDependencies } from "react-icons/go";
import { CiFileOn, CiSettings, CiSearch, CiShoppingCart, CiDeliveryTruck } from "react-icons/ci";
import { BsFiles } from "react-icons/bs";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Chart from "react-apexcharts";
import "../../App.css"
const Home = () => {

  const data = [
    { date: "1-6-2024", sales: "23%" },
    { date: "2-6-2024", sales: "27%" },
    { date: "3-6-2024", sales: "28%" },
    { date: "4-6-2024", sales: "29%" },
    { date: "5-6-2024", sales: "23%" },
    { date: "6-6-2024", sales: "27%" },
    { date: "7-6-2024", sales: "28%" },
    { date: "8-6-2024", sales: "23%" },
    { date: "9-6-2024", sales: "27%" },
    { date: "10-6-2024", sales: "28%" },
    { date: "11-6-2024", sales: "29%" },
    { date: "12-6-2024", sales: "23%" },
    { date: "13-6-2024", sales: "27%" },
    { date: "14-6-2024", sales: "28%" },
    
  ];


  const activeusersdata = [
    { date: "1-6-2024", activeusers: "23" },
    { date: "2-6-2024", activeusers: "27" },
    { date: "3-6-2024", activeusers: "28" },
    { date: "4-6-2024", activeusers: "29" },
    { date: "5-6-2024", activeusers: "23" },
    { date: "6-6-2024", activeusers: "27" },
    { date: "7-6-2024", activeusers: "28" },
    { date: "8-6-2024", activeusers: "23" },
    { date: "9-6-2024", activeusers: "27" },
    { date: "10-6-2024", activeusers: "28" },
    { date: "11-6-2024", activeusers: "29" },
    { date: "12-6-2024", activeusers: "23" },
    { date: "13-6-2024", activeusers: "27" },
    { date: "14-6-2024", activeusers: "28" },
    
  ];

  const dates = data.map(item => item.date);
  const profits = data.map(item => item.sales);

  const activedates = activeusersdata.map(item => item.date);
  const activeprofits = activeusersdata.map(item => item.activeusers);


  const chartOptions = {
    chart: {
      height: 350,
      
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        // dataLabels: {
        //   position: 'top', // top, center, bottom
        // },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["white"]
      }
    },
    xaxis: {
      categories: dates,
      position: 'bottom',
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      tooltip: {
        enabled: true,
      }
    },
    yaxis: {
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true,
      },
      labels: {
        show: true,
        formatter: function (val) {
          return val;
        }
      }
    },
    title: {
      text: 'Daily sales in %',
      floating: true,
      offsetY: 0,
      align: 'center',
      style: {
        color: '#239208'
      }
    }
  };

  const ActiveuserschartOptions = {
    chart: {
      height: 350,
      
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        // dataLabels: {
        //   position: 'top', // top, center, bottom
        // },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["white"]
      }
    },
    xaxis: {
      categories: dates,
      position: 'bottom',
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      tooltip: {
        enabled: true,
      }
    },
    yaxis: {
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true,
      },
      labels: {
        show: true,
        formatter: function (val) {
          return val;
        }
      }
    },
    title: {
      text: 'Daily USers active',
      floating: true,
      offsetY: 0,
      align: 'center',
      style: {
        color: '#0721A3'
      }
    }
  };

  const chartSeries = [{
    name: 'sales',
    data: profits,
    color:"#239208"
  }];


  const ActivechartSeries = [{
    name: 'activeuser',
    data: activeprofits,
    color:"#0721A3"
  }];





  // Sample data for daily revenue
  const revenueData = [
    { date: "1-6-2024", revenue: 2300 },
    { date: "2-6-2024", revenue: 2700 },
    { date: "3-6-2024", revenue: 2800 },
    { date: "4-6-2024", revenue: 2900 },
    { date: "5-6-2024", revenue: 2300 },
    { date: "6-6-2024", revenue: 2700 },
    { date: "7-6-2024", revenue: 2800 },
    { date: "8-6-2024", revenue: 2300 },
    { date: "9-6-2024", revenue: 2700 },
    { date: "10-6-2024", revenue: 2800 },
    { date: "11-6-2024", revenue: 2900 },
    { date: "12-6-2024", revenue: 2300 },
    { date: "13-6-2024", revenue: 2700 },
    { date: "14-6-2024", revenue: 2800 },
  ];

  // Extract dates and revenue values



  const revenuedate = revenueData.map(item => item.date);
  const revenues = revenueData.map(item => item.revenue);

  // Chart options for the line chart
  const RevenuechartOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'smooth',
      show:true,
      width:2,
    
    },
    xaxis: {
      categories: revenuedate,
    },
    title: {
      text: 'Daily Revenue',
      align: 'center',
      style: {
        color: '#239208'
      }
    }
  };

  // Series data for the line chart
  const RevenuechartSeries = [{
    name: 'Revenue',
    data: revenues,
    color:"#239208",
  }];



  // ======newclients=============

  // Sample data for daily revenue
  const Newclientsdata = [
    { date: "1-6-2024", newclients: 2300 },
    { date: "2-6-2024", newclients: 2700 },
    { date: "3-6-2024", newclients: 2800 },
    { date: "4-6-2024", newclients: 2900 },
    { date: "5-6-2024", newclients: 2300 },
    { date: "6-6-2024", newclients: 2700 },
    { date: "7-6-2024", newclients: 2800 },
    { date: "8-6-2024", newclients: 2300 },
    { date: "9-6-2024", newclients: 2700 },
    { date: "10-6-2024", newclients: 2800 },
    { date: "11-6-2024", newclients: 2900 },
    { date: "12-6-2024", newclients: 2300 },
    { date: "13-6-2024", newclients: 2700 },
    { date: "14-6-2024", newclients: 2800 },
  ];

  // Extract dates and revenue values



  const newclientsdate = Newclientsdata.map(item => item.date);
  const newclients = Newclientsdata.map(item => item.newclients);






// new clients=========
  const NewclientschartOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'smooth',
      show:true,
      width:2,
    },
    xaxis: {
      categories: newclientsdate,
    },
    title: {
      text: 'Newclients Data',
      align: 'center',
      style: {
        color: '#080585'
      }
    }
  };

  // Series data for the line chart
  const NewclientschartSeries = [{
    name: 'Newlients',
    data: newclients,
    color:"#080585"
  }];





  return (
    <>
      {/* create new order popup */}
      <Navbar />
      <div className="home w-full flex justify-center mt-[150px]">
        <div className="w-full lg:w-10/12 flex justify-around lg:justify-between">
          <div className="w-4/12 text-[21px] font-bold">
            <div className="text-[10px] font-normal">OVERVIEW</div>
            Dashboard
          </div>
          <Link to={'/createorder'}>
            <div className="cursor-pointer rounded-md hover:opacity-[0.8] relative bg-blue-800 w-full lg:w-full text-white flex justify-between items-center p-2">
              <div className="text-[19px] text-center align-middle">+</div>
              <button className='text-center align-middle'>Create New Order</button>
            </div>
          </Link>
        </div>
      </div>

      {/* cards */}
      <div className="w-full flex justify-center mt-5">
        <div className="w-11/12 lg:w-10/12 flex justify-between flex-wrap">

          {/* individual cards */}
          <div className="border-[1px] w-full lg:w-[48%] py-3 mt-3">
            <div className="flex justify-between w-11/12 ml-auto mr-auto">
              <div>
                <p className="text-[12px]">SALES</p>
                <p className="text-[22px] font-bold">75%</p>
              </div>
              <div>
                <select name="cars" className="cursor-pointer" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="mt-2 sales w-full lg:w-11/12 ml-auto mr-auto border-[4px]">
              <Chart className= "overflow-x-auto overflow-y-hidden" options={chartOptions} series={chartSeries} type="bar" width={700} height={280} />
            </div>
          </div>

          {/* individual cards */}
          <div className="border-[1px] w-full  lg:w-[48%] py-3 mt-3">
            <div className="flex justify-between w-11/12 ml-auto mr-auto">
              <div>
                <p className="text-[12px]">Revenue</p>
                <p className="text-[22px] font-bold">75%</p>
              </div>
              <div>
                <select name="cars" className="cursor-pointer" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="mt-2 flex justify-center">

 <div className="mt-2 sales w-full lg:w-11/12 ml-auto mr-auto border-[4px] revenue">
<Chart
 className=' overflow-x-auto overflow-y-hidden'
  options={RevenuechartOptions}
   series={RevenuechartSeries}
    type="line" width={700} height={280} />
</div> 

            </div>
          </div>

         
          {/* individual cards */}



          <div className="border-[1px] w-full  lg:w-[48%] py-3 mt-3">
            <div className="flex justify-between w-11/12 ml-auto mr-auto">
              <div>
                <p className="text-[12px]">New Clients</p>
                <p className="text-[22px] font-bold">75%</p>
              </div>
              <div>
                <select name="cars" className="cursor-pointer" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="mt-2 flex justify-center">

 <div className="mt-2 sales w-full lg:w-11/12 ml-auto mr-auto border-[4px] newclients">
<Chart
 className=' overflow-x-auto overflow-y-hidden'
  options={NewclientschartOptions}
   series={NewclientschartSeries}
    type="line" width={700} height={280} />
</div> 
            </div>
          </div>





          {/* individual cards */}
          <div className="border-[1px] w-full lg:w-[48%] py-3 mt-3">
            <div className="flex justify-between w-11/12 ml-auto mr-auto">
              <div>
                <p className="text-[12px]">Active Users</p>
                <p className="text-[22px] font-bold">75%</p>
              </div>
              <div>
                <select name="cars" className="cursor-pointer" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="mt-2 sales w-full lg:w-11/12 ml-auto mr-auto border-[4px]">
              <Chart className= "overflow-x-auto overflow-y-hidden" options={ActiveuserschartOptions} series={ActivechartSeries} type="bar" width={700} height={280} />
            </div>
          </div>



        </div>
      </div>

      {/* another small cards */}
      <div className="w-full flex justify-center my-5 ">
        <div className="w-11/12 lg:w-10/12 flex justify-between flex-wrap">
          {/* individual cards */}
          <div className="border-[1px] justify-around w-full lg:w-[275px] p-3 flex items-center mt-3">
            <div className="w-2/12 bg-blue-700 py-1 flex justify-center">
              <AiFillProduct className="text-white text-[28px]" />
            </div>
            <div className="w-9/12">
              <p>2 Products</p>
              <p>2 Categories</p>
            </div>
          </div>

          {/* individual cards */}
          <div className="border-[1px] justify-around w-full lg:w-[275px] p-3 flex items-center mt-3">
            <div className="w-2/12 bg-green-600 py-1 flex justify-center">
              <CiShoppingCart className="text-white text-[28px]" />
            </div>
            <div className="w-9/12">
              <p>2 Products</p>
              <p>2 Categories</p>
            </div>
          </div>

          {/* individual cards */}
          <div className="border-[1px] justify-around w-full lg:w-[275px] p-3 flex items-center mt-3">
            <div className="w-2/12 bg-sky-400 py-1 flex justify-center">
              <CiDeliveryTruck className="text-white text-[28px]" />
            </div>
            <div className="w-9/12">
              <p>2 Products</p>
              <p>2 Categories</p>
            </div>
          </div>

          {/* individual cards */}
          <div className="border-[1px] justify-around w-full lg:w-[275px] p-3 flex items-center mt-3">
            <div className="w-2/12 bg-blue-600 py-1 flex justify-center">
              <BsFiles className="text-white text-[28px]" />
            </div>
            <div className="w-9/12">
              <p>2 Products</p>
              <p>2 Categories</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;


// import React, { useState, useEffect } from 'react';
// import { AiFillProduct } from "react-icons/ai";
// import { CiShoppingCart, CiDeliveryTruck } from "react-icons/ci";
// import { BsFiles } from "react-icons/bs";
// import Navbar from './Navbar';
// import { Link } from 'react-router-dom';
// import Chart from "react-apexcharts";

// const Home = () => {

//   // return (
//   //   <>
//   //     {/* Navbar */}
//   //     <Navbar />

//   //     {/* Content */}
//   //     <div className="w-full flex justify-center mt-5">
//   //       <div className="w-full lg:w-10/12 flex justify-around lg:justify-between">
//   //         <div className="w-4/12 text-[21px] font-bold">
//   //           <div className="text-[10px] font-normal">OVERVIEW</div>
//   //           Dashboard
//   //         </div>
//   //         <Link to={'/createorder'}>
//   //           <div className="cursor-pointer rounded-md hover:opacity-[0.8] relative bg-blue-800 w-full lg:w-full text-white flex justify-between items-center p-2">
//   //             <div className="text-[19px] text-center align-middle">+</div>
//   //             <button className='text-center align-middle'>Create New Order</button>
//   //           </div>
//   //         </Link>
//   //       </div>
//   //     </div>

//   //     {/* Cards */}
//   //     <div className="w-full flex justify-center mt-5">
//   //       <div className="w-10/12 flex justify-between flex-wrap">
//   //         {/* Sales Chart Card */}
//   //         <div className="border-[1px] w-full lg:w-[48%] py-3 mt-3">
//   //           <div className="flex justify-between w-11/12 ml-auto mr-auto">
//   //             <p className="text-[12px]">SALES</p>
//   //             <p className="text-[22px] font-bold">75%</p>
//   //             <select name="cars" className="cursor-pointer" id="cars">
//   //               <option value="volvo">Volvo</option>
//   //               <option value="saab">Saab</option>
//   //               <option value="opel">Opel</option>
//   //               <option value="audi">Audi</option>
//   //             </select>
//   //           </div>
//   //           <div className="mt-2 sales w-full lg:w-11/12 ml-auto mr-auto border-[4px]">
//   //             <Chart className=' overflow-auto' options={RevenuechartOptions} series={RevenuechartSeries} type="line" width={700} height={280} />
//   //           </div>
//   //         </div>

//   //         {/* Placeholder for other cards */}
//   //         {/* Replace with your other cards as needed */}
//   //       </div>
//   //     </div>

//   //     {/* Small Cards Section */}
//   //     <div className="w-full flex justify-center mt-5">
//   //       <div className="w-10/12 flex justify-between flex-wrap">
//   //         {/* Individual Small Cards */}
//   //         <div className="border-[1px] justify-around w-[260px] p-3 flex items-center mt-3">
//   //           <div className="w-2/12 bg-blue-700 py-1 flex justify-center">
//   //             <AiFillProduct className="text-white text-[28px]" />
//   //           </div>
//   //           <div className="w-9/12">
//   //             <p>2 Products</p>
//   //             <p>2 Categories</p>
//   //           </div>
//   //         </div>

//   //         {/* Add more small cards here */}
//   //       </div>
//   //     </div>
//   //   </>
//   // );
// }

// export default Home;
