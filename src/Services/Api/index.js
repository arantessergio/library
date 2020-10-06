import * as axios from "axios";

const BASE_URL = "http://biblioteca.supero.com.br/api";

export const list = ({ page, perPage, search, startYear, endYear }) =>
  axios.get(
    `${BASE_URL}/livros?SkipCount=${page}&MaxResultCount=${perPage}&Busca=${search}&AnoInicial=${startYear}&AnoFinal=${endYear}`
  );

export const get = (id) => axios.get(`${BASE_URL}/livros/${id}`);

export const post = (data) => axios.post(`${BASE_URL}/livros`, data);

export const put = (data, id) => axios.put(`${BASE_URL}/livros/${id}`, data);
