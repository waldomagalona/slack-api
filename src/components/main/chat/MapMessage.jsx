import React, { useEffect, useRef } from "react";
import SenderChatBubble from "./SenderChatBubble";
import ReceiverChatBubble from "./ReceiverChatBubble"

export default function MapMessage(props){
    const messages = props.messages;
    const headers = props.headers

   
    return(
        <div className="overflow-scroll h-4/5 flex flex-col mt-20 mb-16">
        {messages && messages.map(message=>{
           
            const {body,sender} = message;
             const {uid}= sender;
             const chatBubble = (headers.uid === uid)?<SenderChatBubble message={body} /> : <ReceiverChatBubble message={body} />
           return (
               <div>{chatBubble}</div>
           )
          
          })}
          </div>
    )
}