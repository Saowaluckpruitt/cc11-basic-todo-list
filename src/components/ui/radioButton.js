function RadioButton(props) {
  return (
    <>
      <input
        type="radio"
        className="btn-check"
        id={props.id}
        name={props.name}
      />
      <label
        className={`btn btn-${props.color || "outline-dark"}`}
        htmlFor={props.id}
      >
        {props.children}
      </label>
    </>
  );
}
export default RadioButton;
