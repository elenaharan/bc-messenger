import { useState } from "react";

export default function useSimulateImgUpload() {
  const [uploadStatus, setUploadStatus] = useState("pending");

  setTimeout(() => {
    setUploadStatus("success");
  }, 5000);

  return uploadStatus;
}
