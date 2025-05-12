import React from 'react';

export default function Noteitem(props) {
    const { note, deleteNote } = props;
    const { title, description, tag } = note;
    const {updateNote} = props;


    return (
        <div className="col-md-3">
            <div className="card my-3 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-between align-items-center">
                        {title}
                        <div>
                            <img 
                                src="https://img.icons8.com/ios-filled/50/000000/edit.png" 
                                alt="edit" 
                                width="20px" 
                                height="20px" 
                                style={{ cursor: 'pointer', marginRight: '10px' }}
                                onClick={() => { updateNote(note); }}
                            />
                            <img 
                                src="https://img.icons8.com/ios-filled/50/000000/trash.png" 
                                alt="delete" 
                                width="20px" 
                                height="20px" 
                                style={{ cursor: 'pointer' }}
                                onClick={() => { deleteNote(note._id); }}
                            />
                        </div>
                    </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        <small className="text-muted">{tag}</small>
                    </p>
                </div>
            </div>
        </div>
    );
}
