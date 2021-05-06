import React from "react";
function Upload() {
  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dtrivepv1", // make this your own cloud name
      uploadPreset: "xzaf3ynx",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        // PUT route for images to be sent to our server.
        console.log("Done! Here is the image info: ", result.info);
      }
    }
  );

  function open() {
    myWidget.open();
  }

  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <button onClick={open}>Open</button>
    </div>
  );
}

export default Upload;
