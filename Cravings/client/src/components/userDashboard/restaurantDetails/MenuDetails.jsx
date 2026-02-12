import React from "react";
import { BookOpen, ChevronRight } from "lucide-react";

const MenuDetails = ({ data }) => {
  const restaurant = data[0];
  const menuItems = restaurant?.myMenu || [];

  // 1. Data ko Cuisine ke hisaab se group karna (e.g., Italian, Indian)
  const groupedMenu = menuItems.reduce((acc, item) => {
    const category = item.cuisine || "Specialties";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div className="max-w-5xl mx-auto py-10 animate-in fade-in zoom-in-95 duration-700">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-block p-4 bg-[#842A3B]/5 rounded-full mb-2">
          <BookOpen className="text-[#842A3B]" size={32} />
        </div>
        <h2 className="text-4xl font-black text-slate-800 tracking-tighter italic">
          Our Culinary Story
        </h2>
        <div className="w-24 h-1 bg-[#842A3B] mx-auto rounded-full"></div>
      </div>

      {/* Menu Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {Object.entries(groupedMenu).map(([category, dishes]) => (
          <div key={category} className="space-y-8">
            {/* Category Title */}
            <h3 className="text-xl font-black text-[#842A3B] uppercase tracking-[0.2em] border-b border-slate-100 pb-4">
              {category}
            </h3>

            {/* Dishes in this Category */}
            <div className="space-y-6">
              {dishes.map((dish) => (
                <div key={dish._id} className="group cursor-pointer">
                  <div className="flex justify-between items-end mb-1">
                    <h4 className="text-lg font-bold text-slate-700 group-hover:text-[#842A3B] transition-colors flex items-center gap-2">
                      {dish.dishName}
                      {dish.type === "veg" ? (
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      )}
                    </h4>
                    <div className="flex-1 border-b border-dotted border-slate-300 mx-4 mb-1"></div>
                    <span className="font-black text-slate-900">₹{dish.price}</span>
                  </div>
                  <p className="text-sm text-slate-400 italic leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-20 p-8 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200 text-center">
        <p className="text-slate-500 font-medium">
          * Government taxes as applicable. We use only the freshest ingredients.
        </p>
      </div>
    </div>
  );
};

export default MenuDetails;