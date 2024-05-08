import axios from "axios";

const ip = "https://api.weekday.technology/adhoc";

const headers: any = {
  //   "Access-Control-Allow-Credentials": true,
  "content-type": "application/json",
};

export const rootPath = ip + "";

// axios.defaults.withCredentials = true;

const jobApi = axios.create({
  baseURL: rootPath,
  headers: headers,
});

// Add a response interceptor
jobApi.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    if (error && error.response && error.response.status === 401) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

export default jobApi;
