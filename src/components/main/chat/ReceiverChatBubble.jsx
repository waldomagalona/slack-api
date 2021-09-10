import React from 'react';

export default function ReceiverChatBubble(props){
  console.log(props.time)
  const time = props.time.replace('T', ' ');
  const displayTime = time.slice(0, time.length - 5);
    return(
        <div class="clearfix">
          <div
            class="bg-gray-300 w-auto float-left mx-4 my-2 p-2 rounded-lg clearfix"
          > 
            <div class="font-sans text-xs font-bold text-black-bold mt-2">
              {props.uid}
            </div>
            {props.message}
            <div class="font-sans text-xs font-sm text-black-bold mt-2">
              {displayTime}
            </div>

          </div>
        </div>
    )
}