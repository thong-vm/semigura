import { GRAPHQL_URL } from "../../constants/api";
import { requestApi } from "./restApi";

export async function requestG(config) {
    config.url = GRAPHQL_URL;
    return await requestApi(config);
  }