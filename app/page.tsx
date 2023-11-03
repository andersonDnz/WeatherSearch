"use client";

import React, { useState } from "react";

import Input from "./components/input";

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=fd0a2a4fd6424b1282d11930230111&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch {
        error;
      }
      {
        setError("Cidade não encontrada");
      }
    }
  };

  return (
    <div
      className="bg-cover bg-gradient-to-r 
  from-blue-500 to-blue-300 h-screen"
    >
      <div className="bg-white/25 w-full flex flex-col h-fit">
        {/* INPUT AND LOGO*/}
        <div className="flex flex-col md:flex-row justify-between items-center p-12 ">
          <Input handleSearch={handleSearch} setLocation={setLocation} />

          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 round-xl italic ">
            Weather
          </h1>
        </div>
        {data.current ? <div> {data.current.temp_f}</div> : null}
      </div>
    </div>
  );
};

export default Home;
