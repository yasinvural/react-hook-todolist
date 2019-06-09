import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "../../hooks/useInputState";

function EditForm({ editTodo, id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleEditForm();
  };   
  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        autoFocus
        fullWidth
      />
    </form>
  );
}
export default EditForm;
