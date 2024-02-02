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

  private _checkResponse = async (res: Response) => {
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
  private _makeRequest = async ({ url, method, data }: RequestType) => {
    const config: ConfigType = {
      method,
      headers: this._headers,
    };

    if (data !== undefined) {
      config.body = JSON.stringify(data);
    }
    const res = await fetch(`${this._baseUrl}${url}`, config);

    return this._checkResponse(res);
  };

  // Пользователи сервиса ИПР
  // Получение списка сотрудников с данными по последнему ИПР
  getEmployees = () => this._makeRequest({ url: "/employees/", method: "GET" });

  // Получение всех данных о сотруднике
  getEmployeeByID = (id: string | undefined) =>
    this._makeRequest({ url: `/employees/${id}`, method: "GET" });

  // ИПР
  // Получение всех ИПР сотрудника
  getIdps = (employee_id: string | undefined) =>
    this._makeRequest({
      url: `/employees/${employee_id}/idps/`,
      method: "GET",
    });

  // Создание нового ИПР
  postIdp = (employee_id: string | number, data: {}) =>
    this._makeRequest({
      url: `/employees/${employee_id}/idps/`,
      method: "POST",
      data,
    });

  // Получение ИПР сотрудника по id ipd
  getIdpByID = (employee_id: string | undefined, idp_id: string | undefined) =>
    this._makeRequest({
      url: `/employees/${employee_id}/idps/${idp_id}`,
      method: "GET",
    });

  // обновление ИПР
  patchIdpByID = (
    employee_id: string | number,
    idp_id: string | number,
    data: {},
  ) =>
    this._makeRequest({
      url: `/employees/${employee_id}/idps/${idp_id}`,
      method: "PATCH",
      data,
    });

  getManagersStatistics = (head_id: string | number) =>
    this._makeRequest({
      url: `/head/${head_id}/statistics/`,
      method: "GET",
    });
}

const config = {
  baseUrl: "http://127.0.0.1:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Token 7770768818aca29747c62c4130a178283e93396c",
  },
};

export const api = new Api(config);
