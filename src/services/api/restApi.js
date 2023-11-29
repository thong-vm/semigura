import { retryAxios } from "../../retry/axiosRetry";
export async function requestApi(config) {
  try {
    var { status, statusText, data } = await retryAxios.request(config);
    if (status === 200 || status === 201) {
      return { result: data };
    }
    return { error: `${status}: ${statusText}` };
  } catch (ex) {
    return { error: ex.message };
  }
}
