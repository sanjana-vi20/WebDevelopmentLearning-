import React from "react";
import {Link }  from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-around bg-primary text-light">
        <h1>My Website</h1>

        <div className=" d-flex gap-4 align-items-center ">
          <Link to='/' className="text-decoration-none text-light">Home</Link>
          <Link to='/about' className="text-decoration-none text-light">About</Link>
          <Link to='/product' className="text-decoration-none text-light">Product</Link>
          <Link to='/contact' className="text-decoration-none text-light">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
