import { retryAxios } from "../components/retry/axiosRetry";
import { GRAPHQL_URL, REST_API } from "../constants/api";
export async function requestG(config) {
  config.url = GRAPHQL_URL;
  return await requestApi(config);
}
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
export class CommonApi {
  constructor(name) {
    this.url = REST_API + `/` + name;
  }

  getDefault() {
    return {};
  }

  getConverters() {
    return {};
  }

  getEnums() {
    return {};
  }

  getCols() {
    return [];
  }

  async getAll(token) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: this.url,
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    return await requestApi(config);
  }

  async getOne(token, id) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: this.url + `/${id}`,
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    return await requestApi(config);
  }

  async patchOne(token, id, changes) {
    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: this.url + `/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: JSON.stringify(changes),
    };

    return await requestApi(config);
  }

  async postOne(token, newObj) {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: this.url,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: JSON.stringify(newObj),
    };

    return await requestApi(config);
  }

  async deleteOne(token, id) {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: this.url + `/${id}`,
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    return await requestApi(config);
  }

  formatObj(obj) {
    const tConvs = this.getConverters();
    function format(k, v) {
      if (tConvs[k]) {
        return tConvs[k].format(v);
      }

      return v;
    }
    var formated = {};
    Object.keys(obj).forEach((k) => (formated[k] = format(k, obj[k])));
    return formated;
  }
  parseObj(obj) {
    const tConvs = this.getConverters();
    function parse(k, v) {
      if (tConvs[k]) {
        return tConvs[k].parse(v);
      }

      return v;
    }
    var parsed = {};
    Object.keys(obj).forEach((k) => (parsed[k] = parse(k, obj[k])));
    return parsed;
  }
}

export function genOptDict(enumInfo) {
  const optDict = {};
  Object.keys(enumInfo).forEach((k) => {
    var e = enumInfo[k];
    optDict[k] = [];
    Object.keys(e).forEach((label) =>
      optDict[k].push({ label, value: e[label] })
    );
  });
  return optDict;
}
