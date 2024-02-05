import { userId } from "./config";

export function instantiatePubnub(PubNub) {
  const pubnub = new PubNub({
    publishKey: process.env.REACT_APP_PUB_KEY,
    subscribeKey: process.env.REACT_APP_SUB_KEY,
    userId,
  });

  return pubnub;
}
