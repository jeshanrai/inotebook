import React, {use, useContext, useEffect} from 'react'
import NoteContext from '../context/notes/noteContext'
export default function About() {
    const a = useContext(NoteContext)
 useEffect(() => {
    a.update();
  }, [])
  return (
    <div>
        thos is about page sdasd{a.state.name} and  {a.state.class} and {a.state.class} and {a.state.rollno}  
      
    </div>
  )
}

