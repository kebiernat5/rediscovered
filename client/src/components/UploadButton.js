import React, { useState } from "react";

// const cloudinaryConfig = {
//     CLOUD_NAME:"katebiernat", 
//     API_KEY:"512424249258488",
//     API_SECRET:"xkvnb5Mwu9RCHZOrRRwVJGKb660",
//     BASE_DELIVERY_URL:"http://res.cloudinary.com/katebiernat",
//     SECURE_DELIVERY_URL:"https://res.cloudinary.com/katebiernat",
//     API_BASE_URL:"https://api.cloudinary.com/v1_1/katebiernat" }

function UploadButton() {
  const [selectedFile, setSelectedFile] = useState();
  console.log(selectedFile);
  const onUpload = (event) => {
      event.preventDefault()
      let base64Img = `data:image/jpg,${selectedFile}`;
      let data = {
          "file": base64Img, 
          "upload_preset": "rediscovered-preset"
      }
      fetch("https://api.cloudinary.com/v1_1/katebiernat/upload", {
          body:JSON.stringify(data),
          headers:{"content-type":"application/json"},method:"POST"
      })
    .then(response => {
        response.json().then(data => {
            console.log(data)
        })
    }).catch(err => {
        console.log(err)
    })
  };
  return (
    <div>
      <h1>Hello</h1>
      <form onSubmit={(e) => {
          onUpload(e)
      }}>
        <input type="file"onChange={(e) => {
              console.log(e.target) 
              setSelectedFile(e.target.value)}}></input>
        <input
          type="submit">
          </input>
      </form>
    </div>
    // <div className="overflow-hidden relative w-64 mt-4 mb-4">
    //   <button className="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 w-full inline-flex items-center">
    //     <svg
    //       fill="#FFF"
    //       height="18"
    //       viewBox="0 0 24 24"
    //       width="18"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path d="M0 0h24v24H0z" fill="none" ></path>
    //       <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" ></path>
    //     </svg>
    //     <span className="ml-2">Upload Photo</span>
    //   </button>
    //   <input
    //     className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t"
    //     type="file"
    //     name="documents[]"
    //     accept="image/*"
    //   ></input>
    // </div>
  );
}

export default UploadButton;
