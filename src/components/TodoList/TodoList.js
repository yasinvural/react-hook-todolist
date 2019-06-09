import React from "react";
import Todo from "../Todo/Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";

function TodoList(props) {
  if (props.todos.length)
    return (
      <Paper>
        <List>
          {props.todos.map((todo, i) => (
            <>
              <Todo
                id={todo.id}
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
                toggleTodo={props.toggleTodo}
                editTodo={props.editTodo}
                removeTodo={props.removeTodo}
              />
              {i < props.todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}
export default TodoList;
