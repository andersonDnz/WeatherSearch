"use client";

import React, { useState } from "react";

import Current from "../current";
import WeekForecast from "../weekForeCast";
import Details from "../details";
import Input from "../input";


<link rel="icon" href="/favicon.ico" sizes="any" />


const Navbar = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  const url = `http://api.weatherapi.com/v1/forecast.json?key=fd0a2a4fd6424b1282d11930230111&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    setButtonClicked(false)
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
      } catch (error) {
        setError("Cidade não encontrada");
        setData({});
      }
    }
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
    handleSearch({ key: "Enter", preventDefault: () => { } } as React.KeyboardEvent<HTMLInputElement>);
  };

  let content;

  if ((Object.keys(data).length === 0 && error === "") || buttonClicked) {

    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-bold mb-4">Bem vindo ao ClimaTempo!</h2>
        <p className="text-xl">Veja como está o clima da sua cidade!</p>
      </div>
    );
  } else if (error != "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <p>Cidade não encontrada</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
        <div>
          <Details data={data} />
        </div>
      </>
    );
  }

  return (
    <div
      className="bg-cover bg-gradient-to-r 
  from-blue-500 to-blue-300 h-fit "
    >
      <div className="bg-white/25 w-full flex flex-col h-fit">
        {/* INPUT AND LOGO*/}
        <div className="flex flex-col md:flex-row justify-between items-center p-12 ">

          <Input
            handleSearch={handleSearch}
            setLocation={setLocation}
            handleButtonClick={handleButtonClick}
          />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 round-xl italic ">
            WeatherSearch
          </h1>
        </div>
        {content}
      </div>
    </div>

  );
};

export default Navbar;
