import React from "react";
import circle from "../assets/cravings.png";
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
      <div className="bg-(--color-primary) sticky top-0 z-99 py-3  px-3 flex justify-between items-center">
        <Link to={"/"}>
          <img
            src={circle}
            alt=""
            className="rounded-full object-cover w-20 h-20"
          />
        </Link>

        <div className="flex gap-4 text-2xl px-5 items-center ">
          <Link
            to={"/"}
            className="text-decoration-none text-(--text-secondary) hover:text-(--text-primary)"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-decoration-none text-(--text-secondary) hover:text-(--text-primary)"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-decoration-none text-(--text-secondary) hover:text-(--text-primary)"
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
                className="bg-(--color-accent) px-4 py-2 rounded text-(--text-primary) hover:text-(--color-secondary-hover)"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="bg-(--color-accent) px-4 py-2 rounded text-(--text-primary) hover:text-(--color-secondary-hover)"
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
