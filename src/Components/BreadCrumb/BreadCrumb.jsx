import React, { useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./breadcrumb.css";
import Skeleton from "react-loading-skeleton";

const BreadCrumb = ({ links = [], title }) => {
  useEffect(()=>{
    const oldTitle =document.title;
    document.title=title
    return ()=>{
      document.title = oldTitle
    }
  },[title])
  return (
    <div className="common-header">
      <div className="text-center">
        <h1>{title || ""}</h1>
        <div className="py-4">
          <Breadcrumb className="d-flex flex-row justify-content-center">
            {links.map((link, index) => {
              const isCurrent = index + 1 === links.length;
              return (
                <Breadcrumb.Item
                  key={index}
                  active={isCurrent}
                  linkAs={Link}
                  linkProps={{ to: link.path }}
                >
                  {link.title || <Skeleton height={"10"} />}
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
