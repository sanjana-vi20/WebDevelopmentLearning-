import React, { useState } from 'react'
import {useAuth} from "../../context/AuthContext"
import EditProfileModal from './modals/EditProfileModal';
import { Mail, Phone, User } from 'lucide-react';
import { FaCamera } from "react-icons/fa";
import toast from 'react-hot-toast';
import profile from '../../assets/profile.jpg'

const UserProfile = () => {
  const [isEditModal , setIsEditModalOpen] = useState(false);
  const [photo , setPhoto] = useState("");
  const [preview , setPreview] = useState();
  const {user , setUser} = useAuth();

   const changePhoto = async () => {
    const form_Data = new FormData();

    form_Data.append("image", photo);
    form_Data.append("imageURL", preview);

    try {
      const res = await api.patch("/user/photo-update", form_Data);

      toast.success(res.data.message);
      setUser(res.data.data);
      sessionStorage.setItem("Cravings", JSON.stringify(res.data.data));
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  const handlePhotoChange= async(e) =>{

    const file = e.target.files[0];
    const newPhoto = URL.createObjectURL(file);
    setPreview(newPhoto);
     setTimeout(() => {
      setPhoto(file);
      changePhoto();
    }, 5000);
  };


  return (
    <>
    <div
      className="min-h-screen flex "
      style={{ backgroundColor: "var(--color-light)" }}
    >
      <div
        className="w-full max-w-md rounded-3xl shadow-xl p-8 flex flex-col items-center text-center"
        style={{ backgroundColor: "var(--color-light)" }}
      >
        {/* Avatar */}
        <div
          className="w-24 relative h-24 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          <img src={preview || user.photo.url || profile} alt="" className='object-cover' />
         <div className="absolute bottom-2 left-[75%] border bg-white p-2 rounded-full group flex gap-3">
                <label
                  htmlFor="imageUpload"
                  className="text-(--color-primary) group-hover:text-(--color-secondary)"
                >
                  <FaCamera />
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  className="hidden"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </div>
        </div>
         

        {/* Name */}
        <h2
          className="text-2xl font-semibold"
          style={{ color: "var(--color-text-primary)" }}
        >
          {user.fullName}
        </h2>

        <p
          className="text-sm mb-6"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Active User
        </p>

        {/* Info Section */}
        <div className="w-full space-y-4">
          {/* Email */}
          <div
            className="flex items-center gap-3 rounded-xl px-4 py-3"
            style={{ backgroundColor: "var(--color-background)" }}
          >
            <Mail size={18} style={{ color: "var(--color-primary)" }} />
            <span
              className="text-2xs font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              {user.email}
            </span>
          </div>

          {/* Phone */}
          <div
            className="flex items-center gap-3 rounded-xl px-4 py-3"
            style={{ backgroundColor: "var(--color-background)" }}
          >
            <Phone size={18} style={{ color: "var(--color-primary)" }} />
            <span
              className="text-2xs font-medium"
              style={{ color: "var(- -text-primary)" }}
            >
              {user.mobnumber}
            </span>
          </div>
        </div>

        {/* Footer Button */}
        <button
        onClick={() => setIsEditModalOpen(true)}
          className="mt-6 px-6 py-2 rounded-xl font-semibold transition"
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
          Edit Profile
        </button>
      </div>
    </div>

    {isEditModal && <EditProfileModal onClose={()=> setIsEditModalOpen(false)}/>}
    
    </>
  )
}

export default UserProfile