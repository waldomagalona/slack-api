import React from 'react';

export default function SenderChatBubble(props){
    return(
        <div className="clearfix">
          <div
            className="bg-green-300 float-right w-auto mx-4 my-2 p-2 rounded-lg clearfix"
          >{props.message}</div>
        </div>
    )
}