import React from "react";
import {Link }  from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-black text-amber-50  p-4 ">
        <h1 className="text-5xl p-2">MakeupStore</h1>

        <div className=" flex gap-5 items-center text-2xl ">
         <div className="flex items-center gap-1"> <IoHome /><Link to='/' >Home</Link></div>
         <div> <Link to='/registration'>Registration</Link></div>
          <div className="flex items-center gap-1"><FaCartShopping /><Link to='/product'>Product</Link></div>
          <Link to='/contact'>Contact</Link>
          <Link to='/signup'>Signup</Link>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
