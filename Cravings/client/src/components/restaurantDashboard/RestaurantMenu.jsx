import { useState } from "react";
import { Eye, Pencil, CheckCircle, Plus, Search } from "lucide-react";
import AddMenuModal from "./resturantModals/AddMenuModal";

export default function RestaurantMenu() {
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("all");
  const [openItemModal , setOpenItemModal] = useState(false);

  const menuItems = [
    {
      id: 1,
      dish: "Paneer Butter Masala",
      cuisine: "Indian",
      price: "₹250",
      available: true,
    },
    {
      id: 2,
      dish: "Veg Burger",
      cuisine: "Fast Food",
      price: "₹120",
      available: false,
    },
    {
      id: 3,
      dish: "White Sauce Pasta",
      cuisine: "Italian",
      price: "₹300",
      available: true,
    },
  ];

  const filteredMenu = menuItems.filter((item) => {
    const matchesSearch = item.dish
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCuisine = cuisine === "all" || item.cuisine === cuisine;
    return matchesSearch && matchesCuisine;
  });

  return (
    <div className="p-6 bg-[#ebddccc3] m-4 rounded-2xl min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
          Menu Dashboard
        </h2>

        {/* Add Button */}
        <button className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-primary-hover)]" onClick={() => setOpenItemModal(true)}>
          <Plus size={18} /> Add Item
        </button>
      </div>
      <div className="flex gap-5 p-5  w-full">
       
          {/* Search */}
          <div className="flex items-center bg-white  border rounded-lg w-20/30 px-3 py-2">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search dish..."
              className="ml-2  outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Cuisine Filter */}
         <div className="bg-white">
           <select
            className="border rounded-lg px-3 py-2"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          >
            <option value="all">All Cuisines</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Fast Food">Fast Food</option>
          </select>
         </div>
       
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-[var(--bg-accent)]">
            <tr className="text-[19px]">
              <th className="p-3">S.No</th>
              <th className="p-3">Dish Name</th>
              <th className="p-3">Cuisine</th>
              <th className="p-3">Price</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredMenu.length > 0 ? (
              filteredMenu.map((item, index) => (
                <tr key={item.id} className="border-b hover:bg-slate-50">
                  <td className="p-3 font-medium ps-6">{index + 1}</td>
                  <td className="p-3">{item.dish}</td>
                  <td className="p-3">{item.cuisine}</td>
                  <td className="p-3">{item.price}</td>
                  <td className="p-3">
                    <div className="flex justify-center gap-5">
                      <button className="p-2 flex items-center gap-2 rounded-lg border hover:bg-slate-100">
                        <Eye size={16} /> View
                      </button>
                      <button className="p-2 flex items-center gap-2 rounded-lg border hover:bg-slate-100">
                        <Pencil size={16} /> Edit
                      </button>
                      <button
                        className={`p-2 flex items-center gap-2 rounded-lg border ${item.available ? "text-green-600" : "text-gray-400"}`}
                      >
                        <CheckCircle size={16} /> Available
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-6 text-center text-gray-400">
                  No dishes found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {
        openItemModal && <AddMenuModal onClose={() => setOpenItemModal(false)}/>
      }
    </div>
  );
}
