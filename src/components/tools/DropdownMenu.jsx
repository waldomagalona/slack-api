import React, { useState } from "react";
import { set } from "react-hook-form";
import ChannelDetailsModal from "./ChannelDetailsModal";

export default function DropdownMenu(props){
    // console.log(props.receiveData)
    const receiveData= props.receiveData
    const [option, setOption]= useState(false)
    const display = (option===true)?"absolute":"hidden"
    function toggleOption(){
        setOption(!option);
    }
    // console.log(receiveData)
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
   
    <ChannelDetailsModal 
    toggleOption={toggleOption}
     usersList={props.usersList}
    headers ={props.headers}
    receiveData={receiveData}
    display={display}/>
</div>
)
}
