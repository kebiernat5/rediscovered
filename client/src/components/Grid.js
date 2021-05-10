import React from "react";

function Grid(props) {
  return (
    <div>
      <div className="cursor-pointer relative width:300px; height:300px">
        <img
          src={props.image}
          className="w-300px h-300px object-scale-down"
          alt="description"
        ></img>
      </div>
    </div>
  );
}

export default Grid;
