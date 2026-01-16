import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { IoPerson } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { BsSend } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";

function Login() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleClear = () => {
    setFormData({
     
      email: "",
     
      password: "",
    });
  };

  const validate = () => {
    let Error = {};
    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    setValidationError(Error);

    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the Form Correctly");
      return;
    }

    try {
      // console.log(formData);
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message);
      navigate("/user-dashboard")
      handleClear();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className=" p-6 h-full">

         <h1 className="text-center font-bold p-7 text-4xl text-(--text-primary)">
           Student Login
          </h1>
        <div className="m-auto bg-(--bg-light) shadow shadow-gray-400 p-5  rounded-2xl w-2xl">
         
          <form onSubmit={handleSubmit} onReset={handleClear}>
            <div className=" relative m-10">
              <div className="space-y-8 p-6">
                <div className="flex flex-col justify-between">
                  <label htmlFor="fullName" className="text-(--text-primary)">Email :</label>
                  <div className="flex border  border-gray-300 items-center px-3 rounded">
                    <IoMdPerson className="text-(--text-primary) text-2xl" />
                    <input
                    type="email"
                    className=" rounded p-2 w-2xl focus:ring-1 focus:outline-none focus:ring-blue-600 disabled:cursor-not-allowed  disabled:bg-gray-200"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  </div>
                   {validationError.email && (
                      <span className="text-xs text-red-500">
                        {validationError.email}
                      </span>
                    )}
                </div>
                
                <div className="flex flex-col justify-between">
                  <label htmlFor="fullName" className="text-(--text-primary)">Password :</label>
                  <div className="flex border  border-gray-300 items-center px-3 rounded">

                    <input
                    type="password"
                    className=" rounded  p-2 w-2xl focus:ring-1 focus:outline-none focus:ring-blue-600 disabled:cursor-not-allowed  disabled:bg-gray-200"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    value={formData.password}
                    disabled={isLoading}
                  />
                  </div>
                   
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4">
              <button
                disabled={isLoading}
                className="border flex items-center gap-2 px-7 py-2 bg-(--color-primary) hover:bg-(--color-primary-hover) trans text-amber-50 rounded-2xl transition duration-300 transform hover:scale-105  disabled:scale-100 disabled:cursor-not-allowed "
              >
                <BsSend />
                {isLoading ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
          <div className="ml-50 mt-8">Don't have any Account? <button className="text-blue-700" onClick={() => navigate("/register")}>Register</button></div>
        </div>
      </div>
    </>
  );
}

export default Login;
