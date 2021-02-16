  import axios from "axios";
const TIMEOUT = 8000;

const createApi = (dispatch) => {
  const api = axios.create({
    baseURL: `http://www.filltext.com`,
    timeout: TIMEOUT,
    withCredentials: false,
  });

  const onSuccess = (response) => {

      return response;
    
  };

  const onFail = (err) => {
    alert("Произошла ошибка http");
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createApi;