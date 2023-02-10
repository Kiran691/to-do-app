"use client";
import React, { useState } from "react";
import { isClassStaticBlockDeclaration } from "typescript";

export default function ToDo () {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {todoText: "todo 1", completed: false},
    {todoText: "todo 2", completed: false},
  ]);

   const onClickHandler = (ourElm: any) => {
    console.log("ourElm", ourElm);

    const newTodos = todos.map((todo) => {
      console.log("todo:", todo);
      if (todo.todoText == ourElm.todoText) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    console.log(newTodos);
    setTodos(newTodos);
    };
    const addTodo = () => {
      const newTodo = { todoText: todo , completed: false}
      const newTodos = [...todos, newTodo]
      setTodos(newTodos)
      setTodo("");
    };

    const deleteTodo = (ourTodo: any) => {
      const newTodos = todos.filter((todo) => {
        if (todo.todoText == ourTodo.todoText) return false;
        return true;
      });
      console.log("old todos", todos, "new todos", newTodos);
      setTodos(newTodos);
    };

  return (

    <>

    <div>Todo</div>
    <input
    placeholder="add todo text"
    value={todo}
    onChange={(e) => {
      setTodo(e.target.value);
    }
    }
    />
    <button onClick={addTodo}>Add</button>
    <ul>
      {todos.map((elm) => {
        return (
          <li
          style={{
            color: elm.completed ? "red" :"blue",
          fontStyle: "oblique",
          listStyle: "none",
          }}
          key={elm.todoText}
          >
            <input
             type="checkbox"
              checked={elm.completed}
               onChange={()=>{
                onClickHandler(elm);
                }}
                 />
            {elm.todoText}
            <button onClick={()=>{deleteTodo(elm)}}>
              {"  "}
              Delete
            </button>
          </li>
        ); 
      })}
    </ul>
    </>
  );
}
