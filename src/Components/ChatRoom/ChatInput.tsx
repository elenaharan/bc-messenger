import React from "react";
import { MessageInput } from "@pubnub/react-chat-components";
import emojiData from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import ImagePreview from "./ImagePreview";

type ChatInputProps = {
  draftMessage?: string;
};

const ChatInput: React.FC<ChatInputProps> = ({ draftMessage }) => {
  return (
    <div className="mt-auto">
      <MessageInput
        fileUpload="image"
        filePreviewRenderer={ImagePreview}
        typingIndicator
        emojiPicker={<Picker data={emojiData} />}
        draftMessage={draftMessage}
      />
    </div>
  );
};

export default ChatInput;
