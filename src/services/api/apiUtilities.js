import { REST_API } from "../../constants/api";
import LocalStorage from "../localStorage/localStorage";
import { requestApi } from "./restApi";

export class ApiUtilities {
  constructor(name) {
    this.url = `${REST_API}/${name}`;
  }

  headers() {
    return {
      "Content-Type": "application/json",
      Authorization: "Bearer " + LocalStorage.get("token"),
    };
  }

  /**
   * デフォルトのオブジェクト
   * @returns {obj}
   */
  getDefault() {
    return {};
  }

  /**
   * 可読のデータに変更するコンバータを取得する
   * @returns {key:{format(v){},parse(v){}}}
   */
  getConverters() {
    return {};
  }
  /**
   * [enum]情報を保存する
   * @returns {key:{label:value}}
   */
  getEnums() {
    return {};
  }
  /**
   * テーブルの設定を取得する
   * @returns [{w,l,k,r,hide}]
   */
  getCols() {
    return [];
  }

  async getAll() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: this.url,
      headers: this.headers(),
    };
    return await requestApi(config);
  }

  async getOne(id) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${this.url}/${id}`,
      headers: this.headers(),
    };
    return await requestApi(config);
  }

  /**
   * IDでオブジェクトを編集する
   * @param {string} token
   * @param {string} id
   * @param {obj} obj
   * @returns {obj} result/error
   */
  async patchOne(id, obj) {
    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${this.url}/${id}`,
      headers: this.headers(),
      data: JSON.stringify(obj),
    };

    return await requestApi(config);
  }

  /**
   * オブジェクトを新規作成
   * @param {string} token
   * @returns {obj} result/error
   */
  async post(obj) {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: this.url,
      headers: this.headers(),
      data: JSON.stringify(obj),
    };

    return await requestApi(config);
  }

  /**
   * IDでオブジェクトを削除する
   * @param {string} token
   * @param {string} id
   * @returns {obj} result/error
   */
  async delete(token, id) {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: this.url + `/${id}`,
      headers: this.headers(),
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
