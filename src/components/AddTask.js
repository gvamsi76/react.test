import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please Add text");
      return;
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date & time </label>
        <div
          style={{
            margin: "auto",
            display: "block",
            width: "fit-content",
          }}
        ></div>
        <TextField
          placeholder="Date & Time"
          type="date"
          defaultValue="2022-03-14"
          // InputLabelProps={{
          //   shrink: true,
          // }}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Remainder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="save it" className="btn btn-block" />
    </form>
  );
};
export default AddTask;
