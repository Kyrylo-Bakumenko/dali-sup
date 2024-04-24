import React, { useState, useEffect } from 'react';
import Note from './Note';
import {
  onNotesValueChange, addNote, deleteNote, updateNote, handleStartDrag,
} from './datastore';

function NoteList() {
  const [notes, setNotes] = useState({}); // Assuming notes is initially an object
  const [input, setInput] = useState('');

  useEffect(() => {
    const unsubscribe = onNotesValueChange((newNotes) => {
      console.log('New notes received:', newNotes);
      setNotes(newNotes || {}); // Ensure it remains an object
    });

    return () => unsubscribe(); // Clean up the listener
  }, []);

  const handleSubmit = (title) => {
    if (title.trim()) {
      const newNote = {
        title,
        text: '',
        position: { x: 0, y: 0, z: 0 },
      };
      addNote(newNote);
      setInput('');
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter note title..."
      />
      <button type="button" className="add-note-button" onClick={() => handleSubmit(input)}>Add Note</button>
      {Object.entries(notes).map(([id, note]) => (
        <Note
          key={id}
          noteId={id}
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
