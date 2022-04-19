import PageList from "./PageList";
function Pagination() {
  return (
    <div className="mt-3 d-flex justify-content-between">
      <small className="text-muted">Showing 1 to 10 of 96 entries</small>
      <PageList />
    </div>
  );
}
export default Pagination;
