import React, { useEffect, useState } from "react";
import { list as listApi } from "../../Services/Api";

import {
  Table,
  Container,
  TableContainer,
  SearchContainer,
  Button,
  Input,
} from "./styles";

import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { Pagination } from "@material-ui/lab";
import { EmptyState } from "../../Components/EmptyState";
import { Loading } from "../../Components/Loading";

const INITIAL_FILTERS = {
  page: 1,
  perPage: 20,
  search: "",
  startYear: 2000,
  endYear: 2020,
};

const List = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(20);
  const [totalPages, setTotalPages] = useState(0);

  const [filters, setFilters] = useState(INITIAL_FILTERS);

  useEffect(() => {
    const list = async () => {
      try {
        const result = await listApi(filters);
        console.log(result);
        if (result?.data?.items) {
          setData(result.data.items);
          result.data.totalCount &&
            setTotalPages(Math.ceil(result.data.totalCount / perPage));
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    list();
  }, [filters]);

  const handleChange = (key, val) => setFilters((f) => ({ ...f, [key]: val }));

  return (
    <Container>
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Supero</Typography>
            <SearchContainer>
              <Input
                placeholder="Busque livros pelo título, autor ou ISBN"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => handleChange("search", e.target.value)}
              />
            </SearchContainer>
          </Toolbar>
        </AppBar>
        {loading && <Loading />}
        {!!data?.length && !loading && (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Livro</TableCell>
                  <TableCell align="left">Autor</TableCell>
                  <TableCell align="left">Editora</TableCell>
                  <TableCell align="right">Ano</TableCell>
                  <TableCell align="center">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.titulo}
                    </TableCell>
                    <TableCell align="left">{row.autor}</TableCell>
                    <TableCell align="left">{row.editora}</TableCell>
                    <TableCell align="right">{row.ano}</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {!data?.length && !loading && <EmptyState />}
        {!!data?.length && !loading && (
          <Pagination
            count={totalPages}
            page={filters.page}
            onChange={(e, value) => handleChange("page", value)}
          />
        )}
      </>
    </Container>
  );
};

export default List;
