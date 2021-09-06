import React from "react";

export default function ChatTextInput(){
    return(
        <textarea
      {...register("body")}
        name="body"
        className="flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none"
        rows="1"
        placeholder="Message..."
        style={{outline: "none"}}
      ></textarea>
    )
}