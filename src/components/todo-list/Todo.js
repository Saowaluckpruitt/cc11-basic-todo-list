import Button from "../ui/Button";

function Todo(props) {
  const { title, completed } = props;
  return (
    <li
      className={`list-group-item d-flex justify-content-between p-2  bd-callout-${
        completed ? "success" : "warning"
      }`}
    >
      <span className="mt-2" role="button">
        {title}
      </span>
      <div className="btn-group">
        <Button color="outline-info">
          <i className={`fa-solid fa-toggle-${completed ? "on" : "off"}`}></i>
        </Button>
        <Button color="danger">
          <i className="fa-regular fa-trash-can"></i>
        </Button>
      </div>
    </li>
  );
}
export default Todo;
