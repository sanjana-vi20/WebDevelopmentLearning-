import React, { useState, useEffect } from "react";
import circle from "../assets/finallogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";
import api from "../config/Api.jsx";
import { ShoppingCart } from "lucide-react";
import { MdLogout } from "react-icons/md";

function Header() {
  const { user, isLogin, role, setIsLogin, setUser } = useAuth();
  const navigate = useNavigate();
  // Current path check karne ke liye
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [lastSeenCount, setLastSeenCount] = useState(
    Number(localStorage.getItem("lastSeenCount")) || 0,
  );

  // Cart count update karne ka function
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Total number of unique items ya total quantity calculate karein
    const total = cart.reduce((i, item) => i + item.quantity, 0);
    setCartCount(total);

    if (location.pathname === "/add-to-cart") {
      localStorage.setItem("lastSeenCount", total);
      setLastSeenCount(total);
    }
  };

  useEffect(() => {
    updateCartCount(); // Pehli baar load hone par

    // Custom event listen karna
    window.addEventListener("cartUpdated", updateCartCount);

    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, [location.pathname]);

  const showBadge =
    cartCount > lastSeenCount && location.pathname !== "/add-to-cart";

  const handleNavigate = () => {
    switch (role) {
      case "manager":
        navigate("/restaurant-dashboard");
        break;
      case "partner":
        navigate("/ride-dashboard");
        break;
      case "customer":
        navigate("/user-dashboard");
        break;
      case "admin":
        navigate("/admin-dashboard");
        break;
      default:
        break;
    }
  };

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      setUser("");
      setIsLogin(false);
      sessionStorage.removeItem("CravingUser");
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  return (
    <div className="sticky top-0 z-[100] bg-(--color-primary) py-3 px-3 flex justify-between items-center shadow-md">
      <Link to={"/"}>
        <img
          src={circle}
          alt="Logo"
          className="rounded-full object-cover w-50 h-20"
        />
      </Link>

      <div className="flex gap-6 text-2xl px-5 items-center">
        <Link
          to={"/"}
          className="text-(--text-secondary) font-semibold hover:text-(--color-accent) transition-colors"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="text-(--text-secondary) font-semibold hover:text-(--color-accent) transition-colors"
        >
          About
        </Link>
        <Link
          to={"/contact"}
          className="text-(--text-secondary) font-semibold hover:text-(--color-accent) transition-colors"
        >
          Contact
        </Link>

        {/* --- Dynamic Cart Link --- */}
        <Link
          to={"/add-to-cart"}
          className="relative flex items-center gap-1 text-(--text-secondary) font-semibold hover:text-(--color-accent) transition-colors"
        >
          <ShoppingCart size={24} />
          <span>Carts</span>
          {showBadge && (
            <span className="absolute -top-2 -right-3 bg-amber-400 text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount - lastSeenCount}
            </span>
          )}
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        {isLogin ? (
          <>
            <div
              className="cursor-pointer text-[23px] tracking-tight font-black text-(--text-secondary) hover:text-(--color-accent)"
              onClick={handleNavigate}
            >
              {user.fullName}
            </div>
            <button
              onClick={handleLogout}
              className=" px-3 py-3 bg-amber-50 text-black rounded-full font-bold hover:bg-amber-100 transition-all"
            >
              <MdLogout size={20}/>
            </button>
          </>
        ) : (
          <div className="flex gap-3">
            <button
              className="border-2 border-(--color-accent) px-6 py-2 rounded-3xl text-(--text-secondary) text-[20px] hover:bg-(--color-accent) hover:text-(--text-primary) font-bold transition-all"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="border-2 border-(--color-accent) px-6 py-2 rounded-3xl text-(--text-secondary) text-[20px] hover:bg-(--color-accent) hover:text-(--text-primary) font-bold transition-all"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
