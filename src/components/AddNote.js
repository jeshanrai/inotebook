import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

export default function AddNote() {
  const context = useContext(noteContext);
  const { addNote } = context;  

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleAddNotes = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag); // 🔥 Pass title, desc, tag separately
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <p>Add a Note</p>
      <form onSubmit={handleAddNotes}> 
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
