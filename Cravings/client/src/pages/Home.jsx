import React from "react";
import {
  Sparkles,
  Utensils,
  Truck,
  ShieldCheck,
  Star,
  ArrowRight,
  Apple,
  Play,
  ChefHat,
  Heart,
  Search,
  CheckCircle,
  Zap,
} from "lucide-react";
import video from '../assets/video.mp4'

import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const steps = [
    {
      id: 1,
      title: "Select Restaurant",
      desc: "Choose from a curated list of Bhopal's finest gourmet kitchens and local favorites.",
      icon: <Search size={24} className="text-[#842A3B]" />,
    },
    {
      id: 2,
      title: "Place Your Order",
      desc: "Pick your favorite dishes from the menu and proceed to our secure checkout.",
      icon: <Utensils size={24} className="text-[#842A3B]" />,
    },
    {
      id: 3,
      title: "Fast Delivery",
      desc: "Our delivery partners ensure your meal reaches you piping hot in under 30 minutes.",
      icon: <Truck size={24} className="text-[#842A3B]" />,
    },
    {
      id: 4,
      title: "Enjoy Your Meal",
      desc: "Sit back and experience a world of premium flavors delivered to your doorstep.",
      icon: <CheckCircle size={24} className="text-[#842A3B]" />,
    },
  ];

  const features = [
    {
      id: 1,
      title: "Premium Quality",
      desc: "We source only the finest organic ingredients from local farms to ensure every bite is perfection.",
      icon: <ShieldCheck size={28} />,
      color: "bg-[#842A3B]",
    },
    {
      id: 2,
      title: "Lightning Fast",
      desc: "Our optimized delivery network ensures your gourmet meal reaches you piping hot in under 30 minutes.",
      icon: <Zap size={28} />,
      color: "bg-[#1a1a1a]",
    },
    {
      id: 3,
      title: "Master Chefs",
      desc: "Prepared by world-class culinary experts who blend traditional recipes with modern artistry.",
      icon: <ChefHat size={28} />,
      color: "bg-[#842A3B]",
    },
  ];
  const dishes = [
    {
      id: 1,
      title: "Home Delivery",
      name: "Fresh Garden Pizza",
      price: "₹349",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400",
      icon: <Truck size={18} />,
    },
    {
      id: 2,
      title: "Chef's Special",
      name: "Gourmet Beef Burger",
      price: "₹499",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400",
      icon: <ChefHat size={18} />,
    },
    {
      id: 3,
      title: "Premium Quality",
      name: "Saffron Spiced Rice",
      price: "₹599",
      img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=400",
      icon: <ShieldCheck size={18} />,
    },
  ];
   const navigate = useNavigate();
  return (
    <div className="font-sans text-[#1a1a1a] bg-white overflow-hidden">
      {/* 1. HERO SECTION */}
      {/* 1. HERO SECTION - VIDEO BACKGROUND */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-full h-full object-cover"
        >
          <source
            src={video}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to darken video and make text readable */}
        <div className="absolute z-10 w-full h-full bg-black opacity-60"></div>

        {/* Content over Video */}
        <div className="relative z-20 text-center text-white space-y-6 px-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-amber">
            Craving It?
            <br />
            <span className="text-amber-50">We'll Bring It.</span>
          </h1>
          <p
            className="text-xl md:text-2xl font-medium max-w-2xl mx-auto drop-shadow-md animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Experience Bhopal's finest cuisine, brought fresh and fast to your
            door.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="bg-[#842A3B] text-white px-10 py-5 rounded-xl font-bold  shadow-lg hover:bg-[#662222] hover:-translate-y-1 transition-all" onClick={() =>navigate('/order-now')}>
              Order Your Feast
            </button>
            <button className="bg-white text-[#842A3B] px-10 py-5 rounded-xl font-bold  hover:bg-[#FAF7F2] hover:-translate-y-1 transition-all">
              Explore Menu
            </button>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-10 md:px-20">
          <div className="text-center mb-16 space-y-2 animate-fade-in">
            <span className=" uppercase text-gray-900 text-[20px] font-black">
              Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              How It Works
            </h2>
            <div className="w-20 h-1.5 bg-[#842A3B] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative group p-8 rounded-[2.5rem] bg-[#FDF6E3] border border-transparent hover:border-[#842A3B]/10 hover:bg-white hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#842A3B] text-[#FDF6E3] rounded-full flex items-center justify-center font-black text-xs shadow-lg">
                  0{step.id}
                </div>

                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="text-lg font-black text-gray-900 mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. LOVED DISHES SECTION */}
      <section className="py-20 bg-white font-sans overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-around gap-20 px-10">
            {/* Left Side: Tilted Images */}
            <div className="w-full lg:w-[50vw] relative h-[450px] flex items-center justify-center animate-fade-in">
              <div className="absolute top-0 left-0 w-[240px] md:w-[260px] aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white z-10 translate-x-4 animate-float-tilted">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=500"
                  className="w-full h-full object-cover"
                  alt="Chef"
                />
              </div>
              <div className="absolute bottom-4 right-0 w-[240px] md:w-[260px] aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-12 border-8 border-white z-20 -translate-x-4 animate-float-tiltedO">
                <img
                  src="https://aaft.com/blog/wp-content/uploads/2024/09/pikaso_texttoimage_Steps-to-Becoming-a-Professional-Chef-in-India-1024x701.jpeg"
                  className="w-full h-full object-cover"
                  alt="Dish"
                />
              </div>

              <div
                className="absolute -bottom-10 lg:-bottom-35 left-10 space-y-2 animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <span className="font-bold uppercase text-[10px] text-gray-400 tracking-widest">
                  Our Story
                </span>
                <h3 className="text-4xl font-black text-gray-900 mt-1 leading-tight">
                  Most Loved <br /> Dishes.
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-medium">
                  Bhopal ke asli swad ka tajurba karein. Humari signature dishes
                  jo bani hain sirf aapke liye.
                </p>
              </div>
            </div>

            {/* Right Side: Header & Product Cards */}
            <div className="p-4 flex flex-col items-center">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8 w-full animate-fade-in">
                <div className="max-w-xl px-4 space-y-2">
                  <span className="font-bold uppercase text-[10px] text-gray-400 tracking-widest">
                    Our Story
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-gray-900 mt-1">
                    Crafting Memories <br /> Through Food
                  </h2>
                </div>
                <button className="border-2 border-[#842A3B] text-[#842A3B] px-8 py-3 rounded-2xl font-bold text-xs uppercase hover:bg-[#842A3B] hover:text-white transition-all shadow-lg">
                  View Full Menu
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 w-full">
                {dishes.map((dish, index) => (
                  <div
                    key={dish.id}
                    className="bg-white rounded-[2.5rem] p-5 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all group animate-slide-up"
                    style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#842A3B] text-white rounded-full flex items-center justify-center">
                        {dish.icon}
                      </div>
                      <h4 className=" font-extrabold font-bold uppercase text-black">
                        {dish.title}
                      </h4>
                    </div>
                    <div className="aspect-square rounded-3xl overflow-hidden mb-5">
                      <img
                        src={dish.img}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt={dish.name}
                      />
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <h5 className=" font-bold  text-gray-900  ">
                          {dish.name}
                        </h5>
                        <p className=" text-gray-400 font-bold mt-1">
                          Gourmet Selection
                        </p>
                      </div>
                      <div className="bg-[#842A3B] text-white w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold">
                        {dish.id}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS SECTION */}
      <section className="py-24 bg-[#2A1B1D] text-white overflow-hidden">
        <div className="container mx-auto px-10 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-fade-in">
            <div className="space-y-4 w-full md:w-[40rem]">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Ready to taste <br /> What Foodies Say?
              </h2>
              <div className="flex gap-4">
                <button className="bg-black p-2 px-4 rounded-lg flex items-center gap-2 border border-white/20 hover:bg-white/10 transition-all">
                  <Apple size={20} />
                  <span className="text-[10px] font-bold">App Store</span>
                </button>
                <button className="bg-black p-2 px-4 rounded-lg flex items-center gap-2 border border-white/20 hover:bg-white/10 transition-all">
                  <Play size={20} />
                  <span className="text-[10px] font-bold">Google Play</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[1, 2, 3].map((t, index) => (
                <div
                  key={t}
                  className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4 animate-slide-up hover:bg-white/10 transition-all"
                  style={{ animationDelay: `${0.3 * (index + 1)}s` }}
                >
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed italic">
                    "Truly a gourmet experience! The quality and delivery speed
                    are unmatched in Bhopal."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden border border-white/20">
                      <img
                        src={`https://randomuser.me/api/portraits/thumb/men/${t + 15}.jpg`}
                        alt="User"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Happy User
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section */}
      <section className="py-24 bg-[#FDF6E3]/50 font-sans overflow-hidden">
        <div className="container mx-auto px-10 md:px-20">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-8 animate-fade-in">
            <div className=" space-y-2 px-3">
              <span className=" font-black uppercase tracking-tight text-[#842A3B]">
                Our Excellence
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[0.95] tracking-tighter">
                Why Foodies <br /> Choose Us.
              </h2>
              <p className="text-gray-500  font-medium leading-tight max-w-xl mt-4">
                We don’t just serve food; we deliver an exceptional experience.
                From every corner to every street in Bhopal, our quality and
                speed are the talk of the town.{" "}
              </p>
            </div>

            {/* Trust Badge */}
            <div className="hidden md:flex items-center gap-4 bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100 animate-float">
              <div className="w-12 h-12 rounded-full bg-[#F5DAA7] flex items-center justify-center text-[#842A3B]">
                <Star size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-sm font-black text-gray-900 leading-none">
                  10k+ Orders
                </p>
                <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">
                  Trusted in Bhopal
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="feature-card group relative p-10 bg-white rounded-[3rem] border border-gray-50 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {/* Decorative Number */}
                <div className="absolute top-8 right-8 text-5xl font-black text-gray-50 group-hover:text-[#842A3B]/5 transition-colors">
                  0{feature.id}
                </div>

                <div
                  className={`w-16 h-16 ${feature.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  {feature.desc}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-[10px] font-black text-[#842A3B] uppercase flex items-center gap-2">
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
