function Add({ newNote, setNewNote, addNote }) {
  return (
    <div className="flex justify-center gap-4">
      <span className="">
        <input
          type="text"
          placeholder="Add a note"
          value={newNote}
          className="border-fuchsia-500 rounded-lg border-2 p-4 text-xl text-white bg-black"
          onChange={(e) => setNewNote(e.target.value)} // Update state saat input berubah
        />
      </span>
      <button
        className="bg-black border-indigo-500 border-2 text-xl px-6 rounded-lg text-white"
        onClick={addNote}
      >
        Add
      </button>
    </div>
  );
}

export default Add;
