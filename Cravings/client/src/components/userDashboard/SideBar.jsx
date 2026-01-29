import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoCart } from "react-icons/io5";
import { TbTransactionRupee } from "react-icons/tb";
import { MdOutlineHelpOutline } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import api from '../../config/Api'

const SideBar = ({ active, setActive, isCollapse, setIsCollapse }) => {
  const { setUser, setIsLogin } = useAuth();
  const menuItems = [
    { key: "overview", title: "Overview", icon: <CiGrid41 size={20} /> },
    { key: "profile", title: "Profile", icon: <CgProfile size={20} /> },
    { key: "order", title: "Order", icon: <IoCart size={20} /> },
    {
      key: "transaction",
      title: "Transaction",
      icon: <TbTransactionRupee size={20} />,
    },
    {
      key: "helpdesk",
      title: "Help desk",
      icon: <MdOutlineHelpOutline size={20} />,
    },
  ];

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout"); // cookie clear
      toast.success(res.data.message);
      setUser(""); // user clear
      setIsLogin(false); // login clear
      sessionStorage.removeItem("CravingUser");
    } catch (error) {
      // console.log(error)
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className=" p-3">
          <div className="text-xl font-bold flex h-12 items-center gap-2 ">
            <button
              className="hover:scale-105"
              onClick={() => setIsCollapse(!isCollapse)}
            >
              <GiHamburgerMenu className="ms-3" />
            </button>
            {!isCollapse && (
              <span className="overflow-hidden text-nowrap">
                User Dashboard
              </span>
            )}
          </div>
          <hr />

          <div className="flex flex-col gap-3 mt-2 w-full">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                className={`flex items-center gap-2 p-2 ${isCollapse ? "mx-auto" : ""} rounded h-12 text-nowrap ${
                  active === item.key
                    ? "bg-(--bg-light)"
                    : " hover:bg-amber-50/70 hover:scale-105"
                }`}
                onClick={() => setActive(item.key)}
              >
                {item.icon}
                {isCollapse ? "" : item.title}
              </button>
            ))}
          </div>
        </div>

        <div>
          <button
            className={`flex items-center gap-2 p-2 ${isCollapse ? "mx-auto" : ""} rounded h-12 text-nowrap `}
            onClick={handleLogout}
          >
            {""}
            <MdLogout />
            {!isCollapse && "Logout"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
