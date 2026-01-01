import React, { useState } from "react";
import toast from "react-hot-toast";

function Registration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobnumber: "",
    dob: "",
    qualification: "",
    percentage: "",
    course: "",
    timing: "",
    address: "",
    city: "",
    pincode: "",
    guardianName: "",
    guardiancontact: "",
    source: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleClear = () => {
    setFormData({
      fullName: "",
      email: "",
      mobnumber: "",
      dob: "",
      qualification: "",
      percentage: "",
      course: "",
      timing: "",
      address: "",
      city: "",
      pincode: "",
      guardianName: "",
      guardiancontact: "",
      source: "",
    });
  };

  const validate = () =>{

     
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      return;
    }
    try {
      console.log(formData);
      toast.success("Registration Successfull");
      handleClear();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      isLoading(false);
    }
  };

  return (
    <>
      <>
        <div className="m-5 shadow shadow-gray-400 p-5 rounded-2xl">
          <h1 className="text-center font-bold text-4xl">
            Student Registration
          </h1>
          <form action="">
            <div className="border border-black p-4 rounded-2xl relative m-10">
              <span className="absolute text-2xl px-1 bg-white text-blue-600 -top-4">
                Personal Information
              </span>

              <div className="space-y-8 p-6 pl-20">
                <div className="flex justify-between">
                  <label htmlFor="fullName">FullName :</label>
                  <input
                    type="text"
                    className="border rounded border-gray-300 p-2 w-5xl focus:ring-1 focus:outline-none focus:ring-blue-600"
                    name="fullname"
                  />
                </div>
                <div className="flex justify-between">
                  <label htmlFor="fullName">Email :</label>
                  <input
                    type="email"
                    className="border rounded border-gray-300 p-2 w-5xl"
                    name="email"
                  />
                </div>
                <div className="flex justify-between">
                  <label htmlFor="fullName">Mobile Number :</label>
                  <input
                    type="number"
                    className="border rounded border-gray-300 p-2 w-5xl"
                    name="mobNumber"
                  />
                </div>
                <div className="flex justify-between">
                  <label htmlFor="fullName">DOB :</label>
                  <input
                    type="date"
                    className="border rounded border-gray-300 p-2 w-5xl"
                    name="dob"
                  />
                </div>
              </div>
            </div>

            <div className="border border-black p-4 rounded-2xl relative m-10">
              <span className="absolute text-2xl px-1 bg-white text-blue-600 -top-4">
                Acadamic Details
              </span>

              <div className="flex flex-col gap-8 p-6 pl-20">
                <div className="flex justify-between">
                  <label htmlFor="fullName">Qualification :</label>
                  <select
                    name="qualification"
                    id=""
                    className="border rounded border-gray-300 p-2 w-5xl"
                  >
                    <option value="">--Select--</option>
                    <option value="Secondary Schooling">
                      Secondary Schooling
                    </option>
                    <option value=" Senior Secondary Schooling">
                      Senior Secondary Schooling
                    </option>
                    <option value="Graduation">Graduation</option>
                    <option value="Post Graduation">Post Graduation</option>
                    <option value="Phd">PHD</option>
                  </select>
                </div>
                <div className="flex justify-between">
                  <label htmlFor="fullName">Percentage/Grade :</label>
                  <input
                    type="text"
                    className="border rounded border-gray-300 p-2 w-5xl"
                    name="percentage"
                  />
                </div>
              </div>
            </div>

            <div className="border border-black p-4 rounded-2xl relative m-10">
              <span className="absolute text-2xl px-1 bg-white text-blue-600 -top-4">
                Course Details
              </span>

              <div className="flex flex-col gap-8 p-6 pl-20">
                <div className="flex justify-between">
                  <label htmlFor="fullName">Prefered Course :</label>
                  <select
                    name="course"
                    id=""
                    className="border rounded border-gray-300 p-2 w-5xl"
                  >
                    <option value="">--Select--</option>
                    <option value="Secondary Schooling">
                      Secondary Schooling
                    </option>
                    <option value=" Senior Secondary Schooling">
                      Senior Secondary Schooling
                    </option>
                    <option value="Graduation">Graduation</option>
                    <option value="Post Graduation">Post Graduation</option>
                    <option value="Phd">PHD</option>
                  </select>
                </div>
                <div className="flex justify-between">
                  <label htmlFor="fullName">Batch Timing :</label>
                  <div className="flex gap-6 float-start">
                    <div>
                      {" "}
                      <input type="radio" name="timing" value="morning" />
                      <span className="pl-1.5">Morning</span>
                    </div>
                    <div>
                      {" "}
                      <input type="radio" name="timing" value="evening" />
                      <span className="pl-1.5">Evening</span>
                    </div>
                    <div>
                      {" "}
                      <input type="radio" value="afternoon" name="timing" />
                      <span className="pl-1.5">Afternoon</span>
                    </div>
                    <div>
                      {" "}
                      <input type="radio" name="timing" value="weekend" />
                      <span className="pl-1.5">Weekend</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-black p-4 rounded-2xl relative m-10">
              <span className="absolute text-2xl px-1 bg-white text-blue-600 -top-4">
                Address Details
              </span>

              <div className="flex flex-col gap-8 p-6 pl-20">
                <div className="flex justify-between">
                  <label htmlFor="fullName">Address :</label>
                  <textarea
                    className="border rounded border-gray-300 p-2 w-5xl"
                    name="address"
                  />
                </div>
                <div className="flex justify-between">
                  <label htmlFor="fullName">City :</label>
                  <input
                    type="email"
                    className="border rounded border-gray-300 p-2 w-5xl"
                    name="city"
                  />
                </div>
                <div className="flex justify-between">
                  <label htmlFor="fullName">Pincode :</label>
                  <input
                    type="number"
                    className="border rounded border-gray-300 p-2 w-5xl"
                    name="pincode"
                  />
                </div>
              </div>
            </div>

            <div className="border border-black p-4 rounded-2xl relative m-10">
              <span className="absolute text-2xl px-1 bg-white text-blue-600 -top-4">
                Guardian Details
              </span>

              <div className="flex flex-col gap-8 p-6 pl-20">
                <div className="flex justify-between">
                  <label htmlFor="fullName">Guardian name :</label>
                  <input
                    type="text"
                    className="border rounded border-gray-300 p-2 w-5xl"
                    name="guardianName"
                  />
                </div>
                <div className="flex justify-between">
                  <label htmlFor="fullName">Guardian contact :</label>
                  <input
                    type="email"
                    className="border rounded border-gray-300 p-2 w-5xl"
                    name="guardianContact"
                  />
                </div>
              </div>
            </div>

            <div className="border border-black p-4 rounded-2xl relative m-10">
              <span className="absolute text-2xl px-1 bg-white text-blue-600 -top-4">
                Additional Information
              </span>

              <div className="flex flex-col gap-8 p-6 pl-20">
                <label htmlFor="fullName">How did you hear About us?</label>
                <select
                  name="course"
                  id=""
                  className="border rounded border-gray-300 p-2 w-5xl"
                >
                  <option value="">--Select--</option>
                  <option value="Secondary Schooling">
                    Secondary Schooling
                  </option>
                  <option value=" Senior Secondary Schooling">
                    Senior Secondary Schooling
                  </option>
                  <option value="Graduation">Graduation</option>
                  <option value="Post Graduation">Post Graduation</option>
                  <option value="Phd">PHD</option>
                </select>
              </div>
            </div>

            <div className="m-auto">
              <button className="border px-5 py-2 bg-green-600 text-amber-50 rounded-2xl ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    </>
  );
}

export default Registration;
