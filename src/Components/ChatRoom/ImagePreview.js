import React from "react";
import useSimulateImgUpload from "../../hooks/useSimulateImgUpload";

export default function ImagePreview(file) {
  const uploadStatus = useSimulateImgUpload();
  if (!file) return;

  if (!file.type.includes("image")) return null;

  const separator = uploadStatus === "success" ? <hr /> : null;

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
}
