import * as axios from "axios";

const BASE_URL = "http://localhost:4000/api";

export const list = ({ token, page, perPage, search, startYear, endYear }) =>
  axios.get(
    `${BASE_URL}/books?page=${page}&search=${search}&startYear=${startYear}&endYear${endYear}`,
    {
      headers: { authorization: token },
    }
  );

export const get = (token, id) =>
  axios.get(`${BASE_URL}/books/${id}`, { headers: { authorization: token } });

export const post = (sufix, token, data) =>
  axios.post(`${BASE_URL}/${sufix}`, data, {
    headers: { authorization: token },
  });

export const put = (token, data, id) =>
  axios.put(`${BASE_URL}/books/${id}`, data, {
    headers: { authorization: token },
  });

export const remove = (token, id) =>
  axios.delete(`${BASE_URL}/books/${id}`, {
    headers: { authorization: token },
  });
