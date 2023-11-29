
import axios from "axios";

const retryWrapper = (axios, options) => {
  const max_time = options.retry_time;
  const retry_status_code = options.retry_status_code;
  let counter = 0;
  axios.interceptors.response.use(null, (error) => {
      /** @type {import("axios").AxiosRequestConfig} */
      const config = error.config
      // you could defined status you want to retry, such as 503
      // if (counter < max_time && error.response.status === retry_status_code) {
      if (counter < max_time) {
          counter++
          return new Promise((resolve) => {
              resolve(axios(config))
          })
      }
      return Promise.reject(error)
  })
  return axios;
}
retryWrapper(axios, { retry_time: 3 });

export const retryAxios = axios