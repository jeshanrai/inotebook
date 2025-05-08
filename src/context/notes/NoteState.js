import react from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        name: "sachin",
        class: "12th",
        rollno: 123,
    }

    const [state, setState] = react.useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                name: "sachin",
                class: "12th",
                rollno: 123,
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
