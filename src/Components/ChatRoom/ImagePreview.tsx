import React from "react";
import useSimulateImgUpload from "../../hooks/useSimulateImgUpload";

type FileProps = File & {
  name: string;
};

type UriFileInput = {
  uri: string;
};

type ImagePreviewProps = FileProps | UriFileInput;

export default function ImagePreview(file: ImagePreviewProps) {
  const uploadStatus = useSimulateImgUpload();
  if (!file) return null;

  const separator = uploadStatus === "success" ? <hr /> : null;

  if ("name" in file) {
    if (!file.type.includes("image")) return null;

    return (
      <>
        {separator}
        <div className="p-3 mb-4">
          <span className="text-light-grey">{file.name}</span>
          <img
            src={URL.createObjectURL(file)}
            alt="File Preview"
            className="w-16 h-16 object-cover rounded mr-2.5"
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        {separator}
        <div className="p-3 mb-4">
          <img
            src={file.uri}
            alt="File Preview"
            className="w-16 h-16 object-cover rounded mr-2.5"
          />
        </div>
      </>
    );
  }
}
