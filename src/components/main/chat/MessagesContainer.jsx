import React, { useEffect, useState } from 'react'
import SenderChatBubble from './SenderChatBubble';

export default function MessagesContainer(props){
    const receiveMessages =props.messages;
    const [messages, setMessages]=useState([])
    
    const mapMessages=()=>{
        setMessages(receiveMessages)
    }
    useEffect(()=>{
       
        mapMessages();
        console.log(messages)
    })
    return(
        <div className="overflow-scroll h-4/5 flex flex-col mt-20 mb-16">
        {messages && messages.map(message=>{
            const {body} = message;
           return <SenderChatBubble message={body} />
          })}
          </div>
    )
}