import React, { useState } from 'react'

function Login() {

    const [loginData, setLogin] = useState({
        fullName: "",
        password:"",
    })

    const handleChange = (e) =>
    {
        const {name, value} = e.target;

        setLogin((prev) => ({...prev , [name] : value}));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(loginData);
    }


  return (
    <>
     <h1 className="text-3xl font-bold text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="border flex flex-col gap-5 justify-between items-center m-5 p-5">
          <div className="flex gap-6">
            <label htmlFor="fullName">FullName:</label>
            <input
              type="text"
              name="fullName"
              className="border p-2 rounded-2xl"
              value={loginData.fullName}
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
              value={loginData.password}
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
  )
}

export default Login