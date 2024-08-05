import Navbar from "./Navbar";
import "../../App.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Sample data
const sample = [
  {
    Photo: 'https://cdn.pixabay.com/photo/2024/02/05/17/10/coffee-8554940_640.jpg',
    ProductName: 'Oktra 100” FLAGSHIP 4K UHD X1000 SERIES (X650) 4k, amazon prime, Android tv, FHD, LED, led tv, netflix, playstore, SMART, smart tv, UHD, youtube',
    ProductCode: 'PC01',
    Quantity: 1,
    Price: 899999,
    SubTotal: 899999
  }
];

function createData(No, Photo, ProductName, ProductCode, Quantity, Price, SubTotal) {
  return { No, Photo, ProductName, ProductCode, Quantity, Price, SubTotal };
}

const columns = [
  {
    width: 50,
    label: 'No',
    dataKey: 'No',
  },
  {
    width: 50,
    label: 'Photo',
    dataKey: 'Photo',
  },
  {
    width: 300,
    label: 'Product Name',
    dataKey: 'ProductName',
  },
  {
    width: 100,
    label: 'Product Code',
    dataKey: 'ProductCode',
  },
  {
    width: 80,
    label: 'Quantity',
    dataKey: 'Quantity',
  },
  {
    width: 100,
    label: 'Price',
    dataKey: 'Price',
  },
  {
    width: 100,
    label: 'SubTotal',
    dataKey: 'SubTotal',
  },
];

const rows = sample.map((item, index) => createData(index + 1, item.Photo, item.ProductName, item.ProductCode, item.Quantity, item.Price, item.SubTotal));

const summaryData = [
  { label: 'Payed amount', value: '799,999.00' },
  { label: 'Due', value: '316,000.00' },
  { label: 'VAT', value: '216,000.00' },
  { label: 'Total', value: '1,115,999.00' },
  { label: 'Status', value: 'Pending', status: true },
];

function subtotal(items) {
  return items.map(({ SubTotal }) => SubTotal).reduce((sum, i) => sum + i, 0);
}

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function AllOrdersId() {
  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = 0.07 * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <>
      <Navbar />

      <div className="bg-[#F6F8FB] w-full flex justify-center py-3 orderscreate">
        <div className="w-full flex flex-col lg:w-10/12 lg:flex-row justify-between">
          <div className="lg:w-full border-[1px] bg-white">
            <div className="w-full flex justify-center border-b-[1px] py-4">
              <div className="flex justify-between w-11/12">
                <div>Orders Details</div>
                <Link to={'/allorders'}>X</Link>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-11/12 flex flex-wrap lg:flex-nowrap justify-between items-center py-4">
                <div className=" w-full lg:w-4/12 mt-3 lg:mt-0">
                  <label htmlFor="">Order Date</label>
                  <input
                    className="w-full lg:w-11/12 border-[1px] leading-9 px-1"
                    type="date"
                    name=""
                    id=""
                  />
                </div>

                <div className="w-full lg:w-4/12 lg:translate-x-2 mt-3 lg:mt-0">
                  <label htmlFor="">Invoice No</label>
                  <input
                    name="cars"
                    className="w-full lg:w-11/12 border-[1px] py-2 px-1"
                    id="cars"
                    type="text"
                  />
                </div>

                <div className="w-full lg:w-4/12 lg:translate-x-2 mt-3 lg:mt-0">
                  <label htmlFor="">Customer</label>
                  <input
                    name="cars"
                    className="w-full lg:w-11/12 border-[1px] py-2 px-1"
                    id="cars"
                    type="text"
                  />
                </div>

                <div className="w-full lg:w-4/12 lg:translate-x-5 mt-3 lg:mt-0">
                  <label htmlFor="">Payment type</label>
                  <input
                    className="w-full lg:w-11/12 border-[1px] leading-9 px-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-11/12 h-[400px] overflow-auto">
                <TableContainer component={Paper}>
                  <Table aria-label="spanning table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            className="border-[1px]"
                            key={column.dataKey}
                            align={column.dataKey === 'No' || column.dataKey === 'Photo' ? 'center' : 'center'}
                            style={{ width: column.width }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (
                        <TableRow key={index}>
                          {columns.map((column) => (
                            <TableCell
                              className="border-[1px]"
                              key={column.dataKey}
                              align={column.dataKey === 'No' || column.dataKey === 'Photo' ? 'center' : 'center'}
                            >
                              {column.dataKey === 'Photo' ? (
                                <img src={row[column.dataKey]} alt="Product" style={{ height: 60, width: 60 }} />
                              ) : (
                                row[column.dataKey]
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell className="border-[1px]" colSpan={6} align="right">Payed amount</TableCell>
                        <TableCell align="right">
                            {/* {ccyFormat(invoiceSubtotal)} */}
ok
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="border-[1px]" colSpan={6} align="right">Due</TableCell>
                        <TableCell align="right">
                            {/* {ccyFormat(invoiceSubtotal)} */}
                            ok
                            </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="border-[1px]" colSpan={6} align="right">VAT</TableCell>
                        <TableCell align="right">
                            {ccyFormat(invoiceTaxes)}
                            </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={6} className="border-[1px]" align="right">Total</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={6} className="border-[1px]" align="right">Status</TableCell>
                        <TableCell align="right">pending</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
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

export default AllOrdersId;
