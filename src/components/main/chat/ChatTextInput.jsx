import React,{useRef} from "react";

export default function ChatTextInput(){

    const inputEl = useRef("")

    function handleChange(){
        
    }

    return(
        <textarea
        onChange={handleChange}
        ref={inputEl}
        value={inputEl.current.value}
        name="body"
        className="flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none"
        rows="1"
        placeholder="Message..."
        style={{outline: "none"}}
      ></textarea>
    )
}