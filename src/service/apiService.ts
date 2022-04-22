import axios, { AxiosInstance } from "axios";
import { API_URL } from "../constants";

const baseURL = API_URL;

const instance: AxiosInstance = axios.create({ baseURL });

export class ApiService {
  static get(url: string) {
    return instance.get(url);
  }
}
