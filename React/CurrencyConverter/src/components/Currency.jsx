import React, { useState } from "react";
import CountryData from "../assets/CountryData.json";
import toast from "react-hot-toast";
import axios from "axios";

function Currency() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromAmt, setFromAmt] = useState("");
  const [toAmt, setToAmt] = useState("");
//   console.log(CountryData);

  const Convert = async () => {
    if (!from || !to || !fromAmt) {
      toast.error("Some field Missing");
      return;
    }

    try {
      const res = await axios.get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${
          from.split(" ")[1].toLowerCase
        }.json`
      );

      setToAmt(fromAmt*res.data[from.split(" ")[1].toLowerCase()][to.split(" ")[1].toLowerCase()])
    } catch(error) {

    }
  };

  return (
    <>
      <div className="bg-amber-50 h-screen p-5">
        <div className="bg-white border rounded shadow w-3xl mx-auto p-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex border rounded px-3 ">
              {from && (
                <img
                  src={`https://flagsapi.com/${from.split(" ")[0]}/flat/64.png`}
                  alt=""
                />
              )}
              <select
                name="from"
                id=""
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="p-2 focus:outline-none "
              >
                <option value="">--Select Country--</option>
                {CountryData.map((country, idx) => (
                  <option
                    value={country.CountryCode + " " + country.CurrencyCode}
                    key={idx}
                  >
                    {country.CountryName}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex border rounded px-3 ">
              {to && (
                <img
                  src={`https://flagsapi.com/${to.split(" ")[0]}/flat/64.png`}
                  alt=""
                />
              )}
              <select
                name="to"
                id=""
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="focus:outline-none p-2 rounded "
              >
                <option value="">--Select Country--</option>
                {CountryData.map((country, idx) => (
                  <option
                    value={country.CountryCode + " " + country.CurrencyCode}
                    key={idx}
                  >
                    {/* <img src={`https://flagsapi.com/${country.CountryCode}/flat/64.png`} alt="" /> */}
                    {country.CountryName}{" "}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mx-auto m-4 flex gap-4">
            <label htmlFor="fromAmt">Amount:</label>
            <input type="number" value={fromAmt} onChange={(e) =>{setFromAmt(e.target.value)}} className="border p-2 w-3xl rounded" />
          </div>

          <div className="flex justify-center m-4">
            <button className="bg-green-800 hover px-4 py-2 text-amber-50 rounded-2xl hover:shadow-md">
              Convert
            </button>
          </div>

          <hr />

          <div className="m-4">
            <label htmlFor="Converted">Converted Amount : {toAmt ? toAmt : "XXXXXX"} </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Currency;
