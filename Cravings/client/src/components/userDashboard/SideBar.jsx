import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoCart } from "react-icons/io5";
import { TbTransactionPound } from "react-icons/tb";
import { MdOutlineHelpOutline } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";

const SideBar = ({ active, setActive }) => {
  return (
    <>
      <div className=" p-3">
        <div className="text-xl font-bold">User Dashboard</div>
        <hr />

        <div className="flex flex-col gap-3 p-3">
          <button
            className={`flex items-center gap-2 p-2 rounded ${
              active === "overview"
                ? "bg-(--bg-light)"
                : " hover:bg-amber-50/70 hover:scale-105"
            }`}
            onClick={() => setActive("overview")}
          >
            <CiGrid41 />
            Overview
          </button>
          <button
            className={`flex items-center gap-2 p-2 rounded ${
              active === "profile"
                ? "bg-(--bg-light)"
                : " hover:bg-amber-50/70 hover:scale-105"
            }`}
            onClick={() => setActive("profile")}
          >
            <CgProfile />
            Profiles
          </button>
          <button
           className={`flex items-center gap-2 p-2 rounded ${
              active === "order"
                ? "bg-(--bg-light)"
                : " hover:bg-amber-50/70 hover:scale-105"
            }`}
            onClick={() => setActive("order")}
          >
            <IoCart />
            Orders
          </button>
          <button
           className={`flex items-center gap-2 p-2 rounded ${
              active === "transaction"
                ? "bg-(--bg-light)"
                : " hover:bg-amber-50/70 hover:scale-105"
            }`}
            onClick={() => setActive("transaction")}
          >
            <TbTransactionPound />
            Transactions
          </button>
          <button
            className={`flex items-center gap-2 p-2 rounded ${
              active === "helpdesk"
                ? "bg-(--bg-light)"
                : " hover:bg-amber-50/60 hover:scale-105"
            }`}
            onClick={() => setActive("helpdesk")}
          >
            <MdOutlineHelpOutline />
            Help Desk
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
