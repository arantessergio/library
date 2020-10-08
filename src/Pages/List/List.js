import React, { useEffect, useState } from "react";
import { list as listApi } from "../../Services/Api";

import {
  Table,
  Container,
  TableContainer,
  SearchContainer,
  Input,
  SubHeader,
  TextField,
  YearFieldContainer,
  Button,
} from "./styles";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Modal,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { EmptyState } from "../../Components/EmptyState";
import { Loading } from "../../Components/Loading";
import { Link } from "react-router-dom";
import { Header } from "../../Components/Header";

import { FormPage } from "../Details/Form";

import { useAuthContext } from "../../Contexts/Auth";

const INITIAL_FILTERS = {
  page: 1,
  perPage: 20,
  search: "",
  startYear: 0,
  endYear: 2020,
};

const List = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [perPage] = useState(20);
  const [totalPages, setTotalPages] = useState(0);
  const [count, setCount] = useState(0);

  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  const [formModal, setFormModal] = useState(false);

  const { user } = useAuthContext();

  const list = async () => {
    setLoading(true);
    try {
      const result = await listApi({ token: user, ...filters });
      if (result?.data?.docs) {
        setData(result.data.docs);
        if (result.data.total) {
          setTotalPages(Math.ceil(result.data.total / perPage));
          setCount(result.data.total);
        }
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    !loading && list();
  }, [filters]);

  const handleChange = (key, val) => setFilters((f) => ({ ...f, [key]: val }));

  const handleYearFilter = () =>
    setFilters((x) => ({ ...x, startYear, endYear }));

  const handleCleanSearch = () => {
    setStartYear("");
    setEndYear("");
    setFilters(INITIAL_FILTERS);
  };

  const toggleFormModal = () => setFormModal(!formModal);

  const doneInsertion = async (reload) => {
    reload && (await list());
    toggleFormModal();
  };

  return (
    <>
      <Container>
        <Header>
          <SearchContainer>
            <Input
              placeholder="Busque livros pelo título, autor ou ISBN"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleChange("search", e.target.value)}
              value={filters.search}
            />
          </SearchContainer>
        </Header>
        <SubHeader>
          <Typography>Filtrar por ano de publicação</Typography>
          <YearFieldContainer>
            <TextField
              label="Ano inicial"
              onChange={(e) => setStartYear(e.target.value)}
              variant="outlined"
              value={startYear}
            />
            <TextField
              label="Ano final"
              onChange={(e) => setEndYear(e.target.value)}
              variant="outlined"
              value={endYear}
            />
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={handleYearFilter}
            >
              Buscar
            </Button>
            <Button
              variant="contained"
              color="default"
              size="large"
              onClick={handleCleanSearch}
            >
              Limpar
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={toggleFormModal}
            >
              Novo
            </Button>
          </YearFieldContainer>
          <Typography>{`${count} registros encontrados`}</Typography>
        </SubHeader>
        {loading && <Loading />}
        {!!data?.length && !loading && (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Livro</strong>
                  </TableCell>
                  <TableCell align="left">
                    <strong>Autor</strong>
                  </TableCell>
                  <TableCell align="left">
                    <strong>Editora</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Ano</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Ações</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {row.titulo}
                    </TableCell>
                    <TableCell align="left">{row.autor}</TableCell>
                    <TableCell align="left">{row.editora}</TableCell>
                    <TableCell align="right">{row.ano}</TableCell>
                    <TableCell align="center">
                      <Link to={`/books/${row._id}`}>Ver</Link>
                    </TableCell>
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
      </Container>
      <Modal
        open={formModal}
        onClose={toggleFormModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <FormPage goBack={doneInsertion} />
      </Modal>
    </>
  );
};

export default List;
