import { useState } from "react";
import { userId } from "./config";

export function instantiatePubnub(PubNub) {
  const pubnub = new PubNub({
    publishKey: process.env.REACT_APP_PUB_KEY,
    subscribeKey: process.env.REACT_APP_SUB_KEY,
    userId,
  });

  return pubnub;
}

export function useSimulateImgUpload() {
  const [uploadStatus, setUploadStatus] = useState("pending");

  setTimeout(() => {
    setUploadStatus("success");
  }, 5000);

  return uploadStatus;
}
