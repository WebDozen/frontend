/* eslint-disable lines-between-class-members */
// import { getToken } from './tokenStorage';

interface RequestType {
  url: string | undefined;
  method: string;
  data?: {} | undefined;
  params?: string | undefined;
}

interface ConfigType {
  method: string;
  headers: {};
  body?: string;
}

class Api {
  private _baseUrl: string;
  private _headers: {};
  constructor(options: { baseUrl: string; headers: {} }) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse = async (res: Response) => {
    if (res.ok) {
      if (res.status === 204) {
        return res;
      }
      const data = await res.json();
      return data;
    }
    if (res.status === 404) {
      throw res;
    }
    const err = await res.json();
    throw err;
  };

  // Делаем запрос на сервер
  private _makeRequest = async ({ url, method, data, params }: RequestType) => {
    const parameters = params || "";
    const config: ConfigType = {
      method,
      headers: this._headers,
    };

    if (data !== undefined) {
      config.body = JSON.stringify(data);
    }

    const res = await fetch(`${this._baseUrl}${url}${parameters}`, config);
    return this._checkResponse(res);
  };

  // Авторизация. Получить токен
  postLogIn = (data: {}) =>
    this._makeRequest({ url: "/auth/token/login/", method: "POST", data });
  // Use this endpoint to logout user (remove user authentication token).
  postLogOut = () =>
    this._makeRequest({ url: "/auth/token/logout/", method: "POST" });

  // временный эндпоинт для эмуляции оплаты заказа
  payOrdersId = (id: string | number) =>
    this._makeRequest({ url: `/orders/${id}/is_paid/`, method: "PATCH" });
}

const config = {
  baseUrl: "https://botmarketplace.ru/api",
  headers: {
    "Content-Type": "application/json",
  },
};

export const api = new Api(config);
