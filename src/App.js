import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./components/todo-list/TodoInput";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import TodoList from "./components/todo-list/TodoList";
import Pagination from "./components/pagination/Pagination";

const todo = {
  title: "Homework",
  completed: true,
};
const initialTodoList = [
  { title: "Homework", completed: true, id: uuidv4() },
  { title: "Mid term exam", completed: false, id: uuidv4() },
];

function App() {
  const [todoList, settodoList] = useState(initialTodoList);

  const creatTodo = (title) => {
    const newTodo = { title, completed: false, id: uuidv4() };
    const oldTodoList = [...todoList];
    oldTodoList.unshift(newTodo);
    settodoList(oldTodoList);
  };

  return (
    <div className="container max-w-xs">
      <TodoInput creatTodo={creatTodo} />
      <Filter />
      <PageLimit />
      <TodoList todoList={todoList} />
      <Pagination />
    </div>
  );
}

export default App;
