import { useState } from "react";

function Notes() {
  return (
    <>
      <div className="m-10">
        <div className="bg-gray-800 text-white flex m-5 justify-between">
          <h1 className="p-3 m-3">First Note</h1>
          <button className="bg-red-500 p-3 m-3 rounded-lg">Delete</button>
        </div>
        <div className="bg-gray-800 text-white flex m-5 justify-between">
          <h1 className="p-3 m-3">Second Note</h1>
          <button className="bg-red-500 p-3 m-3 rounded-lg">Delete</button>
        </div>
        <div className="bg-gray-800 text-white flex m-5 justify-between">
          <h1 className="p-3 m-3">Third Note</h1>
          <button className="bg-red-500 p-3 m-3 rounded-lg">Delete</button>
        </div>
        <div className="bg-gray-800 text-white flex m-5 justify-between">
          <h1 className="p-3 m-3">Fourth Note</h1>
          <button className="bg-red-500 p-3 m-3 rounded-lg">Delete</button>
        </div>
      </div>
    </>
  );
}

export default Notes;
