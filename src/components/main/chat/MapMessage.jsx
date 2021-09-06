import React from "react";
import SenderChatBubble from "./SenderChatBubble";

export default function MapMessage(props){
    const messages = props.messages;
    return(
        <div className="overflow-scroll h-4/5 flex flex-col mt-20 mb-16">
        {messages && messages.map(message=>{
            const {body} = message;
           return <SenderChatBubble message={body} />
          })}
          </div>
    )
}