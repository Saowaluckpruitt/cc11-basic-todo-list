import Todo from "./Todo";
function TodoList(props) {
  return (
    <ul className="list-group shadow mt-4">
      {props.todoList.map((el) => (
        <Todo key={el.id} title={el.title} completed={el.completed} />
      ))}
      {/* <Todo title="Homework" completed={true} />
      <Todo title="Personal project  " completed={false} />
      <Todo title="Mid term exam" completed={false} />
      <Todo title="lab" completed={true} /> */}
    </ul>
  );
}
export default TodoList;
