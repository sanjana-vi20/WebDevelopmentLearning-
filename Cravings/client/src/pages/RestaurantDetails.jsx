import React, { useState } from 'react';
import { MapPin, Clock, Star, Heart, Share2, Camera, Navigation, Phone } from 'lucide-react';

const RestaurantDetails = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a] px-40">
      
      {/* HEADER & INFO (Inspired by image_000801.jpg) */}
      <section className="pt-24 pb-8 container mx-auto px-6">
        <nav className="flex gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-tight mb-6">
          <span>Home</span> / <span>Bhopal</span> / <span className="text-[#842A3B]">Restaurant Profile</span>
        </nav>

        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-black tracking-tighter leading-none text-gray-900">Tanishk Da Dhaba</h1>
            <p className="text-sm font-medium text-gray-500">North Indian • Mughlai • Gourmet</p>
            <div className="flex items-center gap-4 pt-2">
               <span className="bg-[#842A3B]/10 text-[#842A3B] px-3 py-1 rounded-lg text-[10px] font-black uppercase">Open Now</span>
               <span className="text-[10px] font-bold text-gray-400">11:00 AM – 11:30 PM</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center gap-3 bg-green-600 text-white p-3 rounded-xl shadow-lg shadow-green-600/20">
              <span className="text-2xl font-black">4.9</span>
              <div className="leading-none uppercase font-black text-[8px]">Dining <br/> Ratings</div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
           <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-100 rounded-2xl font-black text-[10px] uppercase hover:border-[#842A3B] transition-all"><Navigation size={14}/> Direction</button>
           <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#842A3B] text-[#842A3B] rounded-2xl font-black text-[10px] uppercase hover:bg-[#842A3B] hover:text-white transition-all shadow-lg">Book a Table</button>
        </div>
      </section>

      {/* GALLERY (Ditto image_000801.jpg) */}
      <section className="container mx-auto px-6 mb-12">
        <div className="grid grid-cols-12 gap-2 h-[450px]">
          <div className="col-span-6 overflow-hidden rounded-l-[3rem]">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Main" />
          </div>
          <div className="col-span-3 grid grid-rows-2 gap-2">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Chef" />
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400" className="w-full h-full object-cover " alt="Interior" />
          </div>
          <div className="col-span-3 relative overflow-hidden rounded-r-[3rem]">
            <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=400" className="w-full h-full object-cover" alt="Food" />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center font-black text-white text-[10px] uppercase tracking-widest cursor-pointer">
              <Camera size={20} className="mr-2"/> View Gallery
            </div>
          </div>
        </div>
      </section>

      {/* TABS & CONTENT */}
      <section className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-6 flex gap-10">
          {['Overview', 'Order Online', 'Reviews', 'Photos'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-[11px] font-black uppercase tracking-tight transition-all relative ${
                activeTab === tab ? 'text-[#842A3B]' : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#842A3B] rounded-full"></div>}
            </button>
          ))}
        </div>
      </section>

      {/* ABOUT (Inspired by image_412819.jpg styling) */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm">
             <h3 className="text-2xl font-black tracking-tighter mb-4 text-gray-900 uppercase">About this place</h3>
             <p className="text-gray-500 font-medium leading-relaxed">
               Experience the authentic soul of Bhopal at Tanishk Da Dhaba. Using traditional wood-fired techniques, 
               we serve gourmet Indian cuisine that is the talk of the town.
             </p>
          </div>
          <div className="lg:col-span-4 bg-[#1a1a1a] text-white p-10 rounded-[4rem] shadow-2xl">
             <h4 className="text-lg font-black uppercase tracking-tight text-[#F5DAA7] mb-6">Contact Us</h4>
             <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#842A3B] rounded-2xl flex items-center justify-center"><Phone size={24}/></div>
                <p className="text-xl font-black">+91 6268797783</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;