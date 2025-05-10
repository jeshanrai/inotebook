import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
  const initialNotes = [
    {
      "_id": "645f0c2a3d4b5e1f8c9e4a1b",
      "user": "645f0c2a3d4b5e1f8c9e4a1a",
      "title": "Sample Note",
      "description": "This is a sample note.",
      "tag": "general",
      "date": "2023-05-01T12:00:00Z",
      "__v": 0
    },
    {
      "_id": "645f0c2a3d4b5e1f8c9e4a1c",
      "user": "645f0c2a3d4b5e1f8c9e4a1a",
      "title": "Another Note",
      "description": "This is another note.",
      "tag": "work",
      "date": "2023-05-02T12:00:00Z",
      "__v": 0
    }
  ];

  const [notes, setNotes] = useState(initialNotes);

  // Add a Note
  const addNote = async (title, description, tag) => {
  try {
    const response = await fetch(`http://localhost:3000/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgxYjE4ZGYzNGQ1MDdjOTkwMGQ0OTJlIn0sImlhdCI6MTc0NjYzOTQ3NH0.EXj8eSDcZZWxyHh_L2gBV9GL355iP70xScvLWn7991o'
      },
      body: JSON.stringify({ title, description, tag })
    });

    const newNote = await response.json();
    setNotes(notes.concat(newNote));  // Update your state with the newly created note
  } catch (error) {
    console.error("Error adding note:", error);
  }
};


  // Delete a Note
const deleteNote = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgxYjE4ZGYzNGQ1MDdjOTkwMGQ0OTJlIn0sImlhdCI6MTc0NjYzOTQ3NH0.EXj8eSDcZZWxyHh_L2gBV9GL355iP70xScvLWn7991o'
      }
    });

    const json = await response.json();
    console.log(json); // You can log the response if needed

    // After successful deletion, update local state
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  } catch (error) {
    console.error("Error deleting note:", error);
  }
};


  //get all notes
    const getNotes = async () => {
        //api call
        const response = await fetch("http://localhost:3000/api/notes/fetchallnotes", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgxYjE4ZGYzNGQ1MDdjOTkwMGQ0OTJlIn0sImlhdCI6MTc0NjYzOTQ3NH0.EXj8eSDcZZWxyHh_L2gBV9GL355iP70xScvLWn7991o'
        }
        });

        const json = await response.json();
        setNotes(json);
        console.log(json);
    };


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
