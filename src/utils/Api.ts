import { CONFIG_API } from "./data";
import { getToken } from "./tokenStorage";

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
  private _headers: { "Content-Type"?: string; Authorization?: string };
  constructor(options: {
    baseUrl: string;
    headers: { "Content-Type"?: string; Authorization?: string };
  }) {
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
    const token = getToken();
    if (token) {
      this._headers.Authorization = `Token ${token}`;
    }

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

  // получить статистику по команде
  getManagersStatistics = () =>
    this._makeRequest({
      url: `/head/statistics/`,
      method: "GET",
    });

  // Обновление статуса ИПР
  patchIdpsStatusByID = (
    employee_id: string | number,
    idp_id: string | number,
    data: { status: string },
  ) =>
    this._makeRequest({
      url: `/employees/${employee_id}/idps/${idp_id}/status/`,
      method: "PATCH",
      data,
    });

  // Обновление статуса Задачи
  patchTasksStatusByID = (
    idp_id: string | number,
    task_id: string | number,
    data: { status_slug: string },
  ) =>
    this._makeRequest({
      url: `/idps/${idp_id}/tasks/${task_id}/status/`,
      method: "PATCH",
      data,
    });

  // Получить комментарии по ID задачи
  getTaskCommentsByTaskID = (task_id: string | undefined) =>
    this._makeRequest({
      url: `/task/${task_id}/comments/`,
      method: "GET",
    });
  // Добавить комментарий к задаче по ID задачи
  postTaskCommentsByTaskID = (
    task_id: string | undefined,
    data: { text: string },
  ) =>
    this._makeRequest({
      url: `/task/${task_id}/comments/`,
      method: "POST",
      data,
    });

  // Получить комментарии по ID ИПР
  getIdpCommentsByIdpID = (idp_id: string | undefined) =>
    this._makeRequest({
      url: `/idp/${idp_id}/comments/`,
      method: "GET",
    });
  // Добавить комментарий к ИПР по ID ИПР
  postIdpCommentsByIdpID = (idp_id: string | undefined, data: {}) =>
    this._makeRequest({
      url: `/idp/${idp_id}/comments/`,
      method: "POST",
      data,
    });
}

export const api = new Api(CONFIG_API);
