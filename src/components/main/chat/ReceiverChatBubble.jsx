import React from 'react';

export default function ReceiverChatBubble(props){
    return(
        <div class="clearfix">
          <div
            class="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix"
          >{props.message}</div>
        </div>
    )
}