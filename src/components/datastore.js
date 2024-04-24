import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBKVhwDmRrSiPvtGwdEe-j2eKOSGrFIp4U',
  authDomain: 'kmskmskms-62c07.firebaseapp.com',
  databaseURL: 'https://firenotes-d574a-default-rtdb.firebaseio.com/',
  projectId: 'kmskmskms-62c07',
  storageBucket: 'kmskmskms-62c07.appspot.com',
  messagingSenderId: '464751230417',
  appId: '1:464751230417:web:0e5c6243e0bf74ac4974f0',
  measurementId: 'G-CS4CWB5PF5',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export const onNotesValueChange = (callback) => {
  const notesRef = database.ref('notes');
  notesRef.on('value', (snapshot) => {
    const rawData = snapshot.val();
    const notes = rawData ? Object.keys(rawData).reduce((acc, key) => {
      acc[key] = rawData[key];
      return acc;
    }, {}) : {};
    console.log('Filtered notes state:', notes);
    callback(notes);
  });

  return () => notesRef.off();
};

export const addNote = (newNote) => {
  database.ref('notes').push(newNote);
};

export const updateNote = (id, updatedFields) => {
  database.ref(`notes/${id}`).update(updatedFields);
};

export const deleteNote = (id) => {
  database.ref('notes').child(id).remove();
};

export const handleStartDrag = (currentNoteId) => {
  const notesRef = database.ref('notes');

  notesRef.once('value', (snapshot) => {
    const notes = snapshot.val();
    let maxZIndex = 0;

    // calculate the maximum zIndex
    Object.keys(notes).forEach((key) => {
      const zIndex = notes[key].position && notes[key].position.z;
      if (zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    maxZIndex += 1;

    const updates = {};
    Object.keys(notes).forEach((key) => {
      if (key === currentNoteId) {
        updates[`${key}/position/z`] = maxZIndex;
      } else {
        const newZIndex = notes[key].position.z > 0 ? notes[key].position.z - 1 : 0;
        updates[`${key}/position/z`] = newZIndex;
      }
    });

    notesRef.update(updates, (error) => {
      if (error) {
        console.error('Failed to update zIndex on drag:', error);
      } else {
        console.log('zIndex updated successfully during drag');
      }
    });
  });
};

export default database;
