import React from 'react';

export default function SenderChatBubble(props){
  const time = props.time.replace('T', ' ');
  const displayTime = time.slice(0, time.length - 5);
    return(
        <div className="clearfix">
          <div
            className="bg-green-300 float-right w-auto mx-4 my-2 p-2 rounded-lg clearfix"
          >{props.message}
            <div class="font-sans text-xs font-sm text-black-bold mt-2">
              {displayTime}
            </div>
          </div>
        </div>
    )
}