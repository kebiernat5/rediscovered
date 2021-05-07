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
    
      <button  className="btn btn-primary px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded" onClick={open}>Pick a Photo</button>
    </div>
  );
}

export default Upload;
