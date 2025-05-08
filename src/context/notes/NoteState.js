import react from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = [
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
    ]

const [notes, setNotes] = useState(s1)
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
