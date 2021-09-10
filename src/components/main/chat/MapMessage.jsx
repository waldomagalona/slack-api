import React, { useEffect, useRef } from "react";
import SenderChatBubble from "./SenderChatBubble";
import ReceiverChatBubble from "./ReceiverChatBubble"

export default function MapMessage(props){
    const messages = props.messages;
    const headers = props.headers
    console.log(messages)

   
    return(
        <div className="overflow-scroll h-4/5 flex flex-col mt-20 mb-16">
        {messages && messages.map(message=>{
           
            const {body,sender,created_at} = message;
             const {uid}= sender;
             const chatBubble = (headers.uid === uid)?<SenderChatBubble message={body} time={created_at}/> : <ReceiverChatBubble message={body} uid={uid} time={created_at}/>
           return (
               <div>{chatBubble}</div>
           )
          
          })}
          </div>
    )
}