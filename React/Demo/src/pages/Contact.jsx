import React, { useState } from "react";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

    const [contactData, setContactData] = useState({
      fullName: "",
      email: "",
      message: "",
    });

  const handleChange = (e) => {
    const {name , value } = e.target;
    setContactData((prev) => ({...prev , [name]: value}));
  }

  console.log(contactData)

  const clearForm = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
  
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }

    clearForm();
  };
  return (
    <>
      <div className="m-5">
        <h1 className="text-center font-bold text-4xl">Contact Us</h1>
        <form action="" onReset={clearForm} onSubmit={handleSubmit}>
          <div className="flex flex-col content-between items-center gap-4 m-5">
            <div className="flex gap-3 justify-between">
              <label htmlFor="fullName">FullName:</label>
              <input
                type="text"
                name="fullName"
                value={contactData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="border p-2 rounded-2xl"
                required
              />
            </div>
            <div className="flex gap-3 justify-between">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border p-2 rounded-2xl "
                required
              />
            </div>

            <div className="flex gap-3">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id=""
                value={contactData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="border p-2 rounded-2xl"
                required
              ></textarea>
            </div>

            <div className="flex gap-3">
              <button type="submit" className="border px-9 rounded-2xl">
                {isLoading ? "Loading" : "Submit"}
              </button>
              <button type="reset" className="border px-9  rounded-2xl">
                Clear
              </button>
            </div>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center gap-4 m-5"></div>
      </div>
    </>
  );
}

export default Contact;
