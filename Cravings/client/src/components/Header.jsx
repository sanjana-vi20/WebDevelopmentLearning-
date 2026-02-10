import React from "react";
import circle from "../assets/finallogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";
import api from '../config/Api.jsx'

function Header() {
   const { user, isLogin, role, setIsLogin, setUser } = useAuth();
  const navigate = useNavigate();

  const handleNavigate = () => {
    switch (role) {
      case "manager": {
        navigate("/restaurant-dashboard");
        break;
      }
      case "partner": {
        navigate("/ride-dashboard");
        break;
      }
      case "customer": {
        navigate("/user-dashboard");
        break;
      }
      case "admin": {
        navigate("/admin-dashboard");
        break;
      }
      default:
        break;
    }
  };

   const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout"); // cookie clear
      setUser(""); // user clear
      setIsLogin(false); // login clear
      sessionStorage.removeItem("CravingUser");
      toast.success(res.data.message);
    } catch (error) {
      // console.log(error)
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };
  return (
    <>
      <div className=" sticky top-0 z-100 bg-(--color-primary) py-3  px-3 flex justify-between items-center">
        <Link to={"/"}>
          <img
            src={circle}
            alt=""
            className="rounded-full object-cover w-50 h-20 text-shadow-lg"
          />
        </Link>

        <div className="flex gap-4 text-2xl px-5 items-center ">
          <Link
            to={"/"}
            className="text-decoration-none text-(--text-secondary) font-semibold hover:text-(--color-accent)"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-decoration-none text-(--text-secondary) font-semibold hover:text-(--color-accent)"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-decoration-none text-(--text-secondary) font-semibold hover:text-(--color-accent)"
          >
            Contact
          </Link>
        </div>

        <div className="flex gap-4 text-2xs">
          {isLogin ? (
            <>
            <div className="cursor-pointer text-center" onClick={()=>handleNavigate()}>{user.fullName}
            </div>
            <div role="button" onClick={handleLogout} className="px-5 py-2 bg-(--bg-light) text-black rounded">
              Logout</div></>
            
          ) : (
            <div className="flex gap-3">
              <button
                className="border-2 border-(--color-accent) px-6 py-2 rounded-3xl text-(--text-secondary) text-[20px] hover:text-(--text-primary) hover:bg-(--color-accent) font-bold"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="border-2 border-(--color-accent) px-6 py-2 rounded-3xl text-(--text-secondary) text-[20px] hover:text-(--text-primary) hover:bg-(--color-accent) font-bold"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
