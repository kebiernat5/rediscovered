import React from "react";

function Grid(props) {
  return (
    <div>
      <div className="flex col-span-3 grid-flow-col auto-rows-auto cursor-pointer">
        <img
          src={props.image}
          className="flex-wrap-reverse max-w-xs max-h-80 object-scale-down grid-flow-col"
          alt="description"
        ></img>
      </div>
    </div>
  );
}

export default Grid;
