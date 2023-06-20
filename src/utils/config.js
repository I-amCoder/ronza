const prod = {
  url: {
    API_URL: "https://junaid.pakistantradepk.com/api",
    base_url: "/ronza"
  },
};
const dev = {
  url: {
    // API_URL: "http://127.0.0.1:8000/api",
    API_URL: "https://junaid.pakistantradepk.com/api",
    base_url: "/"
  },
};
export const config = process.env.NODE_ENV === "development" ? dev : prod;
