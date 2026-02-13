import React, { useState, useEffect } from "react";
import circle from "../assets/finallogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";
import api from '../config/Api.jsx';
import { ShoppingCart } from "lucide-react"; // Ek icon use karna hamesha achha lagta hai

function Header() {
  const { user, isLogin, role, setIsLogin, setUser } = useAuth();
  const navigate = useNavigate();
  
  // --- Cart Count State ---
  const [cartCount, setCartCount] = useState(0);

  // Cart count update karne ka function
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Total number of unique items ya total quantity calculate karein
    const total = cart.reduce((i, item) => i + item.quantity, 0);
    setCartCount(total);
  };

  useEffect(() => {
    updateCartCount(); // Pehli baar load hone par

    // Custom event listen karna
    window.addEventListener("cartUpdated", updateCartCount);
    
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  const handleNavigate = () => {
    switch (role) {
      case "manager": navigate("/restaurant-dashboard"); break;
      case "partner": navigate("/ride-dashboard"); break;
      case "customer": navigate("/user-dashboard"); break;
      case "admin": navigate("/admin-dashboard"); break;
      default: break;
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
        <img src={circle} alt="Logo" className="rounded-full object-cover w-50 h-20" />
      </Link>

      <div className="flex gap-6 text-2xl px-5 items-center">
        <Link to={"/"} className="text-(--text-secondary) font-semibold hover:text-(--color-accent) transition-colors">Home</Link>
        <Link to={"/about"} className="text-(--text-secondary) font-semibold hover:text-(--color-accent) transition-colors">About</Link>
        <Link to={"/contact"} className="text-(--text-secondary) font-semibold hover:text-(--color-accent) transition-colors">Contact</Link>
        
        {/* --- Dynamic Cart Link --- */}
        <Link to={"/add-to-cart"} className="relative flex items-center gap-1 text-(--text-secondary) font-semibold hover:text-(--color-accent) transition-colors">
          <ShoppingCart size={24} />
          <span>Carts</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-amber-400 text-black text-[12px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-(--color-primary) animate-in zoom-in">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        {isLogin ? (
          <>
            <div className="cursor-pointer text-xl font-bold text-(--text-secondary) hover:text-(--color-accent)" onClick={handleNavigate}>
              {user.fullName}
            </div>
            <button onClick={handleLogout} className="px-5 py-2 bg-amber-50 text-black rounded-lg font-bold hover:bg-amber-100 transition-all">
              Logout
            </button>
          </>
        ) : (
          <div className="flex gap-3">
            <button className="border-2 border-(--color-accent) px-6 py-2 rounded-3xl text-(--text-secondary) text-[20px] hover:bg-(--color-accent) font-bold transition-all" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="border-2 border-(--color-accent) px-6 py-2 rounded-3xl text-(--text-secondary) text-[20px] hover:bg-(--color-accent) font-bold transition-all" onClick={() => navigate("/register")}>
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;