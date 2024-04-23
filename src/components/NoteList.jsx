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
        />
      ))}
    </div>
  );
}

export default NoteList;
