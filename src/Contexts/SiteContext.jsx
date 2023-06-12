import React, { createContext, useEffect, useState } from "react";
import { config } from "../config";
import staticApi from "../data.json";
import axios from "axios";

export const SiteContext = createContext();

export const SiteContextProvider = ({ children }) => {
  // const defaults = {
  //   address: "Deserunt consectetur",
  //   description: "Enim quisquam dolore",
  //   email: "toqi@mailinator.com",
  //   facebook: "https://www.dys.ws",
  //   heros: [],
  //   image: "d7482eb7-b0c3-4aaa-af8a-92fb0eaa4044_maxime-dolorem-quod.jpg",
  //   image_path:
  //     "http://localhost:8000/sites/images/d7482eb7-b0c3-4aaa-af8a-92fb0eaa4044_maxime-dolorem-quod.jpg",
  //   instagram: "https://www.wihututemilu.info",
  //   logo: "7d4e6642-fb30-4665-b827-0177d6e9c128_maxime-dolorem-quod.jpg",
  //   logo_path:
  //     "http://localhost:8000/sites/logos/7d4e6642-fb30-4665-b827-0177d6e9c128_maxime-dolorem-quod.jpg",
  //   phone: "+1 (853) 135-4494",
  //   pinterest: "https://www.tor.biz",
  //   sections: [],
  //   site_name: "Jeanette Bruce",
  //   store_link: "https://www.cilokofe.ca",
  //   title: "Maxime dolorem quod",
  //   twitter: "https://www.wigidiku.co.uk",
  //   youtube: "https://www.rorijequjyhut.cc",
  // };

  
  const [hero, setHero] = useState([]);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  const contextData = {
    hero,
    data,
    loading,
    images,
  };


  useEffect(() => {
  setLoading(true);
  setImages(staticApi.results);
  setHero(staticApi.results);
  loadHomePageData();
  }, []);

  const loadHomePageData =async () => {
    await axios.get(`${config.url.API_URL}/home-stuff`)
    .then((response)=>{
      setData(response.data.data);
      setLoading(false);
    }).catch((e)=>{
      console.log(e);
    })
  };
  const processApi = (apiData) => {
    setData(apiData);
  };

  return (
    <SiteContext.Provider value={contextData}>{children}</SiteContext.Provider>
  );
};
