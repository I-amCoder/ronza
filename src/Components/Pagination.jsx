import React from "react";
import { Spinner } from "react-bootstrap";

const Pagination = ({ loaded, handleLoadMore, meta, currentPage }) => {
  return (
    <div>
      {loaded ? (
        <>
          {currentPage < meta.last_page ? (
            <div className="row mt-4 justify-content-center">
              <div className="col-md-6 text-center">
                <button onClick={handleLoadMore} className="btn btn-success">
                  Load More
                </button>
              </div>
            </div>
          ) : (
            <div className="row mt-4">
              <div className="col-12 text-center">Happy Shopping :)</div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center p-2 mt-4">
          <Spinner className="px-2" animation="grow" variant="danger" />
          <Spinner className="px-2" animation="grow" variant="warning" />
          <Spinner className="px-2" animation="grow" variant="info" />
        </div>
      )}
    </div>
  );
};

export default Pagination;
