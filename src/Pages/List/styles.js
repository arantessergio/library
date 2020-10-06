import {
  Table as table,
  TableContainer as tableContainer,
  Button as button,
  InputBase,
} from "@material-ui/core";
import styled from "styled-components";

export const Table = styled(table)`
  min-width: 650px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const TableContainer = styled(tableContainer)`
  margin-bottom: 40px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0 20px;
  align-items: center;
`;

export const Button = styled(button)``;

export const Input = styled(InputBase)`
  width: 100%;
  color: #fff !important;
`;
