import React, { Componenet, useState, Redirect } from "react";

const NotesList = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        {props.notes.map((note) => (
          <div key={note.id} className="border border-primary rounded p-3 m-3">
            <span>{note.note}</span>
            <button
              type="button"
              className="close"
              onClick={(event) => {
                props.deleteNote(note);
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
export default NotesList;
