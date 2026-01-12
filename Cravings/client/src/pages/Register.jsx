import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobnumber: "",
    password: "",
    confirmPass: "",
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
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobnumber)) {
      Error.mobnumber = "Only Indian Mobile Number allowed";
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
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-()">
        <div className="m-auto bg-() shadow shadow-gray-400 p-5 mt-7 rounded-2xl w-4xl">
          <h1 className="text-center font-bold text-4xl">
            Student Registration
          </h1>
          <form onSubmit={handleSubmit} onReset={handleClear}>
            <div className=" relative m-10">
              <div className="space-y-8 p-6">
                <div className="flex flex-col justify-between">
                  {/* <label htmlFor="fullName">FullName :</label> */}
                  <input
                    type="text"
                    className="border rounded border-gray-300 p-2 w-2xl  focus:ring-1 focus:outline-none focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200"
                    name="fullname"
                    placeholder="Enter your fullname"
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
                  {/* <label htmlFor="fullName">Email :</label> */}
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
                  {/* <label htmlFor="fullName">Mobile Number :</label> */}
                  <input
                    type="number"
                    className="border rounded border-gray-300 p-2 w-2xl focus:ring-1 focus:outline-none focus:ring-blue-600 disabled:cursor-not-allowed  disabled:bg-gray-200"
                    name="mobNumber"
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
                <div className="flex justify-between">
                  {/* <label htmlFor="fullName">Password :</label> */}
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
                <div className="flex justify-between">
                  {/* <label htmlFor="fullName">confirm Password :</label> */}
                  <input
                    type="password"
                    className="border rounded border-gray-300 p-2 w-2xl focus:ring-1 focus:outline-none focus:ring-blue-600 disabled:cursor-not-allowed  disabled:bg-gray-200"
                    name="confirm-pass"
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
        </div>
      </div>
    </>
  );
}

export default Register;
