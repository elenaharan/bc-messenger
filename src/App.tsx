import "./App.css";
import React from "react";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import { Chat } from "@pubnub/react-chat-components";
import ChatRoom from "./Components/ChatRoom";
import { instantiatePubnub } from "./helpers";
import { currentChannel, theme } from "./config";

const pubnub = instantiatePubnub(PubNub);

function App() {
  return (
    <PubNubProvider client={pubnub}>
      <Chat currentChannel={currentChannel} theme={theme}>
        <ChatRoom />
      </Chat>
    </PubNubProvider>
  );
}

export default App;
