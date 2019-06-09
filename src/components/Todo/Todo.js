import React from "react";
import useToggle from "../../hooks/useToggle";
import EditForm from "../EditForm/EditForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({ task, completed, id, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggleIsEditing] = useToggle(false);
  const renderEditForm = () => {
    return(
        <EditForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggleIsEditing}
        />
    )
  };
  
  const renderList = () => {
    return(
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Del" onClick={() => removeTodo(id)}>
              Del
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleIsEditing}>
              Edit
            </IconButton>
          </ListItemSecondaryAction>
        </>
    )
  };
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? renderEditForm() : renderList() }
    </ListItem>
  );
}
export default Todo;