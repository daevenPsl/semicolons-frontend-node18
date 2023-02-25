import axios from "axios";

import { API_BASE_URL } from "../config/Config";

export default class APIService {
  constructor() {
    let instance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    this.apiServiceInstance = instance;
  }

  async postRequest(headers, apiPathURL, data) {
    return new Promise((resolve, reject) => {
      return this.apiServiceInstance
        .post(apiPathURL, data, {
          headers,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getRequest(headers = {}, apiPathURL, params = {}) {
    return new Promise((resolve, reject) => {
      return this.apiServiceInstance
        .get(apiPathURL, { headers, params })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async deleteRequest(headers, apiPathURL, data) {
    return new Promise((resolve, reject) => {
      return this.apiServiceInstance
        .delete(apiPathURL, data, {
          headers,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
