import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ links = [] }) => {
  return (
    <>
      <div className="display-inline">
        {links.map((link, index) => {
          return <Link className={`nav-link ${index+1===links.length ? "active" : ""}`}  to={link.path||''} >{link.title}</Link>;
        })}
      </div>
    </>
  );
};

export default BreadCrumb;
