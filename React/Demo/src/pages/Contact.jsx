import React, { useState } from "react";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    message: "",
    religion: "",
    gender: "",
    skill: [],
  });

  const handleChange = (e) => {
    let temp = contactData.skill;
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        temp.push(value);
        setContactData((prev) => ({ ...prev, [name]: temp }));
      } else {
        let skills = Object.values(temp).filter((element) => element !== value);
        setContactData((prev) => ({ ...prev, [name]: skills }));
      }
    } else {
      setContactData((prev) => ({ ...prev, [name]: value }));
    }
    console.log(contactData);
  };

  // console.log(contactData);

  const clearForm = () => {
   setContactData({
    fullName:"",
    email: "",
    message: "",
    religion: "",
    gender: "",
    skill: [],

   });

    // setContactData("");
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

            <div className="flex gap-3 justify-between">
              <label htmlFor="religion">Religion</label>
              <select
                name="religion"
                id=""
                className="border px-3 py-1"
                onChange={handleChange}
                value={contactData.religion}

              >
                <option value="hindu">Hindu</option>
                <option value="christian">Christian</option>
                <option value="sikkism">sikkism</option>
                <option value="buddhu">Buddh</option>
              </select>
            </div>

            <div className="flex gap-3 justify-between">
              <label htmlFor="gender">Gender</label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={contactData.gender === "male"}

              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={contactData.gender === "female"}
              />{" "}
              female
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
                checked={contactData.gender === "other"}
              />{" "}
              others
            </div>

            <div className="flex gap-3 justify-between">
              <label htmlFor="course">Course</label>
              <input
                type="checkbox"
                name="skill"
                value="html"
                onChange={handleChange}
                checked={Object.values(contactData.skill).includes("html")}
              />{" "}
              Html
              <input
                type="checkbox"
                name="skill"
                value="CSS"
                onChange={handleChange}
                checked={Object.values(contactData.skill).includes("CSS")}
              />{" "}
              Css
              <input
                type="checkbox"
                name="skill"
                value="js"
                onChange={handleChange}
                checked={Object.values(contactData.skill).includes("js")}
              />{" "}
              js
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
