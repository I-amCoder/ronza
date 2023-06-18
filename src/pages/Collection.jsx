import React from "react";
import BreadCrumb from "../Components/BreadCrumb/BreadCrumb";

const Collection = () => {
  const links = [
    {
      path: "/",
      title: "Home",
    },
    {
      title: "TItle",
    },
  ];
  return (
    <section className="mt-5 py-5">
      <div className="row justify-content-center my-4">
        <div className="col-md-8 text-center">
          <h1>Category Name</h1>
          <BreadCrumb links={links} />
        </div>
      </div>
    </section>
  );
};

export default Collection;
