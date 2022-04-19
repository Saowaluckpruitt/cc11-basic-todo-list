import { useState } from "react";
import Button from "../ui/Button";

function TodoInput(props) {
  const [todoInput, setTodoInput] = useState("");

  return (
    <>
      <div className="input-group shadow mt-5">
        <input
          type="text"
          className="form-control "
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
          value={todoInput}
          onChange={(event) => setTodoInput(event.target.value)}
        />

        <Button color="success">
          <i className="fa-solid fa-plus" />
        </Button>
        <Button color="outline-secondary" onClick={() => setTodoInput("")}>
          <i className="fa-solid fa-xmark" />
        </Button>
      </div>
      <small></small>
    </>
  );
}
export default TodoInput;
