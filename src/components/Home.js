import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Navbar from './Navbar'
import Notes from './Notes'
import NoteState from '../context/notes/NoteState'
import NoteContext from '../context/notes/noteContext'
import AddNote from './AddNote'
export default function Home() {
   
  return (
    <div>
       \
            <h1>Welcome to iNotebook</h1>
    
<Notes/>
        </div>
    
   
  )
}
