import { useState } from "react";
import "./index.css";
import Title from "./components/Title";
import Add from "./components/Add";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([]); // State untuk menyimpan daftar notes
  const [newNote, setNewNote] = useState(""); // State untuk menyimpan input sementara

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, { id: Date.now(), text: newNote }]); // Tambahkan note baru dengan ID yang unik
      setNewNote(""); // Kosongkan input setelah note ditambahkan
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id)); // Hapus note berdasarkan ID
  };

  return (
    <>
      <Title />
      <Add newNote={newNote} setNewNote={setNewNote} addNote={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} />
    </>
  );
}

export default App;
