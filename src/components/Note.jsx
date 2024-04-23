import React, { useState } from 'react';
import Draggable from 'react-draggable';

function Note({ note, deleteNote, updateNote }) {
  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleSave = () => {
    updateNote(note.id, { title, text });
    setEditing(false);
  };

  return (
    <Draggable
      handle=".handle"
      defaultPosition={position}
      position={position}
      onStop={handleDrag}
    >
      <div className="note" style={{ position: 'absolute' }}>
        {isEditing ? (
          <div>
            <div className="handle">
              <input className="note-title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <div className="control-buttons" />
              <button type="button" onClick={handleSave}>Save</button>
              <button type="button" onClick={() => setEditing(false)}>Cancel</button>
            </div>
            <textarea className="content" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
        ) : (
          <div>
            <div className="handle">
              <h4 className="note-title">{note.title}</h4>
              <div className="control-buttons">
                <button type="button" onClick={() => setEditing(true)}>Edit</button>
                <button type="button" onClick={() => deleteNote(note.id)}>Delete</button>
              </div>
            </div>
            <p className="content">{note.text}</p>
          </div>
        )}
      </div>
    </Draggable>
  );
}

export default Note;
