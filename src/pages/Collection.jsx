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
    <section className="collection">
      <BreadCrumb links={links} title={"Bags"} />
    </section>
  );
};

export default Collection;
