import { memo } from "react";
import ReactPaginate from "react-paginate";
import style from "./food.module.css";
const Pagination = () => {
  const handlePageClick = (data: { selected: number }) => {
    console.log(data);
  };

  return (
    <ReactPaginate
      previousLabel={"left"}
      nextLabel={"Right"}
      className={style.pagination}
      pageClassName={style.page}
      breakLabel="  . . . . .  "
      previousClassName={style.indicators}
      nextClassName={style.indicators}
      activeClassName={style.activepage}
      pageCount={3}
      initialPage={0}
      disableInitialCallback={false}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      renderOnZeroPageCount={null}
      onPageChange={handlePageClick}
    />
  );
};

export default memo(Pagination);
