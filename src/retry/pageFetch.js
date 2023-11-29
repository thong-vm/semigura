import { retryAxios } from "./axiosRetry";

const GRAPHQL_API = process.env.REACT_APP_API + "/graphql";

/**
 * クエリを送ってアカウントを取得する
 * @param {string} token　認証TOKEN
 * @param {query} query クエリ
 * @return {nodes, pageInfo} 
 */
export async function pageFetch(token, query, variables = {}, pageInfo = {
  hasNextPage: true,
  endCursor: null
}, all = true) {
  let first = all ? 50 : null; // null: user default setting (10), 50: max records number
  try {
    let data = () => JSON.stringify({
      query: query,
      variables: {
        first,
        endCursor: pageInfo.endCursor,
        ...variables,
      },
    });

    let config = () => ({
      method: "post",
      maxBodyLength: Infinity,
      url: GRAPHQL_API,
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: data(),
    });

    var nodes = [];
    do {
      var response = await retryAxios.request(config());
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      // console.log(JSON.stringify(response.data))
      nodes = nodes.concat(response.data.data.result.nodes);
      pageInfo = response.data.data.result.pageInfo;
    } while (pageInfo.hasNextPage && all);
    return { nodes, pageInfo };
  } catch (ex) {
    return { error: ex.message };
  }
}
