import { useState } from "react";
import uuid from 'uuid/v4';

function useTodo(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: todoId => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, task: newTask };
        } else {
          return todo;
        }
      });
      setTodos(updatedTodos);
    }
  };
}

export default useTodo;
