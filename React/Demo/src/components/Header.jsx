import React from "react";
import {Link }  from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-blue-900 text-cyan-50 p-4 ">
        <h1 className="text-4xl p-2">My Website</h1>

        <div className=" flex gap-4 items-center text-1xl ">
         <div className="flex items-center gap-1"> <IoHome /><Link to='/' >Home</Link></div>
         <div> <Link to='/about'>About</Link></div>
          <div className="flex items-center gap-1"><FaCartShopping /><Link to='/product'>Product</Link></div>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
