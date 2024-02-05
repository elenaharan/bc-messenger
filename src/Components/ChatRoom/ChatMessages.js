import { MessageList } from "@pubnub/react-chat-components";

import emojiData from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function ChatMessages() {
  return (
    <div className="flex-1 overflow-y-auto">
      <MessageList
        enableReactions
        reactionsPicker={<Picker data={emojiData} />}
        fetchMessages={3}
      />
    </div>
  );
}
