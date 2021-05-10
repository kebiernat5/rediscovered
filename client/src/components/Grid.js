import React from "react";

function Grid(props) {
  return (
    <div>
      <div className="flex-wrap cursor-pointer relative width:300px; height:300px">
        <img
          src={props.image}
          className="flex-wrap max-w-300px max-h-300px object-scale-down"
          alt="description"
        ></img>
      </div>
    </div>
  );
}

export default Grid;
