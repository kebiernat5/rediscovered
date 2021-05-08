import React, { useState } from "react";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

function Upload() {
  const [state, dispatch] = useStoreContext();
  const [photoState, setPhotoState] = useState();
  const [captionState, setCaptionState] = useState();
  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "katebiernat", // make this your own cloud name
      uploadPreset: "rediscovered-preset",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        // Saves the response of our upload to state.
        console.log("Done! Here is the image info: ", result);
        // PUT route for images to be sent to our server.
<<<<<<< HEAD
        console.log("Done! Here is the image info: ", result.info);
        // API.sendImage(result.info.url)
        //   .then((data) => setPhotoState(data.url))
        //   .catch((err) => console.log(err));
=======
>>>>>>> c2097ddd42dd870b2de88e46468d0af43b70ed00
        setPhotoState(result.info.url)
      }
    }
  );

  const handleCaption = (e) => {
    const caption = e.target.value;
    // Saves our caption text fields value to state.
    setCaptionState(caption);
  };

<<<<<<< HEAD
  function handleSubmit (e) {
    e.preventDefault()
    console.log("Captions State", captionState)
    console.log("Photo State", photoState)
   API.submitDB({
     caption: captionState,
     imageUrl: photoState
  })
=======
  // When we submit, upload the current caption + photo to our DB
  function handleSubmit(e) {
    e.preventDefault();   
    console.log("Caption State", captionState);
    console.log("Photo State", photoState);
     API.submitDB({
       caption: captionState,
       imageUrl: photoState
    })
>>>>>>> c2097ddd42dd870b2de88e46468d0af43b70ed00
  }

  function open() {
    myWidget.open();
  }

  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      {/* <button
        classNameName="btn btn-primary px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
        onClick={open}
      >
        Pick a Photo
      </button> */}
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
        New Post
      </div>
      <style>
        body
        {/* body {background:white !important;} */}
      </style>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <button
          className="btn btn-primary px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
          onClick={open}
        >
          Pick a Photo
        </button>
        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellcheck="false"
          placeholder="Caption"
          onChange={(e) => handleCaption(e)}
        ></textarea>

        {/* <!-- icons --> */}
        <div className="icons flex text-gray-500 m-2">
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">
            0/300
          </div>
        </div>
        {/* <!-- buttons --> */}
        <div className="buttons flex">
          <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
            Cancel
          </div>
          <div
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            onClick={(e) => handleSubmit(e)}
          >
            Post
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
