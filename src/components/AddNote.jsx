import React, { useState } from "react";

const AddNote = (props) => {
  const [note, setNote] = useState('');

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    // let the app manage the persistence & state
    props.addNote(note);

    // reset the input text box value
    setNote('');
  };

  return (
    <div className="container p-3">
      <div className="input-group mb-3 p-3">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="New Note"
          aria-label="Note"
          aria-describedby="basic-addon2"
          value={note}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button
            onClick={handleClick}
            className="btn btn-primary"
            type="submit"
          >
            {"Add Note"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddNote;

