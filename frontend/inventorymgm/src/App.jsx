import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { GoPackageDependents } from "react-icons/go";
import { GoPackageDependencies } from "react-icons/go";
import { CiFileOn } from "react-icons/ci";
import { BsFiles } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { AiFillProduct } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import Products from "./public/components/Products";
import "./App.css";
import Home from "./public/components/Home";
import Navbar from "./public/components/Navbar";
import { Link } from "react-router-dom";
import Allorders from "./public/components/Allorders";
import AllordersId from "./public/components/AllordersId";
import Quotations from "./public/components/Quotations";
import Quotationsid from "./public/components/Quotationsid";
import Suppliers from "./public/components/Suppliers";
import Customerss from "./public/components/Customerss";
import Suppliersidedit from "./public/components/Suppliersidedit";
import Customersscreate from "./public/components/Customersscreate";
import Customersid from "./public/components/Customersid";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Createproducts from "./public/components/Createproducts";
import Importproducts from "./public/components/Importproducts";
import Orders from "./public/components/Orders";
import Downloadordersdetails from "./public/components/Downloadordersdetails";
import Quotationscreate from "./public/components/Quotationscreate";
// import Quotationsid from "./public/components/Quotationsid";
import Supplierscreate from "./public/components/Supplierscreate";
import Suppliersid from "./public/components/Suppliersid";
import Customersidedit from "./public/components/Customersidedit";
import Categories from "./public/components/Categories";
import Categoriescreate from "./public/components/Categoriescreate";
import Categoriesproductitems from "./public/components/Categoriesproductitems";
import Productsid from "./public/components/Productsid";
import Productsidedit from "./public/components/Productsidedit";
import Categoriesproductsedit from "./public/components/Categoriesproductsedit";
import Units from "./public/components/Units";
import Unitscreate from "./public/components/Unitscreate";
import Unitsproducts from "./public/components/Unitsproducts";
import Unitsproductsedit from "./public/components/Unitsproductsedit";
import Purchase from "./public/components/Purchase";
import Purchasecreate from "./public/components/Purchasecreate";
import Purchaseapproved from "./public/components/Purchaseapproved";
import Purchasecreateedit from "./public/components/Purchasecreateedit";
import Orderscompleted from "./public/components/Orderscompleted";
import Orderspending from "./public/components/Orderspending";
import Ordersid from "./public/components/Ordersid";
import Ordersdue from "./public/components/Ordersdue";
import Dueordersidedit from "./public/components/Dueordersidedit";
import Purchasereportdetails from "./public/components/Purchasereportdetails";
import SignupForm from "./public/components/SignupForm";
import Login from "./public/components/Login";
function App() {

  const [count, setCount] = useState(0);

  return (
    <>
   <BrowserRouter>
   <Routes>

<Route path="/" element={<Home />} />
<Route path="/products" element={<Products />} />
<Route path="/products/id" element={<Productsid/>} />
<Route path="/products/id/edit" element={<Productsidedit/>} />

<Route path="/createproduct" element={<Createproducts />} />
<Route path="/importproduct" element={<Importproducts />} />
<Route path="/createorder" element={<Orders />} />
<Route path="/allorders" element={<Allorders />} />

<Route path="/orders/completed" element={<Orderscompleted />} />
<Route path="/allorders/id/details/download" element={<Downloadordersdetails />} />
<Route path="/due/orders/edit/id" element={<Dueordersidedit />} />

<Route path="/quotations" element={< Quotations/>} />
<Route path="/quotations/id" element={< Quotationsid/>} />
<Route path="/quotations/create" element={< Quotationscreate/>} />
<Route path="/pages/customers" element={<Customerss/>} />
<Route path="/pages/customers/create" element = {<Customersscreate />} />
<Route path="/pages/customers/id" element={<Customersid />} />
<Route path="/pages/customers/id/edit" element={<Customersidedit/>} />
<Route path="/pages/suppliers" element={<Suppliers/>} />
<Route path="/pages/suppliers/create" element = {<Supplierscreate/>} />
<Route path="/pages/suppliers/id" element={<Suppliersid/>} />
<Route path="/pages/suppliers/id/edit" element={<Suppliersidedit/>} />
<Route path="/setting/categories" element={<Categories/>} />
<Route path="/setting/categories/create" element={<Categoriescreate/>} />
<Route path="/setting/categories/product" element={<Categoriesproductitems/>} />
<Route path="/setting/categories/product/edit" element={<Categoriesproductsedit/>} />


<Route path="/setting/units" element={<Units/>} />
 <Route path="/setting/units/create" element={<Unitscreate/>} />
<Route path="/setting/units/product" element={<Unitsproducts/>} />
<Route path="/setting/units/product/edit" element={<Unitsproductsedit/>} />

<Route path="/purchase" element={<Purchase/>} />
<Route path="/purchase/create" element={<Purchasecreate/>} />
<Route path="/purchase/create/edit" element={<Purchasecreateedit/>} />

<Route path="/purchase/approve" element={<Purchaseapproved />} />
<Route path="/purchase/report/details" element={<Purchasereportdetails />} />

<Route path="/orders/pending" element={< Orderspending/>} />
<Route path="/orders/id" element={< Ordersid/>} />
<Route path="/orders/due" element={< Ordersdue/>} />

<Route path="/signup" element={< SignupForm/>} />
<Route path="/login" element={< Login/>} />

   </Routes>
   </BrowserRouter>
     
    

    </>
  );
}

export default App;
