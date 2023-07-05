import React, { createContext, useEffect, useState } from "react";
import { config } from "../utils/config";
import staticApi from "../data.json";
import axios from "axios";

export const SiteContext = createContext();

export const SiteContextProvider = ({ children }) => {
  const [hero, setHero] = useState([]);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState([]);

  const contextData = {
    hero,
    data,
    loading,
    images,
  };

  useEffect(() => {
    const loadHomePageData = async (retry = 3) => {
      setLoading(true);
      await axios
        .get(`${config.url.API_URL}/home-stuff`)
        .then((response) => {
          setData(response.data.data);
          setLoading(false);
        })
        .catch((e) => {
          if (retry > 0) {
            setLoading(true);
            loadHomePageData(retry - 1);
          } else {
            setIsError(false);
            console.log(e);
          }
        });
    };

    setLoading(true);
    setImages(staticApi.results);
    setHero(staticApi.results);
    loadHomePageData();
  }, []);

  return (
    <SiteContext.Provider value={contextData}>{children}</SiteContext.Provider>
  );
};
