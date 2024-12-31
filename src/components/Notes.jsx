function Notes({ notes, deleteNote }) {
  return (
    <>
      <div className="m-10">
        <div className="bg-gray-800 text-white m-5 rounded-md">
          <ul className="divide-y divide-gray-700">
            {notes.map((note) => (
              <li
                key={note.id}
                className="flex justify-between items-center p-2"
              >
                <span className="p-3 m-3">{note.text}</span>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="bg-red-500 p-3 m-3 rounded-lg"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Notes;
