import React, { useEffect, useState } from "react";
import api from "../config/Api";
import {
  ArrowLeft,
  ChevronRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getCartDetails = async () => {
    try {
      const localCart = JSON.parse(localStorage.getItem("cart")) || [];

      if (localCart.length === 0) {
        setCartItems([]);
        setLoading(false);
        return;
      }

      console.log(localCart);
      const arrayId = localCart.map((item) => item.id);
      console.log("arrayId: ", arrayId);

      const res = await api.post(`/public/fetchMenu/`, { arrayId });
      const allData = res.data.data;
      console.log("allData : ", allData);

      const quantityMap = {};
      localCart.forEach((item) => {
        quantityMap[item.id] = item.quantity;
      });

      
      const mergeData = allData.map((dish) => {
        return {
          ...dish,
          // Loop chalane ke bajaye direct key se value uthao
          quantity: quantityMap[dish._id] || 1,
        };
      });
      console.log("Mergedata: " , mergeData);
      

      setCartItems(mergeData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCartDetails();
  }, []);

  const handleQuantity = (id, change) => {
    const updated = cartItems.map((item) => {
      if (item._id === id) {
        const newQty = Math.max(0, item.quantity + change);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCartItems(updated);

    // Sync with LocalStorage
    const storageCart = updated.map((item) => ({
      id: item._id,
      quantity: item.quantity,
    }));
    localStorage.setItem("cart", JSON.stringify(storageCart));
    window.dispatchEvent(new Event("cartUpdated")); // Header update ke liye
  };

  // 3. Remove Item Logic
  const removeItem = (id) => {
    const filtered = cartItems.filter((item) => item._id !== id);
    setCartItems(filtered);
    const storageCart = filtered.map((item) => ({
      id: item._id,
      quantity: item.quantity,
    }));
    localStorage.setItem("cart", JSON.stringify(storageCart));
    window.dispatchEvent(new Event("cartUpdated"));
    toast.success("Item removed");
  };

  // 4. Calculations
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const delivery = subtotal > 500 ? 0 : 40;

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center font-black text-[#842A3B] animate-pulse">
        CRAVING...
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Top Bar */}
      <div className="bg-white px-6 py-4 border-b flex items-center justify-between sticky top-0 z-50">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-bold text-slate-600 hover:text-[#842A3B]"
        >
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="font-black text-xl tracking-tighter uppercase italic text-slate-800">
          Your Cravings
        </h1>
        <div className="w-10"></div> {/* Spacer */}
      </div>

      <div className="max-w-7xl mx-auto mt-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Cart Items (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">
              <ShoppingBag size={48} className="mx-auto text-slate-200 mb-4" />
              <p className="text-slate-400 font-bold">Your cart is empty!</p>
              <button
                className="mt-4 text-[#842A3B] font-black underline"
                onClick={() => navigate("/")}
              >
                Explore Menu
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-white p-5 rounded-[1.5rem]  shadow-sm flex items-center gap-4 hover:shadow-md transition-all"
              >
                <img
                  src={item.image[0]?.url}
                  className="w-29 h-29 rounded-2xl object-cover shadow-inner"
                  alt=""
                />

                <div className="flex-1 ">
                  <h3 className="font-black text-2xl pb-2 text-slate-800">{item.dishName}</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                    {item.cuisine}
                  </p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                    {item.restaurantID.restaurantName}
                  </p>
                  <p className="font-black text-[#842A3B] mt-2">
                    ₹{item.price}
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-slate-100 p-1.5 rounded-xl">
                  <button
                    onClick={() => handleQuantity(item._id, -1)}
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm hover:text-[#842A3B]"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-black w-4 text-center text-sm">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantity(item._id, 1)}
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm hover:text-[#842A3B]"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item._id)}
                  className="p-3 text-slate-300 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Right: Bill Details (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 sticky top-24">
            <h2 className="font-black text-slate-800 mb-6 text-lg uppercase tracking-tighter">
              Bill Details
            </h2>

            <div className="space-y-4 border-b pb-6">
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Item Total</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Delivery Fee</span>
                <span
                  className={delivery === 0 ? "text-green-500 font-bold" : ""}
                >
                  {delivery === 0 ? "FREE" : `₹${delivery}`}
                </span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Platform Fee</span>
                <span>₹5</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 mb-8">
              <span className="font-black text-slate-800 text-xl tracking-tighter">
                TO PAY
              </span>
              <span className="font-black text-3xl text-slate-800 tracking-tighter">
                ₹{subtotal + delivery + 5}
              </span>
            </div>

            <button className="w-full bg-[#842A3B] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-[#842A3B]/30">
              Proceed to Checkout <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
