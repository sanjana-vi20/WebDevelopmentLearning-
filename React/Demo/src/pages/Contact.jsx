import React, { useState } from "react";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const clearForm = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

   const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
      
        const data = {
          fullName,
          email,
          message,
        };

        console.log(data);

    } catch (error) {
      console.log(error.message);
    }finally{
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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
