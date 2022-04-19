import PageItems from "./PageItems";
function PageList() {
  return (
    <ul className="pagination mb-0 pagination-sm">
      <PageItems disabled={true}>
        <i className="fa-solid fa-angle-left small"></i>
      </PageItems>
      <PageItems active={true}>1</PageItems>
      <PageItems>2</PageItems>
      <PageItems>3</PageItems>
      <PageItems>
        <i className="fa-solid fa-angle-right small"></i>
      </PageItems>
    </ul>
  );
}
export default PageList;
