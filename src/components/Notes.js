import React, {useContext, useEffect, useRef, useState} from 'react'
import NoteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

export default function Notes() {
const context = useContext(NoteContext);
const { notes, getNotes, deleteNote,editNote} = context;
useEffect(() => {
getNotes();
// eslint-disable-next-line
}, [])
const handleClick = (e) => {
  // e.preventDefault();  // not needed here unless you submit a real form
  console.log("Updating the note...", note);
  editNote(note.id, note.title, note.description, note.tag);
 refClose.current.click();
};

const refClose = useRef(null);
const ref = useRef(null);
const updateNote = (currentnote) => {
ref.current.click();
setNote({ id: currentnote._id, title: currentnote.title, description: currentnote.description, tag: currentnote.tag });

}
const [note, setNote] = useState({ title: "", description: "", tag: "" });


const onChange = (e) => {
setNote({ ...note, [e.target.name]: e.target.value });
};

return (
   <div> <AddNote/>

<button type="button" ref={ref}  className="btn btn-primary my-3 d-none" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal 
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <form > 
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
            minLength={5} 
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
            minLength={5} 
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
            minLength={5}
            required  
          />
        </div>
      </form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>

      </div>
    </div>
  </div>
</div>
      <div className="container my-3">
    <h2>Your Notes</h2>
    <div className="row my-3">
    {   notes.length === 0 && "No notes to display"}
      {notes.map((note) => {  
       return <Noteitem key={note._id} note={note} updateNote={updateNote} deleteNote={deleteNote} />
      })}
        </div>

```
</div>
</div>


)
}
