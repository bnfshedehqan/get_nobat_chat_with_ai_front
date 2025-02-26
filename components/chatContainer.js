"use client"
import MessageBox from "@/components/messageBox";
import AiMessage from "@/components/aiMessage";
import UserMessage from "@/components/userMessage";
import { useState } from "react";

const ChatContainer = () => {

  let [ data , setDta ] = useState([{
    roll : "ai",
    message : "سلام من هوش مصنوعی متین طب هستم"
  }])

  return (
    <div className="w-7/12 bg-sky-50 box-border  rounded-lg max-h-[500px] overflow-x-auto">
      {
        data.map((items,index) => {
          return(<div key={index}>
            { items.roll == "ai" ? <AiMessage text={items.message} /> : <UserMessage text={items.message} /> }
          </div>)
        })
      }
      
      <MessageBox />
    </div>
  );
};

export default ChatContainer;
