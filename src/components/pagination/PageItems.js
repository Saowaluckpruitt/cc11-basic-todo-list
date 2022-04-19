function PageItems(props) {
  return (
    <li
      className={`page-items ${props.active ? "active" : ""} ${
        props.disabled ? "disabled" : ""
      }`}
    >
      <button className="page-link shadow-none">{props.children}</button>
    </li>
  );
}
export default PageItems;
