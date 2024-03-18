import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-Data", id: uuidv4(), isDone: false },
  ]);

  let [newTasks, setNewTasks] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTasks, id: uuidv4(), isDone: false }];
    });
    setNewTasks("");
  };

  let updateTask = (event) => {
    setNewTasks(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let markDoneOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  let markDoneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return { ...todo, isDone: true };
      })
    );
  };

  return (
    <div>
      <input placeholder="Enter Task" value={newTasks} onChange={updateTask} />
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4>Todo List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </span>
            &nbsp; &nbsp; &nbsp;
            <span>
              <button onClick={() => markDoneOne(todo.id)}>Mark as Done</button>
            </span>
          </li>
        ))}
      </ul>
      <br />
      <span>
        <button onClick={markDoneAll}>Mark as Done All</button>
      </span>
    </div>
  );
}
