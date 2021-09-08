import axios from 'axios';
import React, { useEffect, useState, useRef} from 'react';
import MessagesContainer from './MessagesContainer';
import SenderChatBubble from './SenderChatBubble';
import { useForm } from 'react-hook-form';
import ChatTextInput from './ChatTextInput';

export default function ChatBox(props){
  

  const headers=props.headers;
 
  const [receiveBody, setReceiveBody] =useState({body:""})
  const receiverData = localStorage.getItem("receiver");
  const receiveData =JSON.parse(receiverData)
  const [data, setData]= useState({body:""})
    
   const receivedId =receiveData?receiveData['receiver_id']:""
    useEffect(()=>{
      
      if(receiveData){
        console.log("useEffect in chatbox ran")
        const {receiver_id, receiver_class, receiver_email }=receiveData;
        setData(prevValue=>{
          return {...prevValue,  
            receiver_id: receiver_id,
            receiver_class: receiver_class,
            receiver_email: receiver_email}
        })
      }
     
    },[])  
  

    function handleChange(event){
      
      const{name, value} =event.target
        setData(prevValue=>{
          return{...prevValue,
         [name]:value}
        })
    }

    function handleClick(event){
      event.preventDefault();
      console.log("handleclick", data)
      axios.post("http://206.189.91.54/api/v1/messages",data, {
        headers: headers
      })
      .then(response=>{
        console.log(response)
      })
      .catch(error=>{
        console.log(error)
      })
    setData(prevValue=>{
      return {...prevValue,body:""}
    })
    }
    return(
        <div >
    <div className="h-screen" style={{overscrollBehavior: "none"}}>
      <div
        className="fixed w-1/2 bg-gray-900 h-16 pt-2 text-white flex justify-between shadow-md"
        style={{top:"0px", overscrolBehavior: "none"}}
      >
        {/* <!-- back button --> */}
        <router-link to="/chat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-12 h-12 my-1 text-green-100 ml-2"
          >
            <path
              className="text-green-100 fill-current"
              d="M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z"
            />
          </svg>
        </router-link>
        <div className="my-3 text-green-100 font-bold text-lg tracking-wide">{data?data['receiver_email']:""}</div>
        {/* <!-- 3 dots --> */}
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
      <MessagesContainer 
      data={data}
      headers={headers}
      />

    </div>

    <form 
     className="fixed w-1/2 flex justify-between bg-gray-900" style={{bottom: "0px"}}>

     {/* chat text input area start*/}
     <textarea
        onChange={handleChange}
        value={data.body}
        name="body"
        className="flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none"
        rows="1"
        placeholder="Message..."
        style={{outline: "none"}}
      ></textarea>
       {/* chat text input area end*/}
      <button 
      onClick ={handleClick}
      className="m-2" style={{outline: "none"}}>
        <svg
          className="svg-inline--fa text-green-400 fa-paper-plane fa-w-16 w-12 h-12 py-2 mr-2"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="paper-plane"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
          />
        </svg>
      </button>
      
    </form>
  </div>
    )
}