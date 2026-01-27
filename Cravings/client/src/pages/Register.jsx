import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { IoPerson } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobnumber: "",
    password: "",
    confirmPass: "",
    role: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleClear = () => {
    setFormData({
      fullName: "",
      email: "",
      mobnumber: "",
      password: "",
      confirmPass: "",
      role: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName = "Only Contain A-Z , a-z and space";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email,
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobnumber)) {
      Error.mobnumber = "Only Indian Mobile Number allowed";
    }
    if (!formData.role) {
      Error.role = "Please choose anyone";
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
      const res = await api.post("/auth/register", formData);
      toast.success(res.data.message);
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
      <div className="bg-(--bg-accent)">
        <h1 className="text-center font-bold p-7 text-4xl text-(--text-primary)">
          Student Registration
        </h1>
        <div className="m-auto bg-(--bg-light) shadow shadow-gray-400 p-5  rounded-2xl w-4xl">
          <form onSubmit={handleSubmit} onReset={handleClear}>
            <div className=" relative m-10">
              <div className="space-y-8 p-6">
                <div className="flex justify-between"> 
                  <label htmlFor="">I am</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="role"
                      id="manager"
                      checked={formData.role === "manager"}
                      value={"manager"}
                      onChange={handleChange}
                    />
                    <label htmlFor="manager">Restaurant Manager</label>
                  </div>
                   <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="role"
                      id="partner"
                      checked={formData.role === "partner"}
                      value={"partner"}
                      onChange={handleChange}
                    />
                    <label htmlFor="manager">Delivery Partner</label>
                  </div>
                   <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="role"
                      id="customer"
                      checked={formData.role === "customer"}
                      value={"customer"}
                      onChange={handleChange}
                    />
                    <label htmlFor="partner">Customer</label>
                  </div>
                  {validationError.role && (
                    <span className="text-xs text-red-500">
                      {validationError.role}
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-between">
                  <label htmlFor="fullName" className="text-(--text-primary)">
                    FullName :
                  </label>
                  <input
                    type="text"
                    className="border rounded border-gray-300 p-2 w-2xl bg-(--text-secondary) focus:ring-1 focus:outline-none focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200"
                    name="fullName"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    value={formData.fullName}
                    disabled={isLoading}
                  />
                  {validationError.fullName && (
                    <span className="text-xs text-red-500">
                      {validationError.fullName}
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-between">
                  <label htmlFor="fullName" className="text-(--text-primary)">
                    Email :
                  </label>
                  <input
                    type="email"
                    className="border rounded border-gray-300 p-2 w-2xl focus:ring-1 focus:outline-none focus:ring-blue-600 disabled:cursor-not-allowed  disabled:bg-gray-200"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {validationError.email && (
                    <span className="text-xs text-red-500">
                      {validationError.email}
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-between">
                  <label htmlFor="fullName" className="text-(--text-primary)">
                    Mobile Number :
                  </label>
                  <input
                    type="number"
                    className="border rounded border-gray-300 p-2 w-2xl focus:ring-1 focus:outline-none focus:ring-blue-600 disabled:cursor-not-allowed  disabled:bg-gray-200"
                    name="mobnumber"
                    placeholder="Enter your Phone Number"
                    onChange={handleChange}
                    value={formData.mobnumber}
                    disabled={isLoading}
                  />
                  {validationError.mobnumber && (
                    <span className="text-xs text-red-500">
                      {validationError.mobnumber}
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-between">
                  <label htmlFor="fullName" className="text-(--text-primary)">
                    Password :
                  </label>
                  <input
                    type="password"
                    className="border rounded border-gray-300 p-2 w-2xl focus:ring-1 focus:outline-none focus:ring-blue-600 disabled:cursor-not-allowed  disabled:bg-gray-200"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    value={formData.password}
                    disabled={isLoading}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label htmlFor="fullName" className="text-(--text-primary)">
                    Confirm Password :
                  </label>
                  <input
                    type="password"
                    className="border rounded border-gray-300 p-2 w-2xl focus:ring-1 focus:outline-none focus:ring-blue-600 disabled:cursor-not-allowed  disabled:bg-gray-200"
                    name="confirmPass"
                    placeholder="Confirm Your Password"
                    onChange={handleChange}
                    value={formData.confirmPass}
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                disabled={isLoading}
                className="border px-7 py-2 bg-(--color-primary) hover:bg-(--color-primary-hover) trans text-amber-50 rounded-2xl transition duration-300 transform hover:scale-105  disabled:scale-100 disabled:cursor-not-allowed "
              >
                Clear Form
              </button>
              <button
                disabled={isLoading}
                className="border px-7 py-2 bg-(--color-primary) hover:bg-(--color-primary-hover) trans text-amber-50 rounded-2xl transition duration-300 transform hover:scale-105  disabled:scale-100 disabled:cursor-not-allowed "
              >
                {isLoading ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
          <div className="ml-80 mt-8">
            Already have Account?
            <button
              className="text-blue-700"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
