"use client"
import React from 'react'
import { PiCheckBold } from "react-icons/pi";
import { useState } from "react";


const TopHeader = () => {
  
  const [language, setLanguage] = useState("en");
  
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div className='w-[1920px] h-[45px] bg-[#272343] text-white px-[300px] py-[14px] '>
      
      {/* left side */}
      <div className="flex items-center gap-2">
      <PiCheckBold className=''/>
      <p>Free shipping on all orders over $50</p>
      </div>

      {/* right side */}
      <div className="">
        <select
          value={language}
          onChange={handleLanguageChange}
          className="bg-gray-700 text-white p-2 rounded-md"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          {/* Add more languages as needed */}
        </select>

        <Lin
      </div>
     
    </div>
  )
}

export default TopHeader