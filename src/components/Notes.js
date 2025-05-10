import React, {useContext, useEffect} from 'react'
import NoteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

export default function Notes() {
  const context = useContext(NoteContext);
  const { notes, getNotes, deleteNote} = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, [])


  return (
    <div>
     <AddNote/>
      <div className="container my-3">
    <h2>Your Notes</h2>
    <div className="row my-3">
      {notes.map((note) => {  
       return <Noteitem key={note._id} note={note}  deleteNote={deleteNote} />
      })}
        </div>


      
    </div>
    </div>
  )
}
