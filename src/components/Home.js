import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Navbar from './Navbar'
import NoteState from '../context/notes/NoteState'
import NoteContext from '../context/notes/noteContext'
export default function Home() {
    const context = useContext(NoteContext);
const { notes, setNotes } = context;
  return (
    <div>
       <div className="container">
            <h1>Welcome to iNotebook</h1>
            <p>Add a Note</p>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag"/>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button> 

</form>
</div>

<div className="container my-3">
    <h2>Your Notes</h2>
    {notes.map((note) => {
        return (
            <div className="card my-3" key={note._id}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <p className="card-text"><small className="text-muted">{note.tag}</small></p>
                </div>
            </div>
        )
    })}
        </div>
        </div>
    
   
  )
}
