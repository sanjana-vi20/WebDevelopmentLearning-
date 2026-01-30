import React, { useState } from "react";
import { Mail, Phone, Save, Lock, User, X } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";
import api from '../../../config/Api'
import toast from "react-hot-toast";
const EditProfileModal = ({ onClose }) => {
  const { user ,setUser } = useAuth();
  const [formData, setFormData] = useState({
    fullName: user.fullName,
    email: user.email,
    mobnumber: user.mobnumber,
    gender:user.gender,
    dob : user.dob,
    address:user.address,
    city : user.city,
    pin : user.pin,
    documents: {
      uidai: user.documents.uidai,
      pan:user.documents.pan,
    },
    paymentDetails:{
      upi:user.paymentDetails.upi,
      account_number:user.paymentDetails.account_number,
      ifs_code:user.paymentDetails.ifs_code,
    },
    geoLocation:{
      lon:user.geoLocation.lon,
      lat:user.geoLocation.lat,
    }
  });

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fectchLocation = (e) =>{
    e.preventDefault();
    console.log();
    let result = navigator.geolocation();
    
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updated Successfully");

    try {
      const res = await api.put("/user/update", formData);
      toast.success(res.data.message);
      setUser(res.data.data);
      // setIsLoading(true); 
      sessionStorage.setItem("CravingUser" , JSON.stringify(res.data.data));
      // toast.success(res.data.message);
      onClose()
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown error");
    } 
  };

  return (
    <>
      <div className="fixed bg-black/80 inset-0 flex items-center justify-center">
        <div className="bg-white max-h-[55vh] w-5xl overflow-y-auto z-100">
          <div
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundColor: "var(--color-background)" }}
          >
            <button
              className="absolute right-0 top-0 text-white"
              onClick={() => onClose()}
            >
              <X />
            </button>
            <div
              className="w-full max-w-lg rounded-2xl shadow-xl p-8"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              {/* Header */}
              <h2
                className="text-3xl font-bold text-center mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                Edit Profile
              </h2>
              <p
                className="text-center mb-6"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Update your personal information
              </p>

              {/* Form */}
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Full Name
                  </label>
                  <div
                    className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2"
                    style={{ borderColor: "var(--color-accent-soft)" }}
                  >
                    <User size={18} style={{ color: "var(--color-primary)" }} />
                    <input
                      type="text"
                      value={formData.fullName}
                      className="w-full bg-transparent outline-none"
                      onChange={handleChange}
                      name="fullName"

                      style={{ color: "var(--color-text-primary)" }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Email Address
                  </label>
                  <div
                    className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2"
                    style={{ borderColor: "var(--color-accent-soft)" }}
                  >
                    <Mail size={18} style={{ color: "var(--color-primary)" }} />
                    <input
                      type="email"
                      value={formData.email}
                      className="w-full bg-transparent outline-none cursor-not-allowed"
                      disabled
                      onChange={handleChange}
                      style={{ color: "var(--color-text-primary)" }}
                      name="email"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Phone Number
                  </label>
                  <div
                    className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2"
                    style={{ borderColor: "var(--color-accent-soft)" }}
                  >
                    <Phone
                      size={18}
                      style={{ color: "var(--color-primary)" }}
                    />
                    <input
                      type="tel"
                      value={formData.mobnumber}
                      className="w-full bg-transparent outline-none"
                      onChange={handleChange}
                      name="mobnumber"
                      style={{ color: "var(--color-text-primary)" }}
                    />
                  </div>
                </div>
                {/* Phone */}
                <div>
                  <label
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Gender
                  </label>
                  <div
                    className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2"
                    style={{ borderColor: "var(--color-accent-soft)" }}
                  >
                    <Phone
                      size={18}
                      style={{ color: "var(--color-primary)" }}
                    />
                    <input
                      type="gender"
                      value={formData.gender}
                      className="w-full bg-transparent outline-none"
                      onChange={handleChange}
                      name="gender"
                      style={{ color: "var(--color-text-primary)" }}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    DOB
                  </label>
                  <div
                    className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2"
                    style={{ borderColor: "var(--color-accent-soft)" }}
                  >
                    <Phone
                      size={18}
                      style={{ color: "var(--color-primary)" }}
                    />
                    <input
                      type="date"
                      value={formData.dob}
                      className="w-full bg-transparent outline-none"
                      onChange={handleChange}
                      name="dob"
                      style={{ color: "var(--color-text-primary)" }}
                    />
                  </div>
                </div>

                {/* Phone */}
                {/* <div>
                  <label
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Phone Number
                  </label>
                  <div
                    className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2"
                    style={{ borderColor: "var(--color-accent-soft)" }}
                  >
                    <Phone
                      size={18}
                      style={{ color: "var(--color-primary)" }}
                    />
                    <input
                      type="tel"
                      value={formData.mobnumber}
                      className="w-full bg-transparent outline-none"
                      onChange={handleChange}
                      name="mobnumber"
                      style={{ color: "var(--color-text-primary)" }}
                    />
                  </div>
                </div> */}

                {/* Phone */}
               <div>
                 <div>
                  <label
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Latitude
                  </label>
                  <div
                    className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2"
                    style={{ borderColor: "var(--color-accent-soft)" }}
                  >
                    <Phone
                      size={18}
                      style={{ color: "var(--color-primary)" }}
                    />
                    <input
                      type="tel"
                      value={formData.geoLocation.lat}
                      className="w-full bg-transparent outline-none"
                      onChange={handleChange}
                      name="mobnumber"
                      style={{ color: "var(--color-text-primary)" }}
                    />
                  </div>
                </div>

                 <div>
                  <label
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Longitude
                  </label>
                  <div
                    className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2"
                    style={{ borderColor: "var(--color-accent-soft)" }}
                  >
                    <Phone
                      size={18}
                      style={{ color: "var(--color-primary)" }}
                    />
                    <input
                      type="lon"
                      value={formData.geoLocation.lon}
                      className="w-full bg-transparent outline-none"
                      onChange={handleChange}
                      name="lon"
                      style={{ color: "var(--color-text-primary)" }}
                    />
                  </div>
                </div>
               </div>

                {/* Password */}
                {/* <div>
                  <label
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    New Password
                  </label>
                  <div
                    className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2"
                    style={{ borderColor: "var(--color-accent-soft)" }}
                  >
                    <Lock size={18} style={{ color: "var(--color-primary)" }} />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full bg-transparent outline-none"
                      style={{ color: "var(--color-text-primary)" }}
                    />
                  </div>
                </div> */}

                {/* Save Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-lg py-3 font-semibold transition"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "#fff",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "var(--color-primary-hover)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "var(--color-primary)")
                  }
                >
                  <Save size={18} />
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfileModal;
