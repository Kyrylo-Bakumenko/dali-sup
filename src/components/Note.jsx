import React, { useState } from 'react';
import Draggable from 'react-draggable';
import ReactMarkdown from 'react-markdown';

function Note({
  noteId, note, deleteNote, updateNote, handleStartDrag,
}) {
  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  // Handle stop dragging and update the note's position in Firebase
  const handleStopDrag = (e, data) => {
    const newPos = { x: data.x, y: data.y, z: note.position.z };
    updateNote(noteId, { ...note, position: newPos });
  };

  // Handle save and update the note's title and text in Firebase
  const handleSave = () => {
    updateNote(noteId, { title, text });
    setEditing(false);
  };

  return (
    <Draggable
      handle=".handle"
      // grid={[25, 25]} // snapping to grid pixels
      defaultPosition={{ x: note.position.x, y: note.position.y }}
      position={{ x: note.position.x, y: note.position.y }}
      onStart={() => handleStartDrag(noteId)}
      onStop={handleStopDrag}
    >
      <div className="note" style={{ position: 'absolute', zIndex: note.position.z }}>
        {isEditing ? (
          <div>
            <div className="handle">
              <input className="note-title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <div className="control-buttons">
                <button type="button" onClick={handleSave}>Save</button>
                <button type="button" onClick={() => setEditing(false)}>Cancel</button>
              </div>
            </div>
            <textarea className="content" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
        ) : (
          <div>
            <div className="handle">
              <h4 className="note-title">{title}</h4>
              <div className="control-buttons">
                <button type="button" onClick={() => setEditing(true)}>Edit</button>
                <button type="button" onClick={() => deleteNote(noteId)}>Delete</button>
              </div>
            </div>
            <ReactMarkdown className="content">{text}</ReactMarkdown>
          </div>
        )}
      </div>
    </Draggable>
  );
}

export default Note;
