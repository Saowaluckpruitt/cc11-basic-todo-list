function Button(props) {
  const classes = `btn btn-${props.color || "outline-primary"} shadow-none`;
  return (
    <button onClick={props.onClick} className={classes} type="button">
      {props.children}
    </button>
  );
}
export default Button;
