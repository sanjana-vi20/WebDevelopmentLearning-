import React, { useState } from "react";
import {
  X,
  Plus,
  Trash2,
  Utensils,
  IndianRupee,
  Camera,
  Users,
  Leaf,
  Drumstick,
  Globe,
  ChevronDown,
  Sparkles,
  Upload,
} from "lucide-react";
import toast from "react-hot-toast";

const AddMenuModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    dishName: "",
    cuisine: "",
    description: "",
    price: "",
    servingsize: "",
    availability: "",
    type: "Veg",
  });

  const [photo , setPhoto] = useState([]);
  const [preview , setPreview] = useState([])
  const [loading  ,setloading] = useState(false);


  const UploadPhoto = () =>{

    if(photo.length === 0)
    {
      toast.error("Kam se kam ek photo upload karo.");
    }

    setloading(true);

    const form_data = new FormData();
    photo.forEach((file) => {
      form_data.append("image" , file);
    })
  }

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    console.log(e);
    
    if (photo.length + files.length > 3) {
      toast.error("Only 3 photos are Allowed")
      return;
    }

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreview((prev) => {[... prev,...newPreviews]});
    setPhoto(prev => [...prev, ...files]);
    UploadPhoto();
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();


  } 

  const handleOnchange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-950/60 backdrop-blur-xl">
      <div className="bg-white w-full max-w-2xl rounded-[3.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        {/* --- Premium Header --- */}
        <div className="bg-[#842A3B] px-12 py-10 flex justify-between items-center relative">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/20 shadow-inner">
              <Sparkles
                size={28}
                className="text-[#F5DAA7]"
                strokeWidth={1.5}
              />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-tighter leading-none">
                Add Culinary Art
              </h2>
              <p className="text-[#F5DAA7] text-[10px] font-bold uppercase tracking-[0.3em] mt-2 opacity-80">
                Dish Configuration
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-3 bg-black/10 hover:bg-black/20 rounded-full text-white transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-12 max-h-[70vh] overflow-y-auto custom-scrollbar bg-gradient-to-b from-white to-slate-50">
          <form className="space-y-12">
            {/* --- Photo Gallery Section --- */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <label className="font-bold gap-2 text-[20px] flex items-center">
                  <Camera />
                  Gallery Selection
                </label>
                <span className=" font-bold text-[#842A3B]/50 ">
                  {/* {formData.image.length} 0/ 3 Uploaded */}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {preview.map((url, index) => (
                  <div
                    key={index}
                    className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-lg group border-4 border-white"
                  >
                    <img
                      src={url}
                      alt="preview"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <button
                      type="button"
                      className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={24} className="text-white" />
                    </button>
                  </div>
                ))} 
                {/* {formData.image.length < 3 && ( */}
                  <label className="aspect-[3/4] rounded-[2.5rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-[#842A3B] hover:bg-[#842A3B]/5 transition-all group">
                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-[#842A3B] group-hover:scale-110 transition-all">
                      <Plus size={24} strokeWidth={3} />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Add Media
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      multiple
                      onChange={handlePhotoUpload}
                    />
                  </label>
                {/* )} */}
              </div>
            </div>

            {/* --- Typography Focused Inputs --- */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-x-12 gap-y-10">
              <div className="group border-b-2 border-slate-100 focus-within:border-[#842A3B] transition-colors pb-2">
                <label className="flex gap-2 items-center font-bold  block mb-1">
                  <Utensils size={20} />
                  Dish Name
                </label>
                <input
                  type="text"
                  placeholder="Truffle Infused Pasta"
                  className="w-full bg-transparent outline-none text-lg font-black text-slate-800 placeholder:text-slate-200"
                  onChange={handleOnchange}
                  value={formData.dishName}
                />
              </div>

              <div className="group border-b-2 border-slate-100 focus-within:border-[#842A3B] transition-colors pb-2">
                <label className="flex gap-2 items-center font-bold block mb-1">
                  <IndianRupee />
                  Price (INR)
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-slate-300 font-black text-lg">₹</span>
                  <input
                    type="number"
                    placeholder="499.00"
                    className="w-full bg-transparent outline-none text-lg font-black text-slate-800 placeholder:text-slate-200"
                    onChange={handleOnchange}
                  value={formData.price}
                  />
                </div>
              </div>
            </div>

            {/* --- Selection Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-4">
                <label className=" font-bold  ml-1">Type</label>
                <div className="flex gap-2  bg-slate-100/50 p-1.5 rounded-2xl border border-slate-100 shadow-inner">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: "Veg" })}
                    className={`flex-1 py-3 rounded-xl flex items-center gap-2 p-2 text-[10px] font-black tracking-widest transition-all ${formData.type === "Veg" ? "bg-white text-green-600 shadow-md" : "text-slate-400 uppercase"}`}
                    onChange={handleOnchange}
                  value={formData.type}
                  
                  >
                    <Leaf />
                    VEG
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, type: "Non-Veg" })
                    }
                    className={`flex-1 py-3 rounded-xl text-[10px] font-black flex p-2 items-center gap-2 tracking-widest transition-all ${formData.type === "Non-Veg" ? "bg-white text-red-600 shadow-md" : "text-slate-400 uppercase"}`}
                    onChange={handleOnchange}
                  value={formData.type}
                  >
                    <Drumstick />
                    NON-VEG
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-2 font-bold  ml-1">
                  <Globe />
                  Cuisine
                </label>
                <div className="relative">
                  <select className="w-full bg-slate-100/50 px-5 py-4 rounded-2xl border border-slate-100  font-bold text-slate-700 appearance-none outline-none cursor-pointer" onChange={handleOnchange}
                  value={formData.cuisine}>
                    <option>Mediterranean</option>
                    <option>Pan Asian</option>
                    <option>Royal Indian</option>
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className=" flex items-center gap-2 font-bold ml-1">
                  <Users />
                  Serves
                </label>
                <input
                  type="text"
                  placeholder="2 Adults"
                  className="w-full bg-slate-100/50 px-5 py-4 rounded-2xl border border-slate-100  font-bold text-slate-700 outline-none"
                onChange={handleOnchange}
                  value={formData.servingsize}
                />
              </div>
            </div>

            {/* --- Action Buttons --- */}
            <div className="flex items-center gap-6 pt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-8 bg-[#842A3B] text-white py-4 rounded-4xl font-black hover:text-slate-600 transition-colors"
              >
                Discard
              </button>
              <button
                type="submit"
                className="flex-1 bg-[#842A3B] text-white py-6 rounded-[2rem]  font-black shadow-[0_20px_40px_-10px_rgba(132,42,59,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(132,42,59,0.5)] hover:-translate-y-1 active:scale-[0.98] transition-all"
              >
                Finalize Entry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMenuModal;
