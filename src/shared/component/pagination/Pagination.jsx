import React from "react";
import "./style.css";

const Pagination = ({ currentPage, onPrevPage, onNextPage }) => {
  return (
    <>
      <div className="pagination">
        <button className="btn btn-outline-light" onClick={onPrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="page-info">{`${currentPage} of 100`}</span>
        <button className="btn btn-outline-light" onClick={onNextPage}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
