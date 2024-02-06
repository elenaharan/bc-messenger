import React from "react";
import { MessageInput } from "@pubnub/react-chat-components";
import emojiData from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import ImagePreview from "./ImagePreview";

const ChatInput: React.FC = () => {
  return (
    <div className="mt-auto">
      <MessageInput
        fileUpload="image"
        filePreviewRenderer={ImagePreview}
        typingIndicator
        emojiPicker={<Picker data={emojiData} />}
      />
    </div>
  );
};

export default ChatInput;
