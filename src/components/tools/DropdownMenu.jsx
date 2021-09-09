import React, { useState } from "react";
import { set } from "react-hook-form";

export default function DropdownMenu(){
    const [option, setOption]= useState(false)
    const display = (option===true)?"absolute":"hidden"
    function toggleOption(){
        setOption(!option);
    }
return(
    <div className="relative">
    <div onClick={toggleOption}>
     <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="icon-dots-vertical w-8 h-8 mt-2 mr-2"
        >
          <path
            className="text-green-100 fill-current"
            fillRule="evenodd"
            d="M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
          />
        </svg>
</div>
   
    <div className={`${display} right-0 w-48 py-2 mt-2 bg-white bg-gray-100 rounded-md shadow-xl`}>
        <a href="#" className="block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
            Dropdown List 1
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
            Dropdown List 2
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
            Dropdown List 3
        </a>
    </div>
</div>
)
}
