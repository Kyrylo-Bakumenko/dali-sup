import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import the uuid library
import Note from './Note';

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const addNote = () => {
    if (input.trim()) {
      const newNote = {
        id: uuidv4(), // Generate a unique id using uuidv4(), copilot
        title: input,
        text: '',
        position: { x: 0, y: 0, z: 0 }, // intializes position
      };
      setNotes([...notes, newNote]);
      setInput('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedFields) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, ...updatedFields } : note)));
  };

  const handleStartDrag = (id) => {
    const maxZIndex = Math.max(...notes.map((note) => note.position.z), 0) + 1;
    setNotes(notes.map((note) => {
      if (note.id === id) {
        return { ...note, position: { ...note.position, z: maxZIndex } };
      } else {
        return { ...note, position: { ...note.position, z: Math.max(note.position.z - 1, 0) } };
      }
    }));
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter note title..."
      />
      <button type="button" onClick={addNote}>Add Note</button>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          updateNote={updateNote}
          handleStartDrag={handleStartDrag}
        />
      ))}
    </div>
  );
}

export default NoteList;
