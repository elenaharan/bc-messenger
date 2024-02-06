import React from "react";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

export default function ChatRoom() {
  return (
    <div className="flex flex-col h-screen">
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
