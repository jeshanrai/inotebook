import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);

  // Add a Note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`http://localhost:3000/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      });

      const newNote = await response.json();
      setNotes(notes.concat(newNote));
      props.showAlert("Note added successfully", "success");
    } catch (error) {
      props.showAlert("Failed to add note", "danger");
    }
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`http://localhost:3000/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      });

      await response.json(); // optional: handle if needed

      const newNotes = JSON.parse(JSON.stringify(notes));
      for (let i = 0; i < newNotes.length; i++) {
        if (newNotes[i]._id === id) {
          newNotes[i].title = title;
          newNotes[i].description = description;
          newNotes[i].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
      props.showAlert("Note updated successfully", "success");
    } catch (error) {
      props.showAlert("Failed to update note", "danger");
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });

      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
      props.showAlert("Note deleted successfully", "success");
    } catch (error) {
      props.showAlert("Failed to delete note", "danger");
    }
  };

  // Get All Notes for Logged-in User
  const getNotes = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/notes/fetchallnotes", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });

      const json = await response.json();
      setNotes(json);
      props.showAlert("Notes fetched successfully", "success");
    } catch (error) {
      props.showAlert("Failed to fetch notes", "danger");
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
