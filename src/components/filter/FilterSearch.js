import Button from "../ui/Button";

function FilterSearch() {
  return (
    <div className="input-group shadow">
      <input
        type="text"
        className="form-control "
        placeholder="Search"
        aria-label="Recipient's username with two button addons"
      />
      <Button color="dark">
        <i className="fa-solid fa-xmark" />
      </Button>
    </div>
  );
}
export default FilterSearch;
