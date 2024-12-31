function Add() {
  return (
    <div className="flex justify-center gap-4">
      <span className="">
        <input
          type="text"
          placeholder="Add a note"
          className="border-fuchsia-500 rounded-lg border-2 p-4 text-xl text-white bg-black"
        />
      </span>
      <button className="bg-black border-indigo-500 border-2 text-xl px-6 rounded-lg text-white">
        Add
      </button>
    </div>
  );
}

export default Add;
