import React from "react";
import { BsInstagram, BsPinterest, BsTwitter } from "react-icons/bs";

import {
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

const SocialSection = ({ data, loading }) => {
  return (
    <section className="social-section container my-5">
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <h2 className="logo-text underline ">RONZA</h2>
          </div>
          <div className="icon-row mt-4 text-center">
            <h4>FOLLOW US ON</h4>
            {loading ? (
              <Skeleton className="mx-2" inline width={30} height={30} />
            ) : (
              data.youtube && (
                <a className="youtube" target={"_blank"} href={data.youtube}>
                  <FaYoutube />
                </a>
              )
            )}
            {loading ? (
              <Skeleton className="mx-2" inline width={30} height={30} />
            ) : (
              data.facebook && (
                <a className="facebook" target={"_blank"} href={data.facebook}>
                  <FaFacebook />
                </a>
              )
            )}
            {loading ? (
              <Skeleton className="mx-2" inline width={30} height={30} />
            ) : (
              data.instagram && (
                <a
                  className="instagram"
                  target={"_blank"}
                  href={data.instagram}
                >
                  <BsInstagram />
                </a>
              )
            )}
            {loading ? (
              <Skeleton className="mx-2" inline width={30} height={30} />
            ) : (
              data.twitter && (
                <a className="twitter" target={"_blank"} href={data.twitter}>
                  <BsTwitter />
                </a>
              )
            )}
            {loading ? (
              <Skeleton className="mx-2" inline width={30} height={30} />
            ) : (
              data.pinterest && (
                <a
                  className="pinterest"
                  target={"_blank"}
                  href={data.pinterest}
                >
                  <BsPinterest />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
