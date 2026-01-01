import React, { useState } from "react";

function SignUp() {
  const [signupData, setSignup] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPass: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setSignup((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(signupData);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-5">SignUp</h1>
      <form onSubmit={handleSubmit}>
        <div className="border flex flex-col gap-5 w-2xl rounded-2xl m-auto items-center mt-5  mb-5 p-5">
          <div className="flex gap-6">
            <label htmlFor="fullName">FullName</label>
            <input
              type="text"
              name="fullName"
              className="border p-2 rounded-2xl shadow-1xl hover:shadow-blue-600"
              value={signupData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex gap-10 ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="border p-2 rounded-2xl"
              value={signupData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex gap-6">
            <label htmlFor="phoneNumber">Mob no.</label>
            <input
              type="number"
              name="phoneNumber"
              className="border p-2 rounded-2xl"
              value={signupData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex gap-6">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="border p-2 rounded-2xl"
              value={signupData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex gap-6">
            <label htmlFor="confirmPass">Confirm Password</label>
            <input
              type="password"
              name="confirmPass"
              className="border p-2 rounded-2xl"
              value={signupData.confirmPass}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <button
              className="border px-5 bg-green-800 text-amber-50  rounded-2xl py-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
